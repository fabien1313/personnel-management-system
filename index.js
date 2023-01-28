const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const dotenv = require('dotenv'); 
require('dotenv').config();

const command = console.log;




const db_connection = mysql.createConnection({
host: process.env.HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DATABASE
});


db_connection.connect(err => {
    if (err) throw err;
    console.log('You have successfully connected to the employee database!');
    startPrompt();

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
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            case 'Update an employee manager':
                updateManager();
                break;
            case 'View employees by department':
                viewEmpByDepartment();
                break;
            case 'Delete a department':
                deleteDepartment();
                break;
            case 'Delete a role':
                deleteRole();
                break;
            case 'Delete an employee':
                deleteEmployee();
                break;
            case 'View department budgets':
                viewbudgets();
                break;
            case 'Terminate program':
                terminate();
                break;       
        }
    });
};

const viewDepartments = async () => {
    db_connection.query('SELECT * FROM department', (err, result) => {
        if (result) {
            console.table(result)
            startPrompt();
        } else if (err) {
            console.log('There was an error with your request. Please notify your admin of Error: ', err);
        }
    });
};

const viewRoles = async () => {
    db_connection.query('SELECT * FROM roles', (err, result) => {
        if (result) {
            console.table(result)
            startPrompt();
        } else if (err) {
            console.log('There was an error with your request. Please notify your admin of Error: ', err);
        }
    });
};

const viewEmployees = async () => {
    db_connection.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id', (err, result) => {
        if (result) {
            console.table(result)
            startPrompt();
        } else if (err) {
            console.log('There was an error with your request. Please notify your admin of Error: ', err);
        };
    });
};


const addDepartment = async () => {
    try {
        const result = await inquirer.prompt ([
            {
                type: 'input',
                name: 'department_name',
                message: 'Enter the name of the department you would like to add.'
            }
        ]);
        const {department_name} = result;
        const addNew = `INSERT INTO department (department_name) VALUES ('${department_name}')`;
        await db_connection.promise().query(addNew);
        command(`Department ${department_name} has been added successfully`);
        startPrompt();
    }
    catch (err) {
        command('There was an error with your request. Please notify your admin of Error: ', err);
    }
};






