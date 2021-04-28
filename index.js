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

const teamArray = []; 

const 
