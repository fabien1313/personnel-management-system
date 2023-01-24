INSERT INTO department (department_name)
VALUES
('Sales'),
('Accounting'),
('Human Resources'),
('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
('Account Manager', 52000, 1),
('Account Executive', 45000, 1),
('Accountant', 61000, 2),
('Financial Advisor', 80000, 2),
('Chief Human Resources Officer', 64000, 3),
('Employee Experience Architect', 48000, 3),
('Marketing Coordinator', 47500, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Fabien', 'Moreno', 1, 1),
('Jack', 'Belveth', 2, 3),
('Ashley', 'Bernard', 2, null),
('Jill', 'Paisley', 1, null),
('Royal', 'Fresco', 3, 2),
('Jane', 'Doe', 3, 2),
('Sarah', 'Lava', 4, null);


