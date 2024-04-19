const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
});