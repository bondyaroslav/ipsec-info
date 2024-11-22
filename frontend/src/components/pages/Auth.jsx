import { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { AuthForm } from '../organisms/AuthForm.jsx'
import { RegisterForm } from '../organisms/RegisterForm.jsx'
import { Notification } from '../atoms/Notification.jsx'
import axios from 'axios'

const StyledAuth = styled('main')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

axios.defaults.withCredentials = true

export const Auth = () => {
    const [isAuth, setIsAuth] = useState(true)
    const [password, setPassword] = useState('')
    const [accountId, setAccountId] = useState('')
    const [userId, setUserId] = useState()
    const [notification, setNotification] = useState({ message: '', type: '' })
    const [csrfToken, setCsrfToken] = useState('')

    const getCsrfToken = async () => {
        try {
            const response = await axios.get('https://ipsec-info.onrender.com/csrf-token', {
                withCredentials: true,
            })
            setCsrfToken(response.data.csrfToken)
        } catch (error) {
            showNotification(error, 'error')
        }
    }

    useEffect(() => {
        getCsrfToken()
    }, [])

    const onPasswordChange = (value) => {
        setPassword(value)
    }

    const onAccountIdChange = (value) => {
        setAccountId(value)
    }

    const onIsAuthChange = () => {
        setIsAuth(!isAuth)
    }

    const showNotification = (message, type) => {
        setNotification({ message, type })
        setTimeout(() => setNotification({ message: '', type: '' }), 5000)
    }

    const registerNewUser = () => {
        const data = { password: password }
        axios
            .post('https://ipsec-info.onrender.com/register', data, {
                headers: { 'X-CSRF-Token': csrfToken },
                withCredentials: true,
            })
            .then((response) => {
                setUserId(response.data.userId)
                showNotification(response.data.message, 'success')
            })
            .catch(() => {
                showNotification('Registration failed. Try again.', 'error')
            })
    }

    const loginUser = () => {
        const data = {
            userId: accountId,
            password: password,
        }
        axios
            .post('https://ipsec-info.onrender.com/login', data, {
                headers: { 'X-CSRF-Token': csrfToken },
            })
            .then((response) => {
                showNotification(response.data.message, 'success')
            })
            .catch(() => {
                showNotification('Login failed. Check your credentials.', 'error')
            })
    }

    return (
        <StyledAuth>
            {notification.message && (
                <Notification
                    message={notification.message}
                    onClose={() => setNotification({ message: '', type: '' })}
                />
            )}
            {isAuth ? (
                <AuthForm
                    accountId={accountId}
                    password={password}
                    loginUser={loginUser}
                    onIsAuthChange={onIsAuthChange}
                    onAccountIdChange={onAccountIdChange}
                    onPasswordChange={onPasswordChange}
                />
            ) : (
                <RegisterForm
                    password={password}
                    userId={userId}
                    registerNewUser={registerNewUser}
                    onPasswordChange={onPasswordChange}
                    onIsAuthChange={onIsAuthChange}
                />
            )}
        </StyledAuth>
    )
}
