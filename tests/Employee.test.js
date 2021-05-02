const Employee = require("../lib/employee"); 

test("represent Employee instance", () => { 
    const e = new Employee(); 
    expect(typeof(e)).toBe("object");
}); 

test("Can set name by means of constructor arguments", () => {
   const name = "Jojo"; 
   const e = new Employee(name); 
   expect(e.name).toBe(name); 
}); 

test("Can set id by means of constructor arguments", ( )=> { 
    const testValue = 100; 
    const e = new Employee("Dio", 1, testValue); 
    expect(e.email.toBe)(testValue);  
}); 

test("Can get name by means of getName()", () =>{ 
    const testValue = "Jojo"; 
    const e = new Employee(testValue); 
    expect(e.getName()).toBe(testValue);   
}); 

test("Can get Id by means of getId()", () => { 
    const testValue = 100; 
    const e = new Employee("Doi", testValue); 
    expect(e.getId()).toBe(testValue); 
}); 

test("can get email by means of getEmail()", () => { 
    const test values = "test@test.com"; 
    const e = new Employee("Doi",testValue); 
    expect(e.getRole()).toBe(testValue); 

}); 

test("getRole() should return \Employee\"", () => { 
    const testValue = "Employee"; 
    const e = new Employee("Jojo", 1, "test@test.com"); 
    expect(e.getRole()).toBe(testValue); 

}); 

