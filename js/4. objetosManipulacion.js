// objetos manipulacion
const producto = {
    nombre : "Tablet",
    precio : 1400,
    disponible : false
}

Object.freeze(producto) //esta funcion permite que no se puedan modicicar los valores del objeto

//reescribir un valor
producto.disponible= true;
//si no existe, lo va a añadir
producto.imagen="imagen.png"
//para eliminar
delete producto.precio;
console.log(producto);