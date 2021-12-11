const viewDepartments = async (db) => {
  const departments = await db.query("SELECT * FROM tracker_db.department");
  console.table(departments);
};

const viewRoles = async (db) => {
  const roles = await db.query(
    "SELECT role.id, role.title, role.salary, dept_name FROM role JOIN department ON role.department_Id = department.id ORDER BY dept_name"
  );
  console.table(roles);
};

const viewEmployees = async (db) => {
  const employees = await db.query(
    "SELECT employee_role.first_name, employee_role.last_name, title, salary, dept_name FROM employee employee_role LEFT JOIN role ON employee_role.role_id=role.id LEFT JOIN department ON role.department_id=department.id"
  );
  console.table(employees);
};

const addRole = async (db, answer) => {
  const query = `INSERT INTO role (title, salary, department_Id) VALUES ('${answer.name}', ${answer.sal}, ${answer.dept})`;
  await db.query(query);
  console.log("role added");
};

const addDepartment = async (db, value) => {
  const query = `INSERT INTO department (dept_name) VALUES ('${value}')`;
  await db.query(query);
  console.log("department added");
};

const addEmployee = async (db, answer) => {
  const query = `INSERT INTO employee (first_name, last_name, role_Id, manager_Id) VALUES ('${answer.first}', '${answer.second}', ${answer.role}, ${answer.manager})`;
  await db.query(query);
  console.log("employee added");
};

const updateEmployee = async (db, answer) => {
  const query = `UPDATE tracker_db.employee SET role_id = ${answer.role} WHERE id = ${answer.emp}`;
  await db.query(query);
  console.log("update employee");
};

// BONUS

const viewByManager = () => {
  console.log("viewing by manager");
};

const viewByDepartment = async (db, answer) => {
  const query = `SELECT employee_role.first_name, employee_role.last_name, title, salary, dept_name FROM employee employee_role LEFT JOIN role ON employee_role.role_id=role.id LEFT JOIN department ON role.department_id=department.id WHERE department_id = ${answer.dept}`;
  const employees = await db.query(query);
  console.table(employees);
  console.log("viewing by department");
};

const deleteDepartment = async (db, answer) => {
  const query = `DELETE FROM tracker_db.department WHERE id=${answer.dept}`;
  await db.query(query);
  console.log("department deleted");
};

const deleteRole = async (db, answer) => {
  const query = `DELETE FROM tracker_db.role WHERE id=${answer.role}`;
  await db.query(query);
  console.log("role deleted");
};

const deleteEmployee = async (db, answer) => {
  const query = `DELETE FROM tracker_db.employee WHERE id=${answer.emp}`;
  await db.query(query);
  console.log("employee deleted");
};

const viewBudget = async (db, answer) => {
  const query = `SELECT SUM(salary) FROM tracker_db.role WHERE department_id =${answer.dept}`;
  const budget = await db.query(query);
  console.log(budget);
};

module.exports = {
  viewDepartments,
  viewEmployees,
  viewRoles,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployee,
  deleteRole,
  deleteDepartment,
  deleteEmployee,
  viewBudget,
  viewByDepartment,
};
