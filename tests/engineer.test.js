const engineer = require('../lib/engineer');

test("Can set gitHub via constructor", () => {
    const testValue = "GitHubUser";
    const a = new engineer("Foo", 1, "example@test.com", testValue);
    expect(a.gitHub).toBe(testValue);
  });

  test("getRole should return \"engineer\"", () => {
      const testValue = "engineer";
      const a = new engineer("Foo", 1, "example@test.com", testValue);
      expect(a.getRole()).toBe(testValue);
  });

  test("should get gitHubUsername via getGitHub()", () => {
    const testValue = "GitHubUser";
    const a = new engineer("Foo", 1, "example@test.com", testValue);
    expect(a.getGithub()).toBe(testValue);
  })