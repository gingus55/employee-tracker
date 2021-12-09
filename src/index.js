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
const { initialQuestion } = require("./questions");
const Db = require("./middleware/db");

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
  await db.start();

  console.log(title);

  let inProgress = true;

  while (inProgress) {
    let answers = await inquirer.prompt(initialQuestion);

    console.log(answers);
    if (answers.initial === "depts") {
      await viewDepartments(db);
    }
    if (answers.initial === "roles") {
      viewRoles();
    }
    if (answers.initial === "emps") {
      viewEmployees();
    }
    if (answers.initial === "addDept") {
      addDepartment();
    }
    if (answers.initial === "addRole") {
      addRole();
    }
    if (answers.initial === "addEmp") {
      addEmployee();
    }
    if (answers.initial === "updateEmp") {
      updateEmployee();
    }
  }
};

start();
