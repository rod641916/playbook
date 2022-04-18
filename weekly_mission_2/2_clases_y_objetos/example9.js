class Developer{
    constructor(name,mainLang,stack){
        this.name=name,
        this.mainLang=mainLang,
        this.stack=stack
    }

    get getName(){
        return this.name
    }
}

console.log("Ejemplo 9: Hrencia entre dos clases")

const rodrigoDev=new Developer("Rodrigo","js",["Node Js","Lisp","Groovy"])
console.log(rodrigoDev)

class LaunchXStudent extends Developer{  //extends es para declarar la herencia
}

const rodrigoLaunchXDev = new LaunchXStudent("Rodrigo","js",["Node Js","Lisp","Groovy"])
console.log(rodrigoLaunchXDev)
console.log(rodrigoLaunchXDev.getName)