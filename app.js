const inquirer = require("inquirer")
const fs = require("fs");
const style = require("./dev/templets/css") 

const Employee = require("./dev/lib/employee")
const Intern = require("./dev/lib/intern")
const Manager = require("./dev/lib/manager")
const Engineer = require("./dev/lib/engineer");
const Choices = require("inquirer/lib/objects/choices");

let finalTeamArray = []; 

function startingPrompt() { 
    inquirer.prompt([
            {

         
        message:"/////////Welcome to team Generator Web Page! To get started please write our team name://///////", 
    }

    ])
    .then(function(data){ 
        const teamName = data.teamname
        finalTeamArray.push(teamName)
        addManager(); 
    })

}

function addManager() { 
    inquirer.prompt([ 

        { 
            message:"Please enter your teams Manager's name?",
            name:"name" 
        }, 
        { 
            message: "Please enter your team Manager's email",
            name:"email"
        }, 

        {    
            type: "number", 
            message: "Plea enter your team Manager's Office Number",
            name:"officeNumber"
        }, 
    ])

        .then(function (data) {
            const name = data.name
            const id = 1 
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeamArray.push(teamMember)
            addTeamMembers(); 
        }); 
} 

function addTeamMembers() { 
    inquirer.prompt([
        { 
            type:"list",
            message: "Please select to add more team members",
            choices:["YES, add a Engineer", "YES, add a intern", "NO, team is already complete"], 
            name: "addMemberData"
        }
    ])

    .then(function (data) { 

        switch (data.addMemberData) { 
            case "YES, add  Engineer":
            addEngineer(); 
            break;  

            case "YES, add a intern":
                addIntern(); 
                break; 

            case "NO, my team is already complete":
                compileTeam(); 
                break; 
        }
    }); 
 }

 function addEngineer() { 
     inquirer.prompt([
         {
             message: "Engineer, what is your name?", 
             name:"name" 
         }, 
         {
             message: "Engineer,what is your email address?", 
             name:"email"             
         }, 
        { 
            message: "Engineer,  what is your Github profile?", 
            name:"github"
        }


     ])

     .then(function (data) { 
         const name = data.name
         const id = finalTeamArray.length + 1
         const email = data.email
         const github = data.github
         const teamMember = new Engineer(name, id , email, github)
         finalTeamArray.push(teamMember)
         adddTeamMembers()
      }); 
 }; 

 function addIntern() { 
     inquirer.prompt([
         { 
             message: "Intern, what is your name?", 
             name:"name"
         }, 
         { 
             message: "Intern, what is your email address?", 
             name: "email"

         }, 

         { 
             message: "Intern, what University did you attend or attending?",
             name:"University"
         }
     ])

      .then(function (data) { 
          const name = data.name
          const id = finalTeamArray.length +1
          const email = data.email
          const university = data.university
          const teamMember = new Intern(name, id, email, university)
          finalTeamArray.push(teamMember)
          addTeamMembers()
      }); 
 }; 


 function compileTeam(){ 
     const.log()
 }