# Library Management API

This project is a simple RESTful API for managing a library's books using Node.js, Express, MySQL, and Swagger for API documentation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MySQL

### Installing

Clone the repository to your local machine:
git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-lejladzanko.git

Install the required dependencies:
npm install

Set up the environment variables by renaming .env_example to .env and filling in the details:
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=library_db
PORT=5001

Start the MySQL database and ensure it's running.

Run the database schema file library.sql to set up your MySQL tables.

### Running the server

To start the server, run:
npm start

Or if you're using nodemon for live reloading:
nodemon src/index.js

Ensure you're in the directory containing the index.js file.

### Swagger API Documentation
After running the server, access the Swagger UI to interact with the API at:
http://localhost:5001/api-docs

### API Endpoints

The API endpoints are as follows:

GET /books - Retrieves a list of books.
GET /books/:id - Retrieves a book by its ID.
POST /books - Adds a new book.
PUT /books/:id - Updates the details of an existing book.
DELETE /books/:id - Deletes a book.

### Built with

- Express - The web framework used.
- MySQL - The database used.
- Swagger UI Express - API documentation.





