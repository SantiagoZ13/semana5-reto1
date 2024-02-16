class Estudiante{
    #nombre
    #apellido
    #calificaciones
    constructor(nombre, apellido, calificaciones){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#calificaciones = calificaciones
    }
    get nombreCompleto(){
        return `NOMBRE COMPLETO: ${this.#nombre} ${this.#apellido}`
    }
    calcularPromedio(ratings = this.#calificaciones){
        let total = 0
        let promedio;
        for(const rating of ratings){
            total = total + rating;
        }
        promedio = total/ratings.length
        return promedio
    }
    static listaEstudiantes(estudiantes){
        let index = 1
        for(const estudiante of estudiantes){
            console.log(` ${index}. ${estudiante.nombreCompleto} PROMEDIO: ${estudiante.calcularPromedio()}`)
            index++
        }
    }
}
let estudiante1 = new Estudiante("Santiago", "Ponce", [5,3,4,2,4])
let estudiante2 = new Estudiante("Luisa", "Fernanda", [5,5,4,3,4])
let estudiante3 = new Estudiante("Alberto", "Armandez", [5,4,3,2,1])
Estudiante.listaEstudiantes([estudiante1, estudiante2, estudiante3])