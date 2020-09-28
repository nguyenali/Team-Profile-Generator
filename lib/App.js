const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require('fs');


class App {

    constructor() {

        
        this.employees = [];
        
        this.employeePrompt = [
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            }
        ];
        this.managerPrompt = this.employeePrompt.concat([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeN"
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
                name: "school"
            }
        ]);
        
    }

    //start application
    start() {
        this.nextEmployee();
    }

    //end application
    end() {
        console.log("Team Profile Generated");
    }


    
    nextEmployee() {
        this.promptPosition().then((position) => {
            if (position === "Exit") {
                this.renderHTML();
                this.end();
            }
            else {
                
                this.promptInfo(position).then((data) => {
                    
                    switch (position) {
                        case "Manager":
                            this.employees.push(new Manager(data.name, data.id, data.email, data.officeN));
                            break;
                        case "Engineer":
                            this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
                            break;
                        case "Intern":
                            this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                            break;
                    }
                    
                    this.nextEmployee();
                });
            }
        });
    }

    
    promptPosition() {
        return inquirer.prompt([
            {
                type: "list",
                message: "Enter your position",
                name: "position",
                choices: ["Manager", "Engineer", "Intern", "Exit"]
            }
        ]).then(function (data) {
            return (data.position);
        }).catch(function (error) {
            console.log(error);
        });
    }

   
    promptInfo(position) {
        switch (position) {
            case "Manager":
                return inquirer.prompt(this.managerPrompt).then(function (data) {
                    return data;
                });
            case "Engineer":
                return inquirer.prompt(this.engineerPrompt).then(function (data) {
                    return data;
                });
            case "Intern":
                return inquirer.prompt(this.internPrompt).then(function (data) {
                    return data;
                });
        }
    }

    
    renderHTML() {
        fs.readFile('Page.html', 'utf8', (err, htmlString) => {

            htmlString = htmlString.split("<script></script>").join(this.getScript());

            fs.writeFile('index.html', htmlString, (err) => {
                
                if (err) throw err;
                
                console.log('HTML generated!');
            });
        });

    }

    
    getScript() {

        var scripts = ``;
        this.employees.forEach(e => {
            var field = "";
            var iconClass = "";
            switch (e.getPosition()) {
                case "Manager":
                    field = `Office #: ${e.getofficeNumber()}`;
                    iconClass = `users`;
                    break;
                case "Engineer":
                    field = `Github: ${e.getGithub()}`;
                    iconClass = `cogs`;
                    break;
                case "Intern":
                    field = `School: ${e.getSchool()}`;
                    iconClass = `user-graduate`;
                    break;
            }

            var cardScript = `
            <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var header1 = $('<div class="card-header text-center h4">');
            header1.text("${e.getName()}");
            var header2 = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-${iconClass}">');
            header2.text(" ${e.getPosition()}");
            header2.prepend(icon);
            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
            cardTitle.text("Employee Information:");
            var cardText = $('<p class="card-text">');
            cardText.text("ID: ${e.getId()}");
            var cardText2 = $('<p class="card-text">');
            cardText2.text("Email: ${e.getEmail()}");
            var cardText3 = $('<p class="card-text">');
            cardText3.text("${field}");
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardText2);
            cardBody.append(cardText3);
    
            card.append(header1);
            card.append(header2);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>        
            `;
            scripts += cardScript;

        });

        return scripts;
    }


}


module.exports = App;