// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml 
// Refrigerante - água 1000 ml por pessoa + de 5 horas 1500 ml

//Crianças valem por 0.5

let inputAdultos = document.getElementById ("adultos");
let inputCriancas = document.getElementById ("criancas");
let inputDuracao = document.getElementById ("duracao");
let resultado = document.getElementById ("resultado")

function calcular () {
 
let adultos =inputAdultos.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)

    let qdttotalCervejaPP = cervejaPP(duracao) * adultos;

    let qdtTotalbebidasPP = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

 resultado.innerHTML = `<p>${qdtTotalCarne/1000}kg de Carne </P>`
 resultado.innerHTML += `<p>${Math.ceil(qdttotalCervejaPP / 350)} Lata-350ml de Cerveja<P>` 
 resultado.innerHTML += `<p>${Math.ceil(qdtTotalbebidasPP/2000)} Pet's 2Lt de Refrigente </P>`

}

function carnePP(duracao){
    if(duracao >= 6){
    return 650
    }else{return 400 }}

function cervejaPP(duracao){
    if(duracao >= 6){
    return 2000
    }
    else{return 1200}}
    
    function bebidasPP(duracao){
        if(duracao >= 6){
        return 1500} else{return 1000}
        }
