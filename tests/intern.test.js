const intern = require("../lib/intern");

test("should set school via constructor", () => {
    const testValue = "school";
    const a = new intern("Foo", 1, "example@test.com", testValue);
    expect(a.school).toBe(testValue);
});

test("getRole should return \"intern\"", () => {
    const testValue = "intern";
    const a = new intern("Foo", 1, "example@test.com", testValue);
    expect(a.getRole()).toBe(testValue);
});