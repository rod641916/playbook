class Pokemon {
    constructor (nombre_pokemon){
        this.nombre_pokemon= nombre_pokemon
    }

    sayHello(){
        console.log(`Mi pokemon ${this.nombre_pokemon} te saluda`)
    }

    sayMessage(msg){
        console.log(`Mi pokemon ${this.nombre_pokemon}te dice:${msg}`)
    }
}

module.exports=Pokemon;