# Проект "IPsec-info"

Це веб-додаток для авторизації та реєстрації користувачів. Проект складається з бекенду на Node.js та фронтенду на React.

## Технології та версії

### Бекенд
- **Node.js** (`20.11.1`)
- **Express** (`4.21.1`)
- **MongoDB** (`8.8.2`, через бібліотеку `mongoose`)
- **CSRF** (версія: `1.11.0`)
- **bcrypt** (`5.1.1`)
- **body-parser** (`1.20.3`)
- **cookie-parser** (`1.4.7`)
- **cors** (`2.8.5`)
- **express-rate-limit** (`7.4.1`)
- **dotenv** (`16.4.5`)
- **uuid** (`11.0.3`)

### Фронтенд
- **React** (`18.3.1`)
- **Axios** (`1.7.7`)
- **Material-UI** (`6.1.7`)
- **React Router** (`6.28.0`)
- **@emotion/react** (`11.13.3`)
- **@emotion/styled** (`11.13.0`)
- **Material Icons** (`1.13.12`)
- **ESLint** (`9.13.0`)
- **Prettier** (`3.3.3`)
- **Vite** (`5.4.10`)

## Встановлення залежностей

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/bondyaroslav/ipsec-info.git

2. Бекенд:
   ```bash
   cd backend
   npm install
   npm start
   
3. Фронтенд:
   ```bash
   cd frontend
   npm install
   npm run dev

## Структура проекта

   ```bash
    ipsec-info/
    │
    ├── backend/                   # Бекенд (Node.js, Express)
    │   ├── index.js               # Основний файл серверу
    │   ├── package.json           # Залежності для бекенду
    │   └── .env                   # Конфігураційні змінні середовища
    │
    ├── frontend/                  # Фронтенд (React, MaterialUI)
    │   ├── src/                   # Джерельні файли
    │   │   ├── components/        # Компоненти Atomic Design
    │   │   ├── App.jsx            # Основний файл додатка
    │   │   └── index.js           # Точка входу додатка
    │   │── vite.config.js         # Налаштування Vite
    │   │── eslint.config.js       # Налаштування ESLint
    │   └── prettierrc             # Налаштування Prettier
    │
    └── README.md                  # Документація