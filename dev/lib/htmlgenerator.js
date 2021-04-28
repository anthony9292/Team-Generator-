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
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8"); 
     template = replacePlaceHolders(template, "name", manager.getName()); 
     template = replacePlaceHolders(template, "role", manager.getRole()); 
     template = replacePlaceHolders(template, "email", manager.getEmail()); 
     template = replacePlaceHolders(template, "officeNumber", manager.getOfficeNumbber()); 
     return template; 
}; 


const renderManager =  manager => { 
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8"); 
     template = replacePlaceHolders(template, "name", manager.getName()); 
     template = replacePlaceHolders(template, "role", manager.getRole()); 
     template = replacePlaceHolders(template, "email", manager.getEmail()); 
     template = replacePlaceHolders(template, "officeNumber", manager.getOfficeNumbber()); 
     return template; 
}; 


const renderManager =  manager => { 
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8"); 
     template = replacePlaceHolders(template, "name", manager.getName()); 
     template = replacePlaceHolders(template, "role", manager.getRole()); 
     template = replacePlaceHolders(template, "email", manager.getEmail()); 
     template = replacePlaceHolders(template, "officeNumber", manager.getOfficeNumbber()); 
     return template; 
}; 