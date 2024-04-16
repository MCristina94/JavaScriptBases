//objetos - destructuring de dos o mas objetos
const producto = {
    nombre : "Tablet",
    precio : 1400,
    disponible : false
}

const cliente = {
    nombre : "juan",
    premium : true,
}

const carrito = {
    cantidad: 1,
    ...producto //añade la informacion del objeto del producto
}

//console.log(carrito);

const nuevoObjeto =  {
   ...producto, 
    ...cliente
}
console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2);