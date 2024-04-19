const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "library_db",
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});

app.get("/books", async (req, res) => {
  const connection = await getDBConnection();
  const querySQL = "SELECT * FROM books";
  const [result] = await connection.query(querySQL);
  connection.end();
  res.json({
    info: { count: result.length },
    results: result,
  });
});

app.get("/books/:id", async (req, res) => {
  const idBook = req.params.id;
  const connection = await getDBConnection();
  const querySQL = "SELECT * FROM books WHERE id = ?";
  const [result] = await connection.query(querySQL, [idBook]);
  connection.end();
  if (result.length === 0) {
    res.status(404).json({
      error: "No elements found",
    });
  } else {
    res.status(200).json({
      success: true,
      result: result,
    });
  }
});

app.post("/books", async (req, res) => {
  const data = req.body;
  const { title, author, publication_date, isbn, description } = data;

  const connection = await getDBConnection();
  const querySQL =
    "INSERT INTO books (title, author, publication_date, isbn, description) VALUES (?, ?, ?, ?, ?)";
  const [result] = await connection.query(querySQL, [
    title,
    author,
    publication_date,
    isbn,
    description,
  ]);
  connection.end();
  res.status(201).json({
    success: true,
    id: result.insertId,
  });
});

app.put("/books/:id", async (req, res) => {
  const idBook = req.params.id;
  const newData = req.body;
  const { title, author, publication_date, isbn, description } = newData;
  const connection = await getDBConnection();
  const query =
    "UPDATE books SET title = ?, author = ?, publication_date = ?, isbn = ?, description = ? WHERE id = ?";
  const [result] = await connection.query(query, [
    title,
    author,
    publication_date,
    isbn,
    description,
    idBook,
  ]);
  connection.end();

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
  });
});

app.delete("/books/:id", async (req, res) => {
  const idBook = req.params.id;
  const connection = await getDBConnection();
  const sqlQuery = "DELETE FROM books WHERE id = ?";
  const [result] = await connection.query(sqlQuery, [idBook]);
  connection.end();
  if (result.affectedRows > 0) {
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No book found to delete",
    });
  }
});
