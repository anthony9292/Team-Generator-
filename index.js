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
//Part 1 
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

//Part 2
//Manager Questions 

const managerQuestions = [ 
    ...foundQuestions, 
    { 
        type: 'input', 
        name: 'officeNumber'. 
        messege: 'Please enter office number:', 

    },  
]; 

//Intern Questions 

const internQuestions = [ 
    ...foundQuestions, 
    
    type: 'input', 
    name:'University', 
    messege: 'Please enter current or last location of education:', 


]


//Engineer Questions 

const engineerQuestions = [ 
    ...foundQuestions, 
    { 
        type 'input', 
        name: "github", 
        messege:'Please enter User GitHub username:', 


    }
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
        messege:'add your profession:', 
        choice: 'Intern', 'Engineer', 'Done', 

    }, ]; 
    inquirer.prompt(employeeQuestions) 
    .then((answers) => { 
        if (answers.choice === 'intern') { 
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