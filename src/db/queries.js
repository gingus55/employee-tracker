// USE company_db;

// -- view all departments
// SELECT * FROM department;

// -- view all roles
// SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.departmentId = department.id ORDER BY department.name;

// -- view all employees
// SELECT employee_role.firstName, employee_role.lastName, title, salary, name
// FROM employee employee_role
// LEFT JOIN role
// ON employee_role.roleId=role.id
// LEFT JOIN department
// ON role.departmentId=department.id;

const viewDepartments = () => {
  console.log("departments");
};

const viewRoles = () => {
  console.log("roles");
};

const viewEmployees = () => {
  console.log("employees");
};

const addRole = () => {
  console.log("role added");
};

const addDepartment = () => {
  console.log("department added");
};

const addEmployee = () => {
  console.log("employee added");
};

const updateEmployee = () => {
  console.log("update employee");
};

// BONUS

const viewByManager = () => {
  console.log("viewing by manager");
};

const viewByDepartment = () => {
  console.log("viewing by department");
};

const deleteDepartment = () => {
  console.log("department deleted");
};

const deleteRole = () => {
  console.log("role deleted");
};

const deleteEmployee = () => {
  console.log("employee deleted");
};

const viewBudget = () => {
  console.log("viewing the budget");
};

module.exports = {
  viewDepartments,
  viewEmployees,
  viewRoles,
  addEmployee,
  addDepartment,
  addRole,
  updateEmployee,
};
