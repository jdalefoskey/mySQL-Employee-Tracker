const mysql = require("mysql");
const inquirer = require("inquirer");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Coding2020",
  database: "employees",
});

connection.connect(function (err) {
  if (err) throw err;
  runProgram();
});

function runProgram() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which action do you want to take?",
      choices: [
        "View employees",
        "Add a new employee",
        "Add a new department",
        "Add a new role",
        "Update an employee",
        "finished",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View employees":
          viewEmployees();
          break;
        case "Add a new employee":
          addEmployee();
          break;
        case "Add a new department":
          addDepartment();
          break;
        case "Add a new role":
          addRole();
          break;
        case "Update an employee":
          //updateRole();
          break;
        case "finished":
          connection.end();
          break;
      }
    });
}

function viewEmployees() {
  var query =
    "SELECT employee.id, first_name, last_name, title, salary, department.name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id;";
  connection.query(query, function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        "Id: " +
          res[i].id +
          " Name: " +
          res[i].first_name +
          " " +
          res[i].last_name +
          " || Title: " +
          res[i].title +
          " || Salary: " +
          res[i].salary +
          " || Dept: " +
          res[i].name
      );
    }
    runProgram();
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "role_title",
        type: "input",
        message: "What is their title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is their salary?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        { title: answer.role_title, salary: answer.salary },
        function (err, res) {
          if (err) throw err;
          console.log(answer.role_title + " added to roles");
          runProgram();
        }
      );
    });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "dept_name",
        type: "input",
        message: "What is the name of department?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO department SET ?",
        { name: answer.dept_name },
        function (err, res) {
          if (err) throw err;
          console.log(answer.dept_name + " added to departments");
          runProgram();
        }
      );
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "Employee's last name?",
      },
      {
        name: "role",
        type: "list",
        message: "Employee's role?",
        choices: [
          "Sales",
          "Asst manager",
          "Technical asst",
          "accounting",
          "Receptionist",
          "cook",
        ],
      },
      {
        name: "lead",
        type: "list",
        message: "Employee's manager?",
        choices: [
          "Ashley Killer",
          "Ronnie Bunns",
          "Jason Mays",
          "Dr Pimple popper",
        ],
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
        },
        function (err) {
          if (err) throw err;
          console.log("Added new employee");
          runProgram();
        }
      );
    });
}
