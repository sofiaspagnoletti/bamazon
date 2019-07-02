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
    .then(function(answer) {
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

function viewLowInv(params) {
    
}

function addToInv(params) {
    
}

function addNewProduct(params) {
    
}