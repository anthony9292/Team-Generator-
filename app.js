const inquirer = require("inquirer")
const fs = require("fs");
const style = require("./dev/templets/css") 

const Employee = require("./dev/lib/employee")
const Intern = require("./dev/lib/intern")
const Manager = require("./dev/lib/manager")
const Engineer = require("./dev/lib/engineer")

let finalTeamArray = []; 

function startingPrompt() { 
    inquirer.prompt([
            {

         
        messege:"/////////Welcome to team Generator Web Page! To get started please write our team name://///////", 
    }

    ])
    .then(function(data){ 
        const teamName = data.teamname
        finalTeamArray.push(teamName)
        addManager(); 
    })

}

function addManager() |{ 
    inquirer.prompt([
          
        
    ])
}