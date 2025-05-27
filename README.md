# 🛒 Products Microservice

Microservice for product management, developed with NestJS, Prisma, and SQLite.

## 📑 Index

- [🚀 Architecture Overview](#-architecture-overview)
- [Domain Driven Design](#domain-driven-design)

  - [🧩 Domain](#-domain)
  - [🏗️ Infrastructure](#-infrastructure)
  - [🖥️ Application](#-application)

- [⚙️ Useful Scripts (`package.json`)](#️-useful-scripts-packagejson)

  - [💻 Development Environment](#-development-environment)
  - [ℹ️ About Environment Variable Configuration](#️-about-environment-variable-configuration)

- [🔗 Endpoints](#-endpoints)

## 🚀 Architecture Overview

This service starts **two servers** simultaneously:

- **REST API**: Exposes HTTP endpoints for product management (see [Endpoints](#-endpoints)).
- **TCP Microservice**: Listens for TCP messages, enabling integration with other microservices.

Both servers are initialized in `src/main.ts` using NestJS. The ports for each are configured via environment variables (`PORT_REST` for HTTP, `PORT_MICRO_SERVICE` for TCP).

A global validation pipe is applied to all incoming requests, ensuring data integrity and automatic validation of DTOs.

## Domain Driven Design

- [Use Cases](src/useCases)

This microservice applies Domain Driven Design (DDD) to structure its core logic, using entities, value objects, aggregates, services, and repositories for clear separation of concerns and scalability.

### 🧩 Domain

This is the core of the application.

- [domain](src/useCases/domain)
  - [entity](src/useCases/domain/entity)
  - [repository](src/useCases/domain/repository)

### 🏗️ Infrastructure

Implements the business rules and technical details of the application.

- [infrastructure](src/useCases/infrastructure)
  - [sql-lite-prisma](src/useCases/infrastructure/sql-lite-prisma)

### 🖥️ Application

Implements different ways to manage data. In this specific case, only **SQLite** is used as the data storage solution.

- [application](src/useCases/application)
  - [manage-products](src/useCases/application/manage-products)

## ⚙️ Useful Scripts (`package.json`)

In the `package.json` file you will find scripts for the most common tasks:

- 📦 Install dependencies:
  ```bash
  npm install
  ```
- 🛠️ Run Prisma migrations:
  ```bash
  npx prisma migrate dev --name init
  ```
- 🧪 Run unit tests:
  ```bash
  npm run test
  ```
- 🚦 Run end-to-end tests:
  ```bash
  npm run test:e2e
  ```
- 📊 Generate test coverage:
  ```bash
  npm run test:cov
  ```

### 💻 Development Environment

1. 📄 Read the [.env.template](.env.template) file
2. 🛠️ Run the migrations to prepare the database:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
3. ▶️ Start the server in development mode:
   ```bash
   npm run start:dev
   ```

### ℹ️ About Environment Variable Configuration

The [`envs.ts`](src/common/config/envs.ts) file is responsible for loading and validating the environment variables.

- It uses the `dotenv` library to read the `.env`.

- If any of these variables are missing, the application will throw an error indicating which one is missing.

## 🔗 Endpoints

Below are the main endpoints of the products microservice:

- **GET /products**  
  📃 Retrieves the list of all products.

- **GET /products/:id**  
  🔍 Retrieves a product by its ID.

- **POST /products**  
  ➕ Creates a new product.

- **PUT /products/:id**  
  ✏️ Updates an existing product.

- **DELETE /products/:id**  
  🗑️ Deletes a product by its ID.
