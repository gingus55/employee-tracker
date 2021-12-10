const inquirer = require("inquirer");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployee,
} = require("./db/queries");
const { initialQuestion, deptQuestion, roleQuestions } = require("./questions");
const Db = require("./middleware/db");
const {
  generateDepartmentChoices,
  generateRoleChoices,
  generateManagerChoices,
} = require("./utils");

const title = `
                                                                    
▄███▄   █▀▄▀█ █ ▄▄  █    ████▄ ▀▄    ▄ █▀▄▀█ ▄███▄      ▄     ▄▄▄▄▀ 
█▀   ▀  █ █ █ █   █ █    █   █   █  █  █ █ █ █▀   ▀      █ ▀▀▀ █    
██▄▄    █ ▄ █ █▀▀▀  █    █   █    ▀█   █ ▄ █ ██▄▄    ██   █    █    
█▄   ▄▀ █   █ █     ███▄ ▀████    █    █   █ █▄   ▄▀ █ █  █   █     
▀███▀      █   █        ▀       ▄▀        █  ▀███▀   █  █ █  ▀      
          ▀     ▀                        ▀           █   ██         
                                                                    
               ▄▄▄▄▀ █▄▄▄▄ ██   ▄█▄    █  █▀ ▄███▄   █▄▄▄▄          
            ▀▀▀ █    █  ▄▀ █ █  █▀ ▀▄  █▄█   █▀   ▀  █  ▄▀          
                █    █▀▀▌  █▄▄█ █   ▀  █▀▄   ██▄▄    █▀▀▌           
               █     █  █  █  █ █▄  ▄▀ █  █  █▄   ▄▀ █  █           
              ▀        █      █ ▀███▀    █   ▀███▀     █            
                      ▀      █          ▀             ▀        `;

const db = new Db({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password123",
  database: process.env.DB_NAME || "tracker_db",
});

const start = async () => {
  console.log(title);

  await db.start();

  let inProgress = true;

  while (inProgress) {
    const departments = await db.query("SELECT * FROM tracker_db.department");
    const roles = await db.query("SELECT * FROM tracker_db.role");
    const managers = await db.query(
      "SELECT DISTINCT A.id, A.first_name, A.last_name FROM tracker_db.employee A, tracker_db.employee B WHERE A.id = B.manager_id"
    );

    let answers = await inquirer.prompt(initialQuestion);

    if (answers.initial === "depts") {
      await viewDepartments(db);
    }
    if (answers.initial === "roles") {
      await viewRoles(db);
    }
    if (answers.initial === "emps") {
      await viewEmployees(db);
    }
    if (answers.initial === "addDept") {
      const answer = await inquirer.prompt(deptQuestion);
      const value = answer.name;
      await addDepartment(db, value);
    }
    if (answers.initial === "addRole") {
      const roleQuestions = [
        {
          type: "input",
          name: "name",
          message: "Enter the name of the role:",
        },
        {
          type: "input",
          name: "sal",
          message: "Enter the salary:",
        },
        {
          type: "list",
          message: "Please select a department:",
          name: "dept",
          choices: generateDepartmentChoices(departments),
        },
      ];

      const answer = await inquirer.prompt(roleQuestions);
      console.log(answer);
      await addRole(db, answer);
    }
    if (answers.initial === "addEmp") {
      const employeeQuestions = [
        {
          type: "input",
          name: "first",
          message: "Enter the employee's first name:",
        },
        {
          type: "input",
          name: "second",
          message: "Enter the employee's surname:",
        },
        {
          type: "list",
          message: "Please select a role:",
          name: "role",
          choices: generateRoleChoices(roles),
        },
        {
          type: "list",
          message: "Please select a Manager:",
          name: "manager",
          choices: generateManagerChoices(managers),
        },
      ];
      const answer = await inquirer.prompt(employeeQuestions);

      await addEmployee(db, answer);
    }
    if (answers.initial === "updateEmp") {
      updateEmployee();
    }
    if (answers.initial === "end") {
      inProgress = false;
      await db.stop();
    }
  }
};

start();
