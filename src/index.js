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
const { initialQuestion, deptQuestion } = require("./questions");
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
  console.log(title);

  await db.start();

  let inProgress = true;

  while (inProgress) {
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
      addRole();
    }
    if (answers.initial === "addEmp") {
      addEmployee();
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
