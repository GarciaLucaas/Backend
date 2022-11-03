const fs = require('fs');
fs.writeFileSync("manejo1.js",[])
const express = require ('express');
const app = express();
const {Router}= express;
const router = new Router();
let contadorId = 0
class Contenedor{
    save = async(obj) => {
        
        contadorId = contadorId + 1
        Object.defineProperty(obj, 'id', {
            value:contadorId,
            writable: true,
            enumerable: true,
            configurable: true
        })

        let leer = fs.readFileSync("./manejo1.js","utf-8")
        let objetosLeidos = JSON.parse(leer)
        objetosLeidos.push(obj)

        
        fs.writeFileSync("./manejo1.js",JSON.stringify(objetosLeidos))
        console.log(contadorId)
    }
    getById = async(id) =>{
        let leer = fs.readFileSync("manejo1.js","utf-8")
        let objetosLeidos = JSON.parse(leer)
        const result = objetosLeidos.filter(obj => obj.id == id);
        console.log(result[0])
    }
    getAll = async() =>{
        let leer = fs.readFileSync("manejo1.js","utf-8")
        let objetosLeidos = JSON.parse(leer)
        console.log(objetosLeidos)
    }

    deleteById =async(idEliminar) =>{
        let leer = fs.readFileSync("manejo1.js","utf-8")
        let objetosLeidos = JSON.parse(leer)
        let nuevaLista = objetosLeidos.filter((item) => item.id !== idEliminar)
        fs.writeFileSync("manejo1.js",JSON.stringify(nuevaLista))
    }

    deleteAll = async()=>{
        let leer = fs.readFileSync("manejo1.js","utf-8")
        let objetosLeidos = JSON.parse(leer)
        fs.writeFileSync("manejo1.js",JSON.stringify([]))
    }
}
const producto = new Contenedor("Regla")
//let leer = fs.readFileSync("manejo1.js","utf-8")
//let objetosLeidos = JSON.parse(leer)


// express 
app.get('/productos', async(req, res)=>{
    const pro = await producto.getAll()
    res.send(pro)
})

app.get('/productosRandom', async(req, res)=>{
    const pro = await producto.getAll()
    const random = parseInt(Math.random()* pro.length)
    res.send(pro[random])
})

// Router 
const productos = []
router.get('/',(req, res)=>{
    res.json(productos)
})
router.get('/:id',(req,res)=>{
    const id = producto.getById()
    res.json(id)
})
router.post('/',(req,res)=>{
    res.json({})
})
router.put('/:id',(req, res)=>{
    //
})
router.delete('/:id',(req, res)=>{
    //
})
app.use('/productos',router);
const PORT = 3000;
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));