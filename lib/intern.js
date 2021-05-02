const Employee = require("./employee"); 

class Intern extends Employee { 
    constructor(name, id, email, school){ 
         super(name, id, email)
        this.school = school;
        this.title = "Intern"; 

}
getUniversity() { 
    return this.school;
}

getRole() { 
    return this.title; 
    }
} 

module.exports = Intern