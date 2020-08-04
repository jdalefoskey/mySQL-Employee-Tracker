var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Coding2020",
  database: "employeesDB",
});

connection.connect(function (err) {
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
        "Add new employee",
        "Delete employee",
        "View all employees",
        "Update employee manager",
        "Update employee department",
        "exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add new employee":
          addEmployee();
          break;

        case "Delete employee":
          deleteEmployee();
          break;

        case "View all employees":
          viewAll();
          break;

        case "Update employee manager":
          updateMngr();
          break;

        case "Update employee department":
          updateDpt();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_Name", // Link to stored answer
        message: "What is employee's first name?",
      },
      {
        type: "input",
        name: "last_Name", // Link to stored answer
        message: "What is employee's last name?",
      },
      {
        type: "input",
        name: "title", // Link to stored answer
        message: "What is employee's title?",
      },
      {
        type: "input",
        name: "salary", // Link to stored answer
        message: "What is employees salary?",
      },
      {
        type: "input",
        name: "dept_name", // Link to stored answer
        message: "What is employees department name?",
      },
      {
        type: "input",
        name: "name", // Link to stored answer
        message: "Who is the employees manager?",
      },
    ])
    .then(function (answer) {
      firstName = answer.first_name;
      lastName = answer.last_name;
      manager = answer.name;
      console.log(manager);
      // var sql =
      //   "INSERT INTO employee (first_name, last_name, manager_id) VALUES (firstName, lastName, manager)";
    });
}
//
// }

function deleteEmployee() {}

function viewAll() {}

function updateMngr() {}

function updateDpt() {}
