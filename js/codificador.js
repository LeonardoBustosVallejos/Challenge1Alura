var codificar = document.querySelector("#btn-codificar");
var decodificar = document.querySelector("#btn-decodificar");
var copiar = document.querySelector("#btn-copiar");
var texto = document.querySelector(".texto-ingresado");
var resultado = document.querySelector(".texto-resultante");
var mayusculas = false;


/*eventos*/


//codificar
codificar.addEventListener("click", function(){
    let textoEncriptado = encriptacion(texto.value);
    resultado.value = textoEncriptado;
    hayTexto(resultado.value);
    verificadorMayusculas(texto.value);
    if(mayusculas != true){
        return resultado.value;
    }else{
        resultado.value = " ";
        return alert("mayúscula detectada, por favor retire las mayúsculas de la frase o podría presentarse errores");
    }
});

//decodificar
decodificar.addEventListener("click", function(){
    let textoDesencriptado = desencriptacion(texto.value);
    resultado.value = textoDesencriptado;
    hayTexto(resultado.value);
    return resultado.value;
});

//copiar
copiar.addEventListener("click", function(){
    navigator.clipboard.writeText(resultado.value).then(() =>{
        if(resultado.value = " "){
            alert("No se encuentra texto, por favor ingrese uno")
        }else{
            alert("texto copiado");
        }
    });
});


/*funciones*/

function hayTexto(texto){
    if(texto){
        console.log("se encontro texto");
    }else{
        alert("No se encuentra texto");
    }
}

function verificadorMayusculas(texto){
    let aux = texto.toUpperCase();
    let aux2 = aux.toLowerCase();
    if(aux2 === texto){
        mayusculas = false;
    }else{
        mayusculas = true;
    }
}

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