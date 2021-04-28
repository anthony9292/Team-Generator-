const Manager = require("./dev/lib/Manager"); 
const Engineer = require("./dev/lib/Engineer"); 
const Intern = require("./div/lib/Intern");
const inquirer = require("inquirer"); 
const path = require("path"); 
const fs = require("fs"); 
const { request } = require("node:http");

const Turnout_Dir = path.resolve(__dirname, "turnouts"); 
const turnoutPath = path.join(Turnout_Dir, "team.html"); 

const render = require("./dev/lib/htmlgenerator"); 
const { type } = require("node:os");

const teamArray = []; 
//Part 1 
// foundation questions to start 
const foundQuestions = [{
    type: 'input', 
    name: 'name', 
    message: "Enter Your: name:",

}, 

{ 
    type: 'input', 
    name:'id', 
    message: "Enter Your employee: id:", 
}, 

  { 
   type: 'input', 
   name:'email', 
   message: "Enter Your employee: email", 
  }, 

]; 

//Part 2
//Manager Questions 
const managerQuestions = [ 
    ...foundQuestions, 
    { 
        type: 'input', 
        name: 'officeNumber', 
        message: "Please enter office number:", 

    },  
]; 

//Intern Questions 
const internQuestions = [ 
    ...foundQuestions, 
    
    {
    type: 'input', 
    name:'University', 
    message: 'Enter Your current or last location of education:', 
    },
];


//Engineer Questions 
const engineerQuestions = [ 
    ...foundQuestions, 
    {
        type: 'input', 
        name: 'github', 
        message:'Enter Your Github username:', 
    },
];

//Hiring manager 
inquirer.prompt(managerQuestions)
.then((response) => { 
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber); 
    teamArray.push(manager); 
    determineEmployee(); 
});

//decide employee to hire 
function determineEmployee() { 
    const employeeQuestions = [{
        name: 'choice', 
        type: 'list', 
        message:'Add your profession:', 
        choice: ['Intern', 'Engineer', 'Done',]

    }, ]; 
    inquirer.prompt(employeeQuestions) 
    .then((answers) => { 
        if (answers.choice === 'Intern') { 
            internInfo(); 
        }
        if(answers.choice === 'Engineer') { 
            engineerInfo(); 
        }
        if(answers.choice == 'Done'); { 
            createHTMLFile(); 
        }
    })
}

//creation of Intern for the Team 
function  internInfo() { 
    inquirer.prompt(internQuestions)
    .then((response) => { 
        const intern = new Intern(response.name, response.id, response.email, response.github);
        teamArray.push (intern); 
        determineEmployee(); 
    })
 }

 //creation of Engineer for the team 
 function internInfo() { 
     inquirer.prompt(engineerQuestions) 
     .then((response) => { 
         const engineer = new Engineer(response.name, response.id, response.email, response.github);
         teamArray.push(engineer)
         determineEmployee(); 
     })
 }

 function createHTMLFile(){ 
     try { 
         const html = render(teamArray); 
         fs.writeFileSync(turnoutPath, html); 
     } catch (error){ 
         console.log(error); 
     }
 }

