const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, school) {
        super(name,id);
        this.school = school;
    }
    getPosition(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}



module.exports = Intern