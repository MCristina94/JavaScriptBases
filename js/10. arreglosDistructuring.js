const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA"];

const react = tecnologias[3];
//destructuring de arreglos
//const [html] = tecnologias //asigna el primer valor es decir "HTML"
const [pyhton, css, nodejs] = tecnologias; //asigna los valores de las tres primeras posiciones del arreglo: HTML, CSS Y JAVASCRIPT

console.log(nodejs); // aqui imprime javascript

const [, , , python] = tecnologias; // los espacios tambien pueden usarse para ocupar la posicion, en este caso si decido imprimir en consola, daria como resultado PYTHON
