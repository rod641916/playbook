class Toolbox{
    static getMostUsefulTools(){
        return ["Command line","git","Text Editor"]
    }
}

console.log("Ejemplo 8: Metodos static")

console.log(Toolbox.getMostUsefulTools())

// Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad 
//de instanciar algún objeto