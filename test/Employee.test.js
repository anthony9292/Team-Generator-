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

    describe("gertName",() => { 
        it("can get name by means of getName()",() =>  { 
         const testValue = "Jojo";  
         const e = new Employee(testValue); 
         expect(e.getName()).toBe*(testValue);          
        }); 
    });

    describe("gertName",() => { 
        it("can get name by means of getName()",() =>  { 
         const testValue = "Jojo";  
         const e = new Employee(testValue); 
         expect(e.getName()).toBe*(testValue);          
        }); 
    });
    describe("gertName",() => { 
        it("can get name by means of getName()",() =>  { 
         const testValue = "Jojo";  
         const e = new Employee(testValue); 
         expect(e.getName()).toBe*(testValue);          
        }); 
    });
    describe("gertName",() => { 
        it("can get name by means of getName()",() =>  { 
         const testValue = "Jojo";  
         const e = new Employee(testValue); 
         expect(e.getName()).toBe*(testValue);          
        }); 
    });
})