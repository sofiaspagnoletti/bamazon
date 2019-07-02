var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Naon21552155",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Products for Sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Product",
        "exit"
      ]
    })
    .then((answer)=> {
      switch (answer.action) {
      case "View Products for Sale":
        viewProducts();
        break;

      case "View Low Inventory":
        viewLowInv();
        break;

      case "Add to Inventory":
        addToInv();
        break;

      case "Add New Product":
        addNewProduct();
        break;
          
      case "exit":
        connection.end();
        break;
      }
    });
}


function viewProducts(params) {
    connection.query("SELECT * FROM products", function (err, results) {
        console.table(results);
        if (err) throw err;
        runSearch();
      })
    };

function viewLowInv() {
  connection.query("SELECT * FROM products where stock_quantity BETWEEN ? AND ?",[0, 5],function(err,data){
      if (err) throw err;
      console.table(data);
      runSearch()
  })
}
//if theres no product with low stock conosole log message 

function addNewProduct(params) {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the name of product you would like to add?"
      },
      {
        name: "category",
        type: "input",
        message: "What department/category would you like to place your product in?"
      },
      {
        name: "price",
        type: "input",
        message: "What would you like the price to be?",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many items are you adding to your stock?",
      }
    ])
    .then(function(answer) {
      connection.query("INSERT INTO products SET ?",
      {
        product_name:answer.item,
        department_name:answer.category,
        price: answer.price,
        stock_quantity: answer.quantity
      },
      function(err) {
        if (err) throw err;
        console.log("Your product successfully added!");
        runSearch();
      }
      )
    })
    
}

function addToInv(params) {
    
}
// show table as a list and add quantity + number they wish to add 