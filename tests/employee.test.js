const employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const a = new employee();
  expect(typeof(a)).toBe("object");
});

test("Can set name through constructor ", () => {
  const name = "Susan";
  const a = new employee(name);
  expect(a.name).toBe(name);
});

test("Can set id through constructor", () => {
  const testValue = 80;
  const a = new employee("Foo", testValue);
  expect(a.id).toBe(testValue);
});

test("Can set email through constructor", () => {
  const testValue = "example@test.com";
  const a = new employee("Foo", 1, testValue);
  expect(a.email).toBe(testValue);
});

test("Can get name through getName()", () => {
  const testValue = "Susan";
  const a = new employee(testValue);
  expect(a.getName()).toBe(testValue);
});

test("Can get id through getId()", () => {
  const testValue = 80;
  const a = new employee("Foo", testValue);
  expect(a.getId()).toBe(testValue);
});

test("Can get email through getEmail()", () => {
  const testValue = "example@test.com";
  const a = new employee("Foo", 1, testValue);
  expect(a.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "employee";
  const a = new employee("Susan", 1, "example@test.com");
  expect(a.getRole()).toBe(testValue);
});
