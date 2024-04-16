const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA", "NEST.JS"];

for (let i = 0; i < tecnologias.length; i++){
   // console.log(tecnologias[i]);
}

//tres alternativas al foorloop

//Foreach: es un metodo que ejecuta una funcion indicada por cada elemento

tecnologias.forEach(function(tech){
    //console.log(tech);
})

//map: sirve para iterar, pero crea un nuevo arreglo en base a las condiciones de la funcion

tecnologias.map(function(tech){
    //console.log(tech);
})

//la diferencia de foreach y map es que map genera un nuevo arreglo

const arrayMap = tecnologias.map(function(tech){
    return tech
})
const arrayforeach = tecnologias.forEach(function(tech){ 
    return tech
})

console.log(arrayMap);
console.log(arrayforeach);//este retorna un undefind 

//for ... of

for(let tech of tecnologias){
    console.log(tech);
}