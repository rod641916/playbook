const User=require('./../models/User')


class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Nueva")
    }
    
    static getInfo(user){ //Se crea el get para llamar la informacion
       return Object.values(user)//devuelve un array con los valores correspondientes 
                                 // las propiedades enumerables de un objeto.
    }
}

module.exports=UserService