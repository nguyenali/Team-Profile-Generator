const Employeee = require("./Employee");
const Employee = require("./Employee");
class Manager extends Employeee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getofficeNumber(){
        return this.officeNumber;
    }
}



module.exports = Manager;