//objetos

const producto = {
    nombre : "Tablet",
    precio : 1400,
    disponible : false
}
console.log(producto);
console.table(producto);
console.log(producto.nombre); //sintaxis de punto

// destructuring

const {nombre, precio, disponible} = producto; // se puede extraer el valor en una sola linea
console.log(nombre);

//Enhacement

const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}
console.log(nuevoObjeto);

