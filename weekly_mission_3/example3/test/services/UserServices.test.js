const UserService = require("./../../app/services/UserService");

describe("Test for UserServices", () => {
  test("1) Create a new user using the UserService", () => {
    const user = UserService.create(1, "rodrigoTapia", "Rodrigo");
    expect(user.username).toBe("rodrigoTapia");
    expect(user.name).toBe("Rodrigo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
});
