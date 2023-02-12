/* criar variavel com id do html */
/* fora do escropo  global */
/*  value = valor 
textContent = valor dentro da div */
/* usando toFixed() para quebrar valores grande  */

const calcular = document.getElementById("calcular");


function imc(){
    const nome =document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' &&altura !== '' && peso !==''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        
        let classificacao = "";
        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal.Parabéns!!!';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else  if(valorIMC < 35){
            classificacao = 'com obesidade grau 1'
        }else if(valorIMC < 40) {
            classificacao = 'com obesidade grau 2'
        }else (valorIMC <50){
            classificacao = 'com obesidade grau 3.Cuidado!!!'
        }


        resultado.textContent =`${nome} Seu IMC é ${valorIMC} e você está ${classificacao}`
        
    }else{
        resultado.textContent = 'Preencha todos os campos!!'
    }
}
/* criando evento */
calcular.addEventListener('click',imc);
