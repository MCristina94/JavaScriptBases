// objetos - destructuring de dos o mas objetos
const producto = {
    nombre : "Tablet",
    precio : 1400,
    disponible : false
}
const cliente = {
    nombre : "juan",
    premium : true,
    direccion: {
        calle: "calle 13c"
    }
}

const {nombre, direccion: {calle}} = cliente;
const {nombre: nombreProducto} = producto //renombra la variable, es necesario cuando se repitan el nombre de las variables y evitar colicion de nombres
console.log(nombre);
console.log(nombreProducto);
console.log(calle);
