const User = require('./../../app/models/User')

describe('Unit test for User class',()=>{
    test('1) Create an User object',()=>{
        const user= new User (1,"rodrigoTapia","Rodrigo","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("rodrigoTapia")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })
    test('2) Add getters',()=>{
        const user= new User (1,"rodrigoTapia","Rodrigo","Bio")
        expect(user.getUsername).toBe("rodrigoTapia")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('3) Add setters',()=>{
        const user= new User(1,"rodrigoTapia","Rodrigo","Bio")
        user.setUsername ="royer_tr"
        expect(user.username).toBe("royer_tr")

        user.setBio="Hola a todos"
        expect(user.bio).toBe("Hola a todos")
    })

})