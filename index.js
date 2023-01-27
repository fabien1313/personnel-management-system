const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const dotenv = require('dotenv'); 
require('dotenv').config();




const db_connection = mysql.createConnection({
host: process.env.HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DATABASE
});


db_connection.connect(err => {
    if (err) throw err;
    console.log('You have successfully connected to the employee database!');
    inquirer.prompt(questions)

});


const startPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'navmenu',
            message: 'What would you like to do?',
            choices: [
             'View all departments',
             'View all roles', 
             'View all employees', 
             'Add a department', 
             'Add a role', 
             'Add an employee', 
             'update an employee role', 
             'Update an employee manager',
             'View employees by department',
             'Delete a department',
             'Delete a role',
             'Delete an employee',
             'View department budgets',
             'Terminate program'
            ]
        }
    ]).then(answer => {
        switch (answer.navmenu) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case ''
        }

    });

};






