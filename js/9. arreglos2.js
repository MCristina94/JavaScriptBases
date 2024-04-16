const tecnologias= ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA"];

const tecnologias2 = tecnologias.filter(function(tech){  //filter va a recorrer y encontrar de acuerdo a la condicion y ejectar la funcion, no modifica el arreglo original.
    if(tech === "HTML"){
        return tech
    }
})

//console.log(tecnologias2);

const tecnologias3 = tecnologias.map(function(tech){ //con map no hay mutación, es el recomendado para recorrer arreglos.
   //console.log(tech);
})

const tecnologias4 = tecnologias.map(function(tech){ 
    if (tech !== "CSS"){
        return tech
    }
 })
 console.log(tecnologias4);