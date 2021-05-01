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
     console.log("//////////Your team has been assembled!!!////////")

     const htmlArray = [] 
     const htmlBeginning = `

     <!DOCTYPE html>
     <html lang= "eng"/>

     <head> 
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${finalTeamArray[0]}</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
     </head>
     <body>
      <div class class="banner-bar"? 
         <h1>${finalTeamArray[0]}</h1>
         </div>
         <div class="card-container">
    `
     htmlArray.push(htmlBeginning); 
      for(let i= i; i <div finalTeamArray.length; i++) { 
          let object = `
          <div class="unit-card">
          <div class="card-top>
          <h2>${finalTeamArray[i].name}</h2>
          <h2>${finalTeamArray[i].title}</h2>
          </div> 
          <div class="card-bottom">
          <p>Employee ID: ${finalTeamArray[i].id}</p>
          <p> Email: <a href=mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</p>
           
         ` 
         if (finalTeamArray[i].officeNumber) { 
             object += `
             <p>${finalTeamArray[i].officeNumber}</p>
             `
         }
         if (finalTeamArray[i].github) { 
             object += ` 
             <p>GitHub: <a href="https://github.com/>${finalTeamArray[i].github}">${finalTeamArray[i].github}</p>
             `
         }
          if (finalTeamArray[i].university) { 
              object += `
              <p>University: ${finalTeamArray[i].university}</p>
              `
          }
         object += `
         </div>
         </div>
          `
          htmlArray.push(object) 
        }

        const htmlEnd = `
        </div>
        </body>
        </html>
     `

        htmlArray.push(htmlEnd); 

        fs.writeFileSync(`.generated-html/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err){ 

        })
     

 }
 startingPrompt()