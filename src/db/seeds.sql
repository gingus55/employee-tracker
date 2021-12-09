USE tracker_db;

INSERT INTO department (dept_name)
VALUES ("Human Resources"),
    ("IT"),
    ("Teaching");

INSERT INTO role (title, salary, department_id)
VALUES ("teacher", 30000, 3),
("admin", 25000, 1),
("office", 22000, 1),
("support", 18000, 3),
("technical", 28000, 2),
("phones", 23000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Smith", 2, 1),
("Charlie", "Brown", 1, 2),
("Geoff", "Gilly", 4, 1),
("Billy", "Nomates", 3, 3),
("Vivien", "Westley", 5, 1),
("Bruce", "Wayne", 6, 2),
("Peter", "Parker", 5, 2),
("Flash", "Gordon", 1, 3);

