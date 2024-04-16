//operador ternario
const saldo = 1000;
const pagar = 1200;
const tarjeta = true;
const autenticado = true;

autenticado ? console.log("usuario autenticado"): console.log("usuario no atenticado");

saldo > pagar ? console.log("si puedes pagar") : console.log("no puedes pagar");

//ternario anidado

saldo > pagar ? 
    console.log("si puedes pagar") :
    tarjeta ? console.log("puedes pagar con tarjeta") : 
    console.log("no puedes pagar");

    saldo > pagar || tarjeta ? 
    console.log("si puedes pagar") :
    console.log("no puedes pagar");