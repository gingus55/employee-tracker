// const mysql = require("mysql2");

// const { db } = require("..");

// const dbOptions = {
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "password123",
//   database: process.env.DB_NAME || "tracker_db",
// };

// const connection = mysql.createConnection(dbOptions);

// const db = (req, res, next) => {
//   req.db = connection;
//   next();
// };

const viewDepartments = async (db) => {
  const departments = await db.query("SELECT * FROM tracker_db.department");
  console.table(departments);
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
