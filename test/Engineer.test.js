const Engineer = require("../lib/engineer"); 

test("Can set GitHub Account by means of constructor",  () =>  { 
    const testValue ="GithubUser"; 
    const e = new Engineer("Dio", 1, "test@test.com", testValue); 
    expect(e.github).toEqual(testValue); 
}); 

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";  
    const e = new Engineer("Dio", 1, "test@test.com", "GitHubUser"); 
    expect(e.getRole()).toEqual(testValue); 
 }); 
 
test("Can set GitHub username by means of getGithub", () => { 
    const testValue = "GitHubUser"; 
    const e = new Engineer("Dio", 1, "test@test.com", testValue); 
    expect(e.getGithub()).toEqual(testValue); 
}); 

