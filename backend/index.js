require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ['https://ipsec-info-as1lnx4rq-bondyaroslavs-projects.vercel.app', 'http://localhost:5173'],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    csrf({
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        },
    })
);

app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({ error: 'Invalid CSRF token' });
    } else {
        next(err);
    }
});

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.get('/csrf-token', (req, res) => {
    res.status(200).json({ csrfToken: req.csrfToken() });
});

app.post('/register', async (req, res) => {
    try {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const userId = uuidv4();
        const passwordHash = await bcrypt.hash(password, 10);

        const user = new User({ userId, passwordHash });
        await user.save();

        res.status(201).json({ userId, message: 'Save this ID for future logins!' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts. Please try again later.',
});

app.post('/login', loginLimiter, async (req, res) => {
    try {
        const { userId, password } = req.body;
        if (!userId || !password) {
            return res.status(400).json({ error: 'User ID and password are required' });
        }

        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.status(200).json({ message: `Welcome, ${userId}!` });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
