var codificar = document.querySelector("#btn-codificar");
var decodificar = document.querySelector("#btn-decodificar");
var copiar = document.querySelector("#btn-copiar");
var texto = document.querySelector(".texto-ingresado");
var resultado = document.querySelector(".texto-resultante");


//objetos para facilitarme la vida
var reglaEncriptado ={
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};
var reglaDesencriptado ={
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
}


/*eventos*/


//codificar
codificar.addEventListener("click", function(){
    let textoEncriptado = encriptacion(texto.value);
    resultado.value = textoEncriptado;
    return resultado.value;
});

//decodificar
decodificar.addEventListener("click", function(){
    let textoDesencriptado = desencriptacion(texto.value);
    resultado.value = textoDesencriptado;
    return resultado.value;
});

//copiar
copiar.addEventListener("click", function(){
    resultado.select();
    resultado.setSelectionRange(0,99999);
    document.execCommand("copy");//execComand está en desuso, pendiente buscar una actualización
});



/*funciones*/


function encriptacion(value){
    let encriptado = value.replace(/a|e|i|o|u/g, function(coincidencia){
        return reglaEncriptado[coincidencia];
    });
    return encriptado;
}

function desencriptacion(value){
    let desencriptado = value.replace(/ai|enter|imes|ober|ufat/g, function(coincidencia){
        return reglaDesencriptado[coincidencia];
    });
    return desencriptado;
}