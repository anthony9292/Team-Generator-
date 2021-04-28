const path = require("path"); 
const fs = require("fs"); 

const htmltempsDir = path.resolve(__dirname, "../htmltemps"); 

const render = employees => { 
    const html = [];  

    html.push(employees.filter(employees => employees.getrole() === "Manager")
    .map(manager =>renderManager(manager))
    ); 
    
    html.push(employees.filter(employees => employees.getrole() === "Manager")
    .map(manager =>renderManager(manager))
    ); 
    
    html.push(employees.filter(employees => employees.getrole() === "Manager")
    .map(manager =>renderManager(manager))
    ); 
}