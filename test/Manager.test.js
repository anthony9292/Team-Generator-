const Manager = require("../lib/Manager")
test("Can set office number by means of constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Dio", 1, "test@test.com", testValue);
  expect(e.officeNumber).toEqual(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Dio", 1, "test@test.com", 100);
  expect(e.getRole()).toEqual(testValue);
});

test("Can get office number by Means getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Dio", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toEqual(testValue);
});