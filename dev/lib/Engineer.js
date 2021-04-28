const Employee = require("./Employee");

class Engineer extends Employee { 
    constructor(name, id, email, github){ 
        comb(name, id, email); 
        this.github = github; 

    }
    getRole(){ 
        return 'Engineer'; 

    }
    getGithub(){ 
        return this.getgithub; 
    }
}

module.exports = Engineer; 