const intern = require("../lib/intern");

test("should set school via constructor", () => {
    const testValue = "UCI";
    const a = new intern("Foo", 1, "example@test.com", testValue);
    expect(a.school).toBe(testValue);
});


test("getSchool should return \"intern\"", () => {
    const testValue = "UCI";
    const a = new intern("Foo", 1, "example@test.com", testValue);
    expect(a.getSchool()).toBe(testValue);
});


test("getRole should return \"intern\"", () => {
    const testValue = "intern";
    const a = new intern("Foo", 1, "example@test.com", testValue);
    expect(a.getRole()).toBe(testValue);
});