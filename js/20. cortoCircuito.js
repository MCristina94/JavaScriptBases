//evaluacion de corto circuito
const auth = true;

if(40){
    console.log("truthy");
}else{
    console.log("falsy");
}

const user = {}

user ?? console.log("usuario autenticado");