const Employee =require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer =require("inquirer");
const fs = require("fs");
const { concat } = require("rxjs");
//rememebr to add in bracket at the end
class App {

    constructor() {

        this.employees = [];
// add in bracket at the end
        this.employeePrompt[
            {
                type:"input",
                name: "Name",
                message: "What is your name?"
            },
            {
                type: "input",
                name: "Id",
                message: "What is your Id?"
            },
            {
                type: "input",
                name: "Email",
                message: "What is your Email?"
            }
   
        ];
        this.managerPrompt = this.employeePrompt,concat([
            {
                type: "input",
                name: "Office Number",
                message: "What is your office number?",
        
            }
        ]);
        this.engineerPrompt = this.employeePrompt.concat([
            {
                type: "input",
                message: "What is your github?",
                name: "github"
            }
        ]);
        this.internPrompt = this.employeePrompt.concat([
            {
                type: "input",
                message: "What is your school?",
                name: "School"
            }
        ]);

        //start app

        start() {
            this.nextEmployee();
        }

        //end app
        end() {
            console.log(Team Profile Generated);
        }


        nextEmployee() {
            this.promptRole().then((position) => {
                if (role ==="Exit") {
                    this.renderHTML();
                    this.end();
                }
                else {
                this.promptInfo(position).then(data) => {
                    switch(position) {
                        case: "Manager":
                            this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                            break;
                        case: "Engineer":
                            this.employee.push(new Engineer(data.name, data.id, data.email,data.github));
                            break;
                        case: "Intern":
                            this.employee,push(new Intern(data.name, data.id, data.email, data.school));
                            break;
                    }
                    this.nextEmployee();
                });
            }
        });
    }


        promptRole() {
            return inquirer.prompt([
                {
                    type: "list",
                    name: "position",
                    message: "Enter your position",
                    choices: ["Intern", "Engineer", "Manager", "Done"]
                }
            ]).then(function(data) {
                return(data.position);
            }).catch(function(error) {
                console.log(error);
            });
        }


    

}
    function getEngineer() {
        inquirer,prompt([
            {
                type:"input",
                name: "engineerName",
                message: "What is your engineer's name?"
            },
            {
                type:"input",
                name: "engineerId",
                message: "What is your Id"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your Email?"
            },
            {
                type: "input",
                name: "engineergitHub",
                message: "What is your engineer's Github username?"
            }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.managerEmail, response.github);
            teamMember.push(engineer);
            addingnewMember();
        })
    }

    function getIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your Id"
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern go to?"
            }
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internSchool);
            teamMember.push(intern);
            addingnewMember();
        })
    }

    function addingnewMember(){
        inquirer.prompt([
            {
                type: "checklist",
                name: "selectemployees",
                message: "which employee?",
                choices:[
                    "intern",
                    "engineer",
                    "manager",
                    "finished"
                ]
            }
        ]).then(response => {
            const position = response.selectemployees;
            if(position == "intern"){
                getIntern();
            } else if (position == "engineer"){
                getEngineer();
            } else if (position == "manager"){
                getManager();
            } else if (position == "finished"){
                createTeam();
            }
        });
    }
    addingnewMember()

}
    function createTeam() {
        fs.writeFileSync(outputPath, render(teamMember), "utf-8");
    }
   
    app();