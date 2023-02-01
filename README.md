# personnel-management-system
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  <hr>

  ## Description
  This repository hosts a Employee Tracker program. Often, a developer must create an interface that allows non-developers the ability to interact and view data stored in a database.

  Typically, these are referred to as content management system or (CMS). Using this program you can view all departments, all roles, all employees, add a department, add a role, add an employee, and update an employee role.

**User Story:**<br>
AS A business owner <br>
I WANT to be able to view and manage the departments, roles, and employees in my company <br>
SO THAT I can organize and plan my business

**Acceptance Criteria:** <br>
GIVEN a command-line application that accepts user input<br>
WHEN I start the application<br>
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br>
WHEN I choose to view all departments<br>
THEN I am presented with a formatted table showing department names and department ids<br>
WHEN I choose to view all roles<br>
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br>
WHEN I choose to view all employees<br>
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br>
WHEN I choose to add a department<br>
THEN I am prompted to enter the name of the department and that department is added to the database<br>
WHEN I choose to add a role<br>
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br>
WHEN I choose to add an employee<br>
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br>
WHEN I choose to update an employee role<br>
THEN I am prompted to select an employee to update and their new role and this information is updated in the database


  <hr>

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  <hr>

  ## Installation
  You will need to start by having Node.js downloaded on your local machine.

  THEN you run npm install for all of the packages listed below.

  - MySQL,
  - Inquirer,
  - Console.table,
  - Dotenv
  <hr>

  ## Usage
  Walkthrough Video: https://drive.google.com/file/d/1wnFY37uvSqAYk54bFIt9aX37iBMjFTc-/view 

  Initialize the program by entering (npm start) in the command line or terminal. Once you do that, you will be prompted with a menu which you can navigate with your arrows keys to view, add, update, and delete.
  <hr>

  ## Technologies
 - Node.js (Several Npm Packages: Listed above)
 - JavaScript
 

 <hr>

 ## Contributing
James Kelly @ https://www.linkedin.com/in/james-kelly-b93a94150/ <br>
MySQL2 @ https://www.npmjs.com/package/mysql2#first-query <br>
NPM @ https://www.npmjs.com/package/inquirer <br>
Dotenv @ https://www.npmjs.com/package/dotenv <br>
Console.table @ https://www.npmjs.com/package/console.table


 <hr>

 ## Questions
 If you have questions, comments, or concerns please reach me at https://github.com/fabien1313
 or
 fabienmoreno1331@yahoo.com
<hr>

 ## License
 **License:** MIT

Copyright (c) 2023 fabien1313

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.