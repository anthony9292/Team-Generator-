const Employee = require("../lib/employee"); 

describe("Employee", () => { 
    it("Can represent Employee instanc", () => {
        const e = new Employee(); 
        expect(typeof(e)).toBe("object"); 

    }); 
    it("Can set name by means of constructor arguments", () =>{ 
        const name = "Jojo"; 
        const e = new Employee(name); 
        expect(e.name).toBe(name);   
    }); 

    it("can set id by means of constructor arguments", () =>{ 
        const testValue = 100;
        const e = new Employee("Dio", testValue); 
        expect(e.id).toBe(testValue); 
    }); 

    it("can set emails by means of constructor arguments", () =>{ 
        const testValue = "test@test.com";
        const e = new Employee("Dio", testValue); 
        expect(e.email).toBe(testValue); 
    }); 

    describe("getName",() => { 
        it("can get name by means of getName()",() =>  { 
         const testValue = "Jojo";  
         const e = new Employee(testValue); 
         expect(e.getName()).toBe(testValue);          
        }); 
    });

    describe("getId",() => { 
        it("can get Id by means of getId()",() =>  { 
         const testValue = 100;  
         const e = new Employee("Dio", testValue); 
         expect(e.getId()).toBe(testValue);          
        }); 
    });
    describe("getEmail",() => { 
        it("can get Email by means of getEmail()",() =>  { 
         const testValue = "test@test.com";  
         const e = new Employee("Dio", 1, testValue); 
         expect(e.getEmail()).toBe(testValue);          
        }); 
    });
    describe("getRole",() => { 
        it("getRole() should return \"Employee\"" ,() =>  { 
         const testValue = "Employee";  
         const e = new Employee("Jojo", 1, "test@test.com"); 
         expect(e.getRole()).toBe(testValue);          
        }); 
    });
}); 