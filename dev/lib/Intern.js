const Employee = require("./Employee"); 

class Intern extends Employee { 
    constructor(name, id, email, University){ 
         super(name, id, email); 
        this.university = University;
}
getRole() { 
    return 'Intern'; 
}
getUniversity() { 
    return this.University; 
}
} 
module.exports = Intern