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
    const e = new
})