const Manager = require("./lib/Manager");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer =require("inquirer");



const teamMember = [];

function index() {
    function getManager()[
    inquirer.prompt({
    {
        type:"input",
        name: "managerName";
        message: "What is your Manager's name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is your Id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your Email?"
    },
    {
        type:'input',
        name:"managerofficeNumber",
        message: "What is the office number for the manageer?"
    }
    }).then(response => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerofficeNumber);
        teamMember.push(manager);
        addingnewMember();
    ])

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

    function


}