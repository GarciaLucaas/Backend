class Usuario{
    constructor(nombre,apellido,libros,mascota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascota = mascota;
        this.cantidadMascota = 0;
    }
    
    getFullName(){
        return this.nombre + this.apellido
    }
    addMascota(nombreMascota){
        this.mascota = nombreMascota
    }
    countMascotas(){
        this.cantidadMascota ++;
    }
    addBook(titulo,autor){
        this.libros = titulo,autor

    }
    getBookNames(titulo){
        this.libros = titulo
    }

}
const usuario1 = new Usuario("Lucas","Martinez","Libro","Perro")
console.log(Usuario.countMascotas);