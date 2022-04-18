class MissionCommander{
    constructor(name,mission){
        this.name=name,
        this.mission=mission,
        this.students=0,
        this.lives=0
    }

    get getStudents(){
        return this.students
    }
    get getLives(){
        return this.lives
    }

    set setStudents(students){
        this.students=students
    }
    set setLives(lives){
        this.lives=lives
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode=new MissionCommander ("Rodrigo", "Node JS")

console.log("Cantida de alumnos sin modificar:"+missionCommanderNode.getStudents)
console.log("Cantidad de lives sin modificar:"+missionCommanderNode.getLives)

console.log("-----------------------------------------------------------")
missionCommanderNode.setStudents=100
missionCommanderNode.setLives=4

console.log("Cantidad de alumnos modificados:"+missionCommanderNode.getStudents)
console.log("Cantidad de lives modificado:"+missionCommanderNode.getLives)