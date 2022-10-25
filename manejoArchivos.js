const fs = require('fs');

class Contenedor{
    // save() {
    //     fs.readFile('manejo1.txt','utf-8',(error,contenido)=>{
    //         if(error){throw new Error('Error')}
    //         console.log(contenido);
    //     })
    // }
    getById = (id) =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        const result = objetosLeidos.filter(obj => obj.id == id);
        console.log(result[0])
        console.log(leer);
    }
    getAll = () =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        console.log(objetosLeidos)
    }

    deleteById = (idEliminar) =>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        let nuevaLista = objetosLeidos.filter((item) => item.id !== idEliminar)
        fs.writeFileSync("manejo1.txt",JSON.stringify(nuevaLista))
    }

    deleteAll = ()=>{
        let leer = fs.readFileSync("manejo1.txt","utf-8")
        let objetosLeidos = JSON.parse(leer)
        fs.writeFileSync("manejo1.txt",JSON.stringify([]))
    }
}
const producto = new Contenedor("Regla")
