const Manager = require("./dev/lib/Manager"); 
const Engineer = require("./dev/lib/Engineer"); 
const Intern = require("./div/lib/Intern");
const inquirer = require("inquirer"); 
const path = require("path"); 
const fs = require("fs"); 
const { request } = require("node:http");

const OutPut_Dir = path.resolve(__dirname, "outputs"); 
const outputPath = path.join(OutPut_Dir, "team.html"); 

const render = require("./dev/lib/htmlgenerator"); 
const { type } = require("node:os");

const teamArray = []; 
// foundation questions to start 
const foundQuestions = [{
    type: 'input', 
    name: 'name', 
    messege: 'Please enter the employees: name:',

}

{ 

    type: 'input', 
    name:'id'. 
    messege: 'Please enter the employees:id:' 
}, 

  { 

   type: 'input'
   name:'email', 
   messege: 'Please enter the employees:email', 
  }

]; 
