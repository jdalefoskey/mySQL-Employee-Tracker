use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Administrative'),
    ('Accounting'),
    ('Kitchen');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales', 100000, 1),
    ('Asst manager', 80000, 1),
    ('Technical asst', 150000, 2),
    ('accounting', 120000, 2),
    ('Receptionist', 160000, 3),
    ('cook', 125000, 3);



INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Ashley', 'Killer', 1, NULL),
    ('Ronnie', 'Bunns', 2, 1),
    ('Jason', 'Mays', 3, NULL),
    ('Dr Pimple', 'popper', 4, 3);
    