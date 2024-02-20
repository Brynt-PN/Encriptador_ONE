
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
    enter : "e",
    imes  : "i",
    ai    : "a",
    ober  : "o",
    ufat  : "u"
};

// Llamados
conditionInitial();

// Funciones
function conditionInitial(){
    secEncriptda.style.display = 'none';
}

function encriptarTexto(){
    let textinput = input.value.toLowerCase();
    console.log(textinput);
    for (let caracter of textinput) {
        if (vocales.includes(caracter)) {
            console.log(caracter)
        }
    }
}