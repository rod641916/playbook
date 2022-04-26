class Spiderman{
    constructor (nombre,edad,actor,noPelicula,estudio){
        this.nombre=nombre,
        this.edad=edad,
        this.actor=actor,
        this.noPelicula=noPelicula,
        this.estudio=estudio
       }

       getInfo(){
           return `Hey, I'm ${this.actor} from ${this.estudio}`
       }
}

module.exports=Spiderman


