const Manager = require("./lib/Manager");
const Engineer = require("./lib/Employee");
const Intern = require("./lib/intern");
const inquirer =require("inquirer");



const teamMember = [];

function index() {
    function getManager(){
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
    })

}
    



}