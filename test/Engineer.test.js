const Engineer = require("../lib/engineer"); 

test("Can set GitHub account by means of constructor", () => { 
    const testValue = "GitHubUser"; 
    const e = new Engineer("Dio", 1, "test@test.com", testValue); 
    expect(e.github).toEqual(test); 
}); 

test("getRole() should return \"Engineer\"", () => {
   const testValue = "Engineer";  
   const e = new Engineer("Dio", 1, "test@test.com", "GitHubUser"); 
   expect(e.getRole()).toEqual(testValue); 
}); 
