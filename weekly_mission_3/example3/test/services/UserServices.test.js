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
  });
  test("3) Update username",()=>{
    const user=UserService.create(1,"rod641916","Rodrigo")
    UserService.updateUserUsername(user,"rod")
    expect(user.username).toBe("rod")
  });

  test("4) Given a list of users give me the list of usernames",()=>{
    const user1=UserService.create(1,"rod641916","Rodrigo")
    const user2=UserService.create(2,"rod64","Rod")
    const user3=UserService.create(3,"rod6419","Rodri")
    const user4=UserService.create(4,"rod","Ro")
    const usernames =UserService.getAllUsernames([user1,user2,user3,user4])
    expect(usernames).toContain("rod641916")
    expect(usernames).toContain("rod64")
    expect(usernames).toContain("rod6419")
    expect(usernames).toContain("rod")
  })
});
