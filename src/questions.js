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
    ],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your interns name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your interns ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your interns email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter your interns school:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your engineers name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your engineers ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your engineers email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your engineers GitHub username:",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your managers name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your managers ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your managers email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your managers office number:",
  },
];

const teamNameQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Enter your team name:",
  },
];

module.exports = {
  initialQuestion,
  internQuestions,
  engineerQuestions,
  managerQuestions,
  teamNameQuestion,
};
