DROP DATABASE IF EXISTS twatter_db;

CREATE DATABASE twatter_db;

USE twatter_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL,
    PRIMARY KEY(id)
);