const initialQuestion = [
  {
    type: "list",
    name: "initial",
    message: "What would you like to do?",
    choices: [
      {
        name: "View all departments",
        value: "depts",
      },
      {
        name: "View all roles",
        value: "roles",
      },
      {
        name: "View all employees",
        value: "emps",
      },
      {
        name: "Add a department",
        value: "addDept",
      },
      {
        name: "Add a role",
        value: "addRole",
      },
      {
        name: "Add an employee",
        value: "addEmp",
      },
      {
        name: "Update employee role",
        value: "updateEmp",
      },
      {
        name: "Finished",
        value: "end",
      },
    ],
  },
];

const deptQuestion = [
  {
    type: "input",
    name: "name",
    message: "Enter your Department name:",
  },
];

module.exports = {
  initialQuestion,
  deptQuestion,
};
