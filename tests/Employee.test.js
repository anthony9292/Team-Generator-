const Employee = require("../lib/employee"); 
test("represent Employee instance", () => { 
    const e = new Employee(); 
    expect(typeof(e)).toEqual("object");
}); 

test("Can set name by means of constructor argument", () => {
   const name = "Jojo"; 
   const e = new Employee(name); 
   expect(e.name).toEqual(name); 
}); 

test("Can set id by means of constructor argument", () => { 
    const testValue = 100; 
     const e = new Employee("Dio", testValue); 
    expect(e.id).toEqual(testValue);  
}); 

test("can set email by means of constructor argument", () => { 
    const testValue ="test@test.com"; 
    const e = new Employee("Dio", 1, testValue); 
    expect(e.email).toEqual(testValue); 
});

test("Can get name by means of getName()", () =>{ 
    const testValue = "Jojo"; 
    const e = new Employee(testValue); 
    expect(e.getName()).toEqual(testValue);   
}); 


test("Can get Id by means of getId()", () => { 
    const testValue = 100; 
    const e = new Employee("Dio", testValue); 
    expect(e.getId()).toEqual(testValue); 
}); 

test("Can get email by means of getEmail()",() => { 
    const testValue = "test@test.com"; 
    const e = new Employee("Dio", 1, testValue)
    expect(e.getEmail()).toEqual(testValue);
});

test("getRole() should return \"Employee\"", () => { 
    const testValue = "Employee"; 
    const e = new Employee("Dio", 1, "test@test.com"); 
    expect(e.getRole()).toEqual(testValue); 

}); 

