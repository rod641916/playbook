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
})