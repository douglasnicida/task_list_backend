# Task Management API

## Description
This is the backend API for the Task Management Application, built using **NestJS** and **TypeScript**. The API provides endpoints for managing tasks, allowing users to create, read, update, and delete tasks efficiently. The application uses **Prisma ORM** for database interactions, simplifying data management and enhancing type safety.

## Features
- **RESTful API**: Fully REST-compliant API for managing tasks.
- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Data Validation**: Input validation using class-validator to ensure data integrity.
- **Database Integration**: Connects to a database (e.g., PostgreSQL) for persistent storage of tasks using Prisma.
- **Error Handling**: Comprehensive error handling for all endpoints.

## Technologies Used
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Prisma ORM**: For seamless database interactions and migrations.
- **PostgreSQL**: Database used for storing task data.
- **Jest**: For unit testing and integration testing.

## API Endpoints
Here are some of the key endpoints available in the API:
### Tasks
- GET /tasks: Retrieve all tasks.
- GET /tasks/:id: Retrieve a specific task by ID.
- POST /tasks: Create a new task.
- PUT /tasks/:id: Update an existing task by ID.
- DELETE /tasks/:id: Delete a task by ID.

## Installation
To set up the backend API, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-management-api.git
```
2. Navigate into the project directory:
```bash
cd task-management-api
```
3. Install dependencies:
```bash
npm install
```
3. Install dependencies:
```bash
npm install
```
