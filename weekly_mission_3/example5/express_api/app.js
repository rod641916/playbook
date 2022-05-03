const express= require('express')// Objeto express, lo mandas a llamar, dices que lo vas a usar

const app=express()//Se llama  la app de express

app.use(express.json()) //Se indica que se usara un archivo JSON

const port=3000;// se dice el puerto a utilizar 

//Get Creacion de un endpoint

//HTTP metodo

app.get('/v1/explorers',(req,res)=>{
    console.log(`Api de explores con get, muestra todos ${new Date()}`)
    const explorer0={id:1,name:"Rodrigo0"}
    const explorer1={id:2,name:"Rodrigo1"}
    const explorer2={id:3,name:"Rodrigo2"}
    const explorer3={id:4,name:"Rodrigo3"}
    const explorer4={id:5,name:"Rodrigo4"}
    const explorers=[explorer0,explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

// Endpoint que regrese un dato medianto un ID
// En este caso se solicita el ID en la URL para mostrar los datos de la persona
app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explores GET request ${new Date()}`)
    console.log(`Getting explorer with ID ${req.params.id}`)
    const explorer={id:1,name:"Rodrigo"}
    res.status(200).json(explorer)
})

//POST: Crear un explorer con datos ingresados
app.post('/v1/explorers',(req,res)=>{
    console.log(`Api POST request ${new Date()}`)
    const requestBody =req.body
    res.status(201).json({message:"Creado"})
})

//PUT: Actualiza los datos
app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`Api PUT request ${new Date()}`)
    console.log(`Actualiza explorador con ID ${req.params.id}`)
    const requestBody=req.body
    res.status(200).json({message:"Actualizado"})
})

//DELETE: Borra un explorador
app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`Api DELETE request ${new Date()}`)
    console.log(`Borra explorador con ID ${req.params.id}`)
    const requestBody=req.body
    res.status(200).json({message:"Borrado"})
})


// Esta parte ayuda a inicializar la app
app.listen(port,()=>{
    console.log(`Example app listen on port ${port}`)
})
