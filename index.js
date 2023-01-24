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

});









