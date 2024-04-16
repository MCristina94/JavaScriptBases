
// function declaration
sumar(2, 10);
function sumar(a, b){
    console.log(a + b);
}

// realiza la operacion de la funcion aunque este llamandose la funcion antes de ser declarada.


// function expression
sumar(2, 10);
const sumar = function(a, b){
    console.log(a + b);
}
//arroja error, ya que no se debe llamar la funcion antes de ser declarada, debe llamarse despues.

// function expression

const sumar = function(a, b){
    console.log(a + b);
}
sumar(2, 10); //llamando la funcion abajo si arroja el resultado de la funcion