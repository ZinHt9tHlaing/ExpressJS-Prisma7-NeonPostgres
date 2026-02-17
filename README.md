# Express.js + TypeScript + Prisma + Neon Postgres

A Repo for building REST APIs with **Express.js**, **TypeScript**, **Prisma ORM**, and **Neon Postgres** (serverless Postgres). This project provides a solid foundation with a clean architecture, environment configuration, and database integration.

## Features

- ⚡ **Express.js** – Fast, unopinionated, minimalist web framework.
- 🔷 **TypeScript** – Static typing and modern ES features.
- 🗄️ **Prisma** – Next-generation ORM with type-safe database queries.
- 🐘 **Neon Postgres** – Serverless Postgres with branching and scaling.
- 📁 **Modular structure** – Routes, controllers, services, and middleware separated.
- 🔐 **Environment variables** – Securely manage configuration with `dotenv`.
- 🛠️ **Nodemon** – Automatic server restarts during development.
- 📦 **Pre-configured scripts** – Build, start, dev, and Prisma commands.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- A [Neon](https://neon.tech/) account (free tier available)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ZinHt9tHlaing/ExpressJS-Prisma7-NeonPostgres.git
cd your-repo-name
```

### 2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

```bash
DATABASE_URL="postgresql://<user>:<password>@<host>/<dbname>?sslmode=require"
PORT=3000
```

4. Set up Prisma and the database

```bash
npx prisma migrate dev --name init
```

5. Run the development server

```bash
npm run dev
```


