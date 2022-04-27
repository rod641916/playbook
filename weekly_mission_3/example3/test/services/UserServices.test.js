const UserService = require("./../../app/services/UserService");


describe("Test for UserServices", () => {
  test("1) Create a new user using the UserService", () => {
    const user = UserService.create(1, "rodrigoTapia", "Rodrigo");
    expect(user.username).toBe("rodrigoTapia");
    expect(user.name).toBe("Rodrigo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("2) Get all user data in a list",()=>{
    const user=UserService.create(1,"rod641916","Rodrigo")
    const userInfoInList=UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("rod641916")
    expect(userInfoInList[2]).toBe("Rodrigo")
    expect(userInfoInList[3]).toBe("Nueva")
  })
});
