console.log("Ejemplo 4: Objeto con métodos")

const pet={
    name:"Gumarin",

    sayHello: function(){
        console.log(`${this.name} te dice holi :3`)
    }
}
console.log("Objeto con metodo")
pet.sayHello();