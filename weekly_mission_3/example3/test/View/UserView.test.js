const UserView = require('./../../app/View/UserView')

describe ("Test for UserView",()=>{
    test ("Return an error object when try to create a new user with an null payload",()=>{
        const payload=null
        const result= UserView.createUser(payload)
        expect(result.error).toMatch(/Payload no existe/)
    })

    test ("Return an error object when try to create a new user with a playload with invalid properties",()=>{
        const payload= {username:null,name:12,id:"id"}
        const result= UserView.createUser(payload)
        expect(result.error).toMatch(/Se necesitan ingresar valores validos/)
    })
    test ("Return an error object when try to create a new user with a payload with missing properties",()=>{
        const payload={username:"Rodrigo"}
        const result=UserView.createUser(payload)
        expect(result.error).toMatch(/Se necesitan ingresar valores validos/)
    })
    test ("Create a user by a given valid payload",()=>{
        const payload={username:"rod641916", name:"Rodrigo",id:1}
        const result=UserView.createUser(payload)
        expect(result.name).toBe("Rodrigo")
        expect(result.username).toBe("rod641916")
        expect(result.id).toBe(1)
    })
})