const User=require('./../models/User')


class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Nueva")
    }
    
    static getInfo(user){ //Se crea el get para llamar la informacion
       return Object.values(user)//devuelve un array con los valores correspondientes 
                                 // las propiedades enumerables de un objeto.
    }

    static updateUserUsername(user, username){
        user.setUsername=username
    }

    static getAllUsernames(users){
        const usersUsersNames=users.map(user=> user.username)
        return usersUsersNames
    }
}

module.exports=UserService