const Manager = require("../lib/manager"); 

test("Can set office number by means of constructor arguments", () => { 
    const testValue = 100; 
    const e = new Manager("Dio", 1, "test@test.com",testValue); 
    expect(e.officeNumber).toEqual(testValue); 
}); 

test("getRole() should return \"Manager\"", () => { 
    const testValue = "Manager"; 
    const e = new Manager("Dio", 1, "test@test.com", "100"); 
    expect(e.getRole()).toEqual(testValue); 

}); 

test("can get office number by means of getOffice()", () => { 
    const testValue = 100; 
    const e = new Manager("Dio", 1, "test@test.com", testValue); 
    expect(e.getOfficeNumber()).toEqual(testValue); 

}); 


