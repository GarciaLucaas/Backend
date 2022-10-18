class Usuario{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascota = [];
    }
    
    getFullName(){
        return this.nombre + this.apellido
    }
    addMascota(nombreMascota){
        this.mascota.push(nombreMascota)
    }
    countMascota(){
        return this.mascota.length
    }
    addBook(titulo, autor){
        const libroInf = {titulo: titulo,autor: autor}
        this.libros.push(libroInf)

    }
    getBookNames(){
        return this.libros.map(item => item.titulo)
    }

}
const usuario1 = new Usuario("Lucas","Martinez")
usuario1.addMascota("Jack")
console.log(usuario1.countMascota());
usuario1.addBook("Titulo", "Autor")
console.log(usuario1.getBookNames());

