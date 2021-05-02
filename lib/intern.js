const Employee = require("./employee"); 

class Intern extends Employee { 
    constructor(name, id, email, university){ 
         super(name, id, email); 
        this.university = university;
        this.title = "Intern"; 

}
getUniversity() { 
    return this.university;
}
getRole() { 
    return this.title; 
    }
} 
module.exports = Intern