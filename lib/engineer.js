const employee = require('../lib/employee');

class engineer extends employee {
    constructor(name, id, email, gitHub, role ) {
        //the (super keyword) calls all the properties and methods of the parent's constructor.
        super(name, id, email)
        this.gitHub = gitHub;
        this.role = role;
    }

    getGithub () {
        console.log(`GitHub-Username: ${this.gitHub}`);
        return this.gitHub;
    }

    getRole () {
        console.log(`Role: ${this.role}`);
        return "engineer";
    }


}

module.exports = engineer;