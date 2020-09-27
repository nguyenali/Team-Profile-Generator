const Engineer = require("../lib/Engineer");

test("Can set Github aacount via constructor", () => {
    const testValue = "githubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getPostiion() should return \"Engineer\"", ()=>{
    const testValue = "Engineer";
    const e = new Engineer("Foo", "test@test.com", "githubUser");
    expect(e.getPosition()).toBe(testValue);
});

test("Can get Github username via getGithub()", () =>{
    const testValue = "githubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});