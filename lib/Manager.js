const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        super.position = "Manager";
    }

    getofficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;