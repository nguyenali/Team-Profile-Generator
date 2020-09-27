const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github) {
        super(name, id, email);
        this.github =github;
        super.position = "Engineer";
    }
   
    getGithub(){
        return this.github;
    }
}  

module.exports = Engineer;