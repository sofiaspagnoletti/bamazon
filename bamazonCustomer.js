var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "123123123",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  connection.query("SELECT * FROM products", function (err, results) {
    console.table(results);
    if (err) throw err;
    buyProd();
  })
};

function buyProd() {
  inquirer
    .prompt([
      {
        name: "selectProd",
        type: "input",
        message: "What's the item_ID of the product you would you like to buy?"
      },
      {
        name: "selectQuantity",
        type: "input",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(function (answer) {
      const selectProd = answer.selectProd;
      const selectQuantity = parseInt(answer.selectQuantity);

      connection.query("SELECT stock_quantity FROM products WHERE item_id = " + selectProd, function (err, result) {
        if (err) throw err;
        if (result[0].stock_quantity < selectQuantity) {
          console.log("Insufficient quantity!")
          choices();
        } else {
          const updateQueryText = "UPDATE products SET stock_quantity = stock_quantity - " + selectQuantity + " WHERE item_id = " + selectProd;
          connection.query(updateQueryText, function (err) {
            if (err) throw err;
            connection.query("SELECT price FROM products WHERE item_id = " + selectProd, function (err, result) {
              if (err) throw err;
              console.log("Your order was successfully placed! Your total cost is: $" + result[0].price * selectQuantity);
              choices();
            });
          });
        }
      });
    });
}

function choices() {
  inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What do you want to do?',
    choices: [
      "Continue",
      "Exit"
    ]
  }).then(function (answer) {
    var userChoice = answer.action;
    switch (userChoice) {
      case "Continue":
        start();
        break;

      case "Exit":
        connection.end();
        break;
    }
  })
}

