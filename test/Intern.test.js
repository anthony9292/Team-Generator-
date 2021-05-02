const Intern = require("../lib/Intern");

test("Can set school by means of constructor", () => {
  const testValue = "uOttawa";
  const e = new Intern("Dio", 1, "test@test.com", testValue);
  expect(e.school).toEqual(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Dio", 1, "test@test.com", "uOttawa");
  expect(e.getRole()).toEqual(testValue);
});

test("Can get school by means of getSchool()", () => {
  const testValue = "uOttawa";
  const e = new Intern("Dio", 1, "test@test.com", testValue);
  expect(e.getSchool()).toEqual(testValue);
});