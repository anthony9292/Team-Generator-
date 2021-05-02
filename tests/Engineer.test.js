const Engineer = require("../lib/Engineer"); 
test("can appoint GitHub account by means of constructor", () => { 
    const testValue = "GitHubUser"; 
    const e =  new Engineer("Dio", 1, "test@test.com", testValue);
    expect(e.github).toEqual(testValue); 
}); 

test("getRole() should return \"Engineer\"", () => { 
    const testValue = "Engineer"; 
    const e = new Engineer("Dio", 1, "test@test.com", "GitHubUser"); 
    expect(e.getRole()).toBe(testValue); 

}); 

test("can get GitHub username by means of getGithub()", () => { 
       const testValue = "GitHubUser"; 
       const e = new Engineer("Dio", 1, "test@test.com", testValue); 
       expect(e.getGithub()).toBe(testValue); 

}); 


