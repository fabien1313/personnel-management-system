DROP DATABASE IF EXISTS employee_db; 
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE DATABASE employee_db; 

USE employee_db; 


CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR(30) NOT NULL 
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL, 
    salary DEC NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT
    -- FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    -- FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

ALTER TABLE employee (
ADD FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
ADD FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL;
);



