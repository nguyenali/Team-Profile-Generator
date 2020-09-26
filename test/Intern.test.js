const Intern = require("../lib/Intern");


test("Can set school via constructor", () => {
    const testValue = "UC Davis";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});


test("getPosition() should return \"Intern"\, () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UC DAVIS");
    expect(e.getPosition()).toBe(testValue);
});


test( "Can get school via getSchool ()", () => {
    const testValue = "UC DAVIS";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expext(e.school).toBe(testValue);
});