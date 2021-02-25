// This is a sub-class
const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getName () {
        console.log(`Name: ${this.name}`);
    }

    getId () {
        console.log(`ID: ${this.id}`);
    }

    getEmail () {
        console.log(`Email: ${this.email}`);
    }

    getOfficeNumber () {
        console.log(`OfficeNumbe: ${this.officeNumber}`);
    }

    getRole () {
        console.log(`Role: ${this.role}`);
    }

}

console.log('---intern---');
manager.getName();
manager.getId();
manager.getEmail();
manager.getOfficeNumber();
manager.getRole();