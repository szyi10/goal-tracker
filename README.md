# Goal Tracker Project

## Overview

This repository contains the code for the Goal Tracker application, including frontend, backend and mobile app.

## Project Structure

```bash
/goal-tracker
    /frontend   # React + Tailwind CSS
    /backend    # Node.js + Express + PostgreSQL
    /mobile     # React Native
    /docs       # Project documentation
```

## Technologies

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, PostgreSQL, MongoDB
- **AI:** OpenAI API
- **Hosting:** Vercel, Render

## Installation

### Frontend

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure enviroment variables: <br>
   Create a `.env` file based on `.env.example` and configure the variables.

4. Start the development server:

```bash
npm run dev
```

### Backend

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Configure enviroment variables:<br>
   Create a `.env` file based on `.env.example` and configure the variables.

4. Run database migrations:

```bash
npx sequelize db:migrate
```

5. Start the development server:

```bash
npm run dev
```

### Mobile

1. Navigate to the backend directory:

```bash
cd mobile
```

2. Install dependencies:

```bash
npm install
```

3. Configure enviroment variables:<br>
   Create a `.env` file based on `.env.example` and configure the variables.

4. Start the development server:

```bash
npm run dev
```

## Scripts

Each subproject (frontend, backend, mobile) has its own set of scripts for development, building and testing. Refer to their respective README.md ifles for more details.

## Documentation

Refer to the `/docs` folder for detailed documentation on the project, including database schema, project ideas and development plans.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.
