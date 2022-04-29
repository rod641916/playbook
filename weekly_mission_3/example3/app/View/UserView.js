const UserServices = require("./../services/UserService");

class UserView {

    static createUser(payload){
        if(payload==null){
            console.log("Payload es nulo")
            return {error:"Error: Payload no existe"}
        }else if (typeof payload.username==='string' && typeof payload.name==='string' && typeof payload.id==='number'){
            return UserServices.create(payload.username,payload.name,payload.id)
        }else{
            return {error: "Se necesitan ingresar valores validos"}
        }
    }
}

module.exports = UserView