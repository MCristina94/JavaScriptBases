// optional chaining '?'

const alumno = {
    alumno: "juan",
    clase: "programacion 1",
    aprobado: true,
    examenes:{
        examen1: 10
    }
}

console.log(alumno.examenes?.examen1); //pregunta primero si existe la variable examenes, si existe imprime el examen1

console.log(alumno);

//Nullish coalescing operator (??)
const pagina = null ?? 1 //retorna el valor derecho cuando el primero es null
const paginador = 20 ?? 1 //aqui imprime el 20