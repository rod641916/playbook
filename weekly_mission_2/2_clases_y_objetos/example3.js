class Student{

    constructor(name,age,subjects){
        this.name=name,
        this.age=age,
        this.subjects=subjects
    }
}

const rodrigoStudent = new Student("Rodrigo",23,["Node JS","Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(rodrigoStudent)