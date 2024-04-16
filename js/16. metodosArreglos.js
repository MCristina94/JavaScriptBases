const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "NODE.JS"];
const numeros = [10, 20, 30];

//filter
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const nuevoarray = tecnologias.filter((tech) => tech !== "HTML");
console.log(nuevoarray);

//includes
const resultado = tecnologias.includes("CSS"); //devuelve booleano
console.log(resultado);

//some - devuelve si al menos uno cumple la condicion
const resultado2 = numeros.some(numero => numero > 15); //devuelve booleano
console.log(resultado2);

//find - devuelve el primer elemento que cumple la condicion

const resultado3 = numeros.find(numero => numero > 15)
console.log(resultado3);

//every - retorna true o false si cumple la condicion
const resultado4 = numeros.every(numero => numero >15)
console.log(resultado4);// arroja false por que no todos los numeros del array cumplen la condicion

//reduce - retorna un acumulado del total
const resultado5 = numeros.reduce((total, numero) => {
    return total + numero;
}, 0)
console.log(resultado5);