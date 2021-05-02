const Manager = require("../lib/manager"); 
const Employee = require("../lib/employee"); 

test("Can set office number by means of constructor arguments", () => { 
    const testValue = 100; 
    const e = new Manager("Dio", 1, "test@test.com",testValue); 
    expect(e.officeNumber).toBe(testValue); 
}); 

test("getRole() should return \"Manager\"", () => { 
    const testValue = "Manager"; 
    const e = new Intern("Dio", 1, "test@test.com", "100"); 
    expect(e.getRole()).toBe(testValue); 

}); 

test("can get office number by means of getOffice()", () => { 
    const testValue = "uOttawa"; 
    const e = new Intern("Dio", 1, "test@test.com", testValue); 
    expect(e.getOfficeNumber()).toBe(testValue); 

}); 


