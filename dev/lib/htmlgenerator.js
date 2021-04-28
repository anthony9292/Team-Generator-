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
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf-8"); 
     template = replacePlaceholders(template, "name", manager.getName()); 
     template = replacePlaceholders(template, "role", manager.getRole()); 
     template = replacePlaceholders(template, "email", manager.getEmail()); 
     template = replacePlaceholders(template, "id", manager.getId()); 
     template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber()); 
     return template; 
}; 

const renderManager =  engineer => { 
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf-8"); 
     template = replacePlaceholders(template, "name", engineer.getName()); 
     template = replacePlaceholders(template, "role", engineer.getRole()); 
     template = replacePlaceholders(template, "email", engineer.getEmail()); 
     template = replacePlaceholders(template, "id", engineer.getId());
     template = replacePlaceholders(template, "github", engineer.getGithub()); 
     return template; 
}; 

const renderManager = intern => { 
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf-8"); 
     template = replacePlaceholders(template, "name", intern.getName()); 
     template = replacePlaceholders(template, "role", intern.getRole()); 
     template = replacePlaceholders(template, "email", intern.getEmail()); 
     template = replacePlaceholders(template, "id", intern.getId()); 
     template = replacePlaceholders(template, "University", intern.getUniversity()); 
     return template; 
}; 

const renderIndex = html => { 
    const template = fs.readFileSync(path.resolve(templatesDir, "index.html") "utf-8"); 
     return replacePlaceholders(template, "squad", html); 
};  

const replacePlaceholders = (template, placeholder, value) => { 
    const pattern = new RegExp("{{ " + placeholder + "}}", "gm"); 
    return template.replace(pattern, value); 
}; 

module.exports = render; 