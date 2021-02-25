const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, gitHub, role ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
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

    getGithub () {
        console.log(`GitHub-Username: ${this.gitHub}`);
    }

    getRole () {
        console.log(`Role: ${this.role}`);
    }


}

console,log('---engineer---');
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();