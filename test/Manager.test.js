const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can get office number via constructor",() => {
    const testValue = "officeNumber";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
} )


test("getPosition() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 500);
    expect(e.getPosition()).toBe(testValue);
}


test("Can get office number  via getofficeNumber()", () => {
    const testValue = "officeNumber";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getofficeNumber()).toBe(testValue);
});