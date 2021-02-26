//the path of the manager,js file
const manager = require("../lib/manager");

test("can set officeNumber via constructor", () => {
    const testValue = "officeNumber";

    //name, id and email set in parent class constructor testing. we just test the office number 

    const a = new manager("Foo", 1, "example@test.com", testValue);
    expect(a.officeNumber).toBe(testValue);
});


test("getofficeNumber should return \"officeNumber\"", () => {
    const testValue = "officeNumber";
    const a = new manager("Foo", 1, "example@test.com", testValue);
    expect(a.getOfficeNumber()).toBe(testValue);
});


test("getRole should return \"manager\"", () => {
    const testValue = "manager";
    const a = new manager("Foo", 1, "example@test.com", testValue);
    expect(a.getRole()).toBe(testValue);
});