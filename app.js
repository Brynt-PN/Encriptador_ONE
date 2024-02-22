
// Elementos HTML
let input = document.getElementById('textoInput');
let output = document.getElementById('textoOutput');
let btEncriptar = document.getElementById('encriptar');
let btDesemcriptar = document.getElementById('desemcriptar');
let btCopiar = document.getElementById('btCopiar');
let secEncriptadora = document.getElementById('secEncriptadora');
let secInformativa = document.getElementById('secInformativa');
let secEncriptda = document.getElementById('secEncriptda');

// Variables
let vocales = ['a', 'e', 'i', 'o', 'u'];

let codigos = {
    e : "enter",
    i : "imes",
    a : "ai",
    o : "ober",
    u : "ufat",
};

let codigosInversos = {
    e : 5,
    i : 4,
    a : 2,
    o : 4,
    u : 4
};

// Llamados
conditionInitial();

// Funciones
function conditionInitial(){
    secEncriptda.style.display = 'none';
}

function conditionEncriptadora(){
    secInformativa.style.display = 'none';
    secEncriptda.style.display = 'block';
}

function capturarTexto(){
    let text = input.value.toLowerCase();
    input.value = ''
    return text
}

function mostrarTexto(text){
    output.value = text
}

function encriptarTexto(){
    let textoutput = '';
    let textinput = capturarTexto();
    for (let caracter of textinput) {
        if (vocales.includes(caracter)) {
            textoutput = textoutput + codigos[caracter];
        }
        else{
            textoutput = textoutput + caracter;
        }
    }
    conditionEncriptadora();
    mostrarTexto(textoutput);
}

function desemcriptarTexto(){
    let textoutput = '';
    let textinput = capturarTexto();
    let indice = 0;
    while(indice < textinput.length){
        if (vocales.includes(textinput[indice])) {
            textoutput = textoutput + textinput[indice];
            indice += codigosInversos[textinput[indice]];
        }
        else{
            textoutput = textoutput + textinput[indice];
            indice++
        }
    }
    conditionEncriptadora();
    mostrarTexto(textoutput);

}

function copiarPortapapeles(){
    navigator.clipboard.writeText(output.value);
}