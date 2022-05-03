const express = require ('express') // Objeto express, lo mandas a llanar, dices que lo vas a usar

const app=express()//Se llama  la app de express

const port=3000 // se dice el puerto a utilizar, por defecto es el 3000

//path inicial, a donde nos mandara accediendo solo al localhost:3000/
app.get('/', (req,res)=>{
    res.send('Hello word')
})

// Este path se abrira en la ruta localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Hola a todos los explorers')
})

// Aqui se regresara un objeto
app.get('/explorersInNode',(req,res)=>{
    const explorer={name:"Rodrigo",age:23,msg:"Holi a todos"}
    const explorer1={name:"Luis",age:25,msg:"Holi a todos"}
    res.send(explorer)
    res.send(explorer1)
})

//Query Params: estos reciben un parametro por la url
// req se usa para señalar el valor enviado desde la URL
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})

// Esta parte ayuda a inicializar la app
app.listen(port,()=>{
    console.log(`Example ${port}`)
})