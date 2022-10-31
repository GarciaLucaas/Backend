const fs = require('fs');
fs.writeFileSync("manejo1.txt")
const express = require ('express');
const app = express();

class Contenedor{
    // save() {
    //     fs.readFile('manejo1.txt','utf-8',(error,contenido)=>{
    //         if(error){throw new Error('Error')}
    //         console.log(contenido);
    //     })
    // }
    getById = async(id) =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        const result = objetosLeidos.filter(obj => obj.id == id);
        console.log(result[0])
    }
    getAll = async() =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        console.log(objetosLeidos)
    }

    deleteById =async(idEliminar) =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        let nuevaLista = objetosLeidos.filter((item) => item.id !== idEliminar)
        fs.writeFileSync("manejo1.txt",JSON.stringify(nuevaLista))
    }

    deleteAll = async()=>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        fs.writeFileSync("manejo1.txt",JSON.stringify([]))
    }
}
const producto = new Contenedor("Regla")


let leer = fs.readFileSync("manejo1.txt","utf-8")
let objetosLeidos = JSON.parse(leer)

app.get('/productos', async(req, res)=>{
    const pro = await producto.getAll()
    res.send(pro)
})

app.get('/productosRandom', async(req, res)=>{
    const pro = await producto.getAll()
    const random = parseInt(Math.random()* pro.length)
    res.send(pro[random])
})
const PORT = 3000;

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));