//tipos de dato

//undefined
let cliente
console.log(cliente); //el valor es undefined

//strings o cadenas de texto
let nombre = "Andrea"; //esto es una cadena de texto, tambien es posible crear con comillas sencillas
console.log(typeof nombre);

// numbers
const number = 20.10;
console.log(typeof number);

//BigInt
const numeroGrande = BigInt(5484616519648651456411) // es un numero muy grande

//Boolean
const descuento = true
console.log(typeof descuento);

// Null
const descuento2 = null; //quiere decir que su valor es null, undefined es que no tiene valores asignados.

//Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol  === segundoSymbol); //todos los simbolos son diferentes, son unicos, nunca se repiten
console.log(segundoSymbol);
