const Intern = require("../lib/Intern");

test("can set school by means of constructor", () => { 
    const testValue = "uOttawa"; 
    const e = new Intern("Dio", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue); 
}); 

test("getRole() should return \"Intern\"", () => { 
    const testValue = "Intern"; 
    const e = new Intern("Dio", 1, "test@test.com", "uOttawa"); 
    expect(e.getRole()).toBe(testValue); 

}); 

test("can get school by means of getSchool()", () => { 
       const testValue = "uOttawa"; 
       const e = new Intern("Dio", 1, "test@test.com", testValue); 
       expect(e.getSchool()).toBe(testValue)

}); 


