// arrays o arreglos
const tecnologias = [20, 30, 40, "React.ks"];
console.log(tecnologias);
console.log(tecnologias[1]);

const tecnologias2= ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA"];
tecnologias2[2] = "Node.js" //reescribe el valor en la posicion 2
tecnologias2[5] = "TypeScript" // crea esta posicion con el valor asignado
tecnologias2[10] = "C+" // crea esta posicion con el valor, sin importar que pase del 5 al 10, no genera valores en blanco


tecnologias2.push("otro") //agrega el valor en la ultima posicion (muta o modifica el arreglo original)

const nuevoArreglo = [...tecnologias2, "Nest.js"] //agrega nest.js al final, si se requiere añadir al inicio se coloca primero.  ["Nest.js", ...tecnologias2]

tecnologias2.shift(); //Elimina el primer valor modificando el arreglo.
console.log(tecnologias2);

console.log(nuevoArreglo);

