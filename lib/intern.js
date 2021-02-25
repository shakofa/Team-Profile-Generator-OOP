
// This is a sub-class
const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    
    }

    getName () {
        return  this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getSchool() {
    return this.school;
    }

    getRole () {
      return "Intern";
    }
}

console.log('---intern---');
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();