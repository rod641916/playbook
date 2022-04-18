class PullRequest{
    constructor (repo,title,lines_changed){
        this.repo=repo,
        this.title=title,
        this.lines_changed=lines_changed
        this.status="Open",
        this.dateCreate=new Date() //guarda la fecha en el que se instancia el objeto
    }
    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreate}`
    }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myRepo1 = new PullRequest("Launch X", "Mi primer PR", 100)
console.log(myRepo1.getInfo())

const myRepo2 =new PullRequest("Launch X", "Mi segundo PR",85)
console.log(myRepo2.getInfo())