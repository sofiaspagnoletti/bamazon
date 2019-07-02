ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Naon21552155';

DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price DECIMAL(10,2),
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

