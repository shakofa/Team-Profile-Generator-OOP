// This is a sub-class
const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber, role) {
        //the (super keyword) calls all the properties and methods of the parent's constructor.
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getOfficeNumber () {
        console.log(`OfficeNumbe: ${this.officeNumber}`);
    }

    getRole () {
        console.log(`Role: ${this.role}`);
    }

}


module.exports = manager;