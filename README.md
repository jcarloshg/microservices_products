# 🛒 Products Microservice

Microservice for product management, developed with NestJS, Prisma, and SQLite.

## 📑 Index

- [⚙️ Useful Scripts (`package.json`)](#️-useful-scripts-packagejson)
  - [💻 Development Environment](#-development-environment)
  - [ℹ️ About Environment Variable Configuration](#️-about-environment-variable-configuration)
- [🔗 Endpoints](#-endpoints)

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
