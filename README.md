# Backend Of User Search Application

# Бекнд Приложения для Поиска Пользователей

This is a simple user search application built using NestJS and React.
Это простое приложение для поиска пользователей, построенное с использованием NestJS и React.

It allows users to search for other users by email and phone number.
Оно позволяет пользователям искать других пользователей по электронной почте и номеру телефона.

It allows users to search for other users by email and phone number.
Оно позволяет пользователям искать других пользователей по электронной почте и номеру телефона.

## Features

- Search users by email and phone number.
- Cancel ongoing search requests when a new request is made.
- Handles connection closure and request cancellation.

## Возможности

- Поиск пользователей по электронной почте и номеру телефона.
- Отмена текущих запросов при отправке нового запроса.
- Обработка закрытия соединения и отмены запросов.

## Tech Stack

- **Backend:** NestJS, Express
- **Frontend:** React, Ant Design
- **Database:** JSON file (for simplicity in this demo)
- **HTTP Client:** Axios

## Технологический Стек

- **Backend:** NestJS, Express
- **Frontend:** React, Ant Design
- **База данных:** JSON файл (для простоты в этом демо)
- **HTTP Клиент:** Axios

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NuraliAKH/3205_frontend.git
   cd 3205_frontend
   ```
2. **Frontend Setup:**
   ```sh
   npm install
   ```

### Running the Application

    ```sh
    npm run dev
    ```

1. **Start the Frontend Server:**
   The backend server will start on `http://localhost:5173`.

## Начало Работы

### Предварительные Требования

- Node.js (v14 или новее)
- npm или yarn

### Установка

1.  **Клонируйте репозиторий:**

    ```sh
    git clone https://github.com/NuraliAKH/3205_frontend.git
    cd 3205_frontend
    ```

2.  **Настройка Frontend:**

    ```sh
    npm install
    ```

### Запуск Приложения

    ```sh
    npm run dev
    ```

1.  **Запустите Frontend Сервер:**
    Сервер frontend запустится на `http://localhost:5173`.

#### Frontend

- `src/hooks/useUserSearch.ts`: Custom hook to handle user search logic with request cancellation.
- `src/components/UserSearchComponent.tsx`: Main component for user search UI.
- `src/service/usersService.ts`: Axios service to interact with the backend API.

#### Frontend

- `src/hooks/useUserSearch.ts`: Пользовательский хук для обработки логики поиска пользователей с отменой запросов.
- `src/components/UserSearchComponent.tsx`: Основной компонент для UI поиска пользователей.
- `src/service/usersService.ts`: Axios сервис для взаимодействия с API backend.
