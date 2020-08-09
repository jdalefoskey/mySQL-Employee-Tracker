DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
name VARCHAR
    (36)
);
    CREATE TABLE role
    (
        id INT NOT NULL
        AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR
        (37),
    salary DECIMAL,
    department_id INT
);

        CREATE TABLE employee
        (
            id INT NOT NULL
            AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR
            (37),
    last_name VARCHAR
            (37),
    role_id INT,
    manager_id INT
);