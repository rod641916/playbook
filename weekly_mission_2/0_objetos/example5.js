console.log("Ejemplo 5: Objeto con metodo que recibe parametros")

const myPet = {
    name:"Gumarin",
    sayHelloToMyPet:function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Objeto con metodo que recibe parametros")
myPet.sayHelloToMyPet("Sharon")