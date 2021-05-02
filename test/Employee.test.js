const Employee = require("../lib/employee"); 
import '@testing-library/jest-dom';

describe("Employee", () => { 
    it("Can represent Employee instance", () => {
        const e = new Employee(); 
        expect(typeof(e)).toEqual("object"); 

    }); 
    it("Can set name by means of constructor arguments", () =>{ 
        const name = "Jojo"; 
        const e = new Employee(name); 
        expect(typeof(e)).toEqual("object");
    }); 

    it("can set id by means of constructor arguments", () =>{ 
        const testValue = 100;
        const e = new Employee("Dio", testValue); 
        expect(e.id).toEqual(testValue); 
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
         expect(e.getId()).toEqual(testValue);          
        }); 
    });
    describe("getEmail",() => { 
        it("can get Email by means of getEmail()",() =>  { 
         const testValue = "test@test.com";  
         const e = new Employee("Dio", 1, testValue); 
         expect(e.getEmail()).toEqual(testValue);          
        }); 
    });
    describe("getRole",() => { 
        it("getRole() should return \"Employee\"" ,() =>  { 
         const testValue = "Employee";  
         const e = new Employee("Jojo", 1, "test@test.com"); 
         expect(e.getRole()).toEqual(testValue);          
        }); 
    });
}); 