
// This is a sub-class
const employee = require('./employee');

class intern extends employee {
    constructor(name, id, email, school ) {
        //the (super keyword) calls all the properties and methods of the parent's constructor.
        super(name, id, email);     
        this.school = school;
    
    }

    getSchool() {
      return this.school;
    }

    getRole () {
      return "intern";
    }
}

module.exports = intern;