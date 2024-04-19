CREATE DATABASE library_db; 

USE library_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(245),
    publication_date DATE,
    isbn VARCHAR(20),
    description TEXT
);

INSERT INTO books (title, author, publication_date, isbn, description) VALUES 
('One Hundred Years of Solitude', 'Gabriel García Márquez', '1967-06-05', '978-8437604947', 'The novel tells the story of the Buendía family over seven generations in the fictional town of Macondo.'),
('Harry Potter and the Half-Blood Prince', 'J.K. Rowling', '2005-07-16', '978-0439785969', 'This sixth book in the Harry Potter series delves deeper into Lord Voldemort’s past and Harry’s preparation for the final battle against dark forces.');
