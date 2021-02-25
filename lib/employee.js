
// This is the parent class
class employee {
    constructor(name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
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
}

module.exports = employee;
