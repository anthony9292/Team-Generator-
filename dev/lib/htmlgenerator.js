const path = require("path"); 
const fs = require("fs"); 

const templatesDir = path.resolve(__dirname, "../templates"); 

const render = employees => { 
    const html = [];  

    html.push(employees.filter(employees => employees.getRole() === "Manager")
    .map(manager =>renderManager(manager))
    ); 
    
    html.push(employees.filter(employees => employees.getRole() === "Engineer")
    .map(engineer=>renderEngineer(engineer))
    ); 
    
    html.push(employees.filter(employees => employees.getRole() === "Intern")
    .map(intern =>renderIntern(intern))
    ); 
}

const renderManager =  manager => { 
    let template = 
}