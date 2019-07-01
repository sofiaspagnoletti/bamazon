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


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo (2nd Generation) - Smart speaker with Alexa", "Electronics", 69.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot (3rd Gen) - Smart speaker with Alexa", "Electronics", 24.99, 130);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 250.99, 210);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Iphone 6s", "Electronics", 199.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Mug", "Home", 10.99, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffeemaker", "Home", 98.99, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skillet with Glass Cover", "Home", 32.00, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men Sandals", "Clothing", 25.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cotton Shirt", "Clothing", 26.00, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 16.00, 85);

USE bamazon_DB;
SELECT* FROM products;
