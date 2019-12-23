/*
    Descrição: 
        Fazer um programa em js que capte dois numeros fornecidos por um formulario;
        sendo possivel realizar duas operacoes aritmeticas com os numeros:
            - multiplicacao;
            - divisao;
        
        retornar a resposta de acordo com o botão que define a operacao a ser realizada e os numeros
        inseridos. Operação definida por botões que são clicados

        Exibir o resultado no html no local apropriado.
    
    DOM manipulation:
        https://www.w3schools.com/jsref/prop_text_value.asp

        https://www.w3schools.com/jsref/met_element_getattribute.asp

    Event:
        https://www.w3schools.com/js/js_htmldom_eventlistener.asp
        
    Soulção:
        https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php
*/

let inputNum1;
let inputNum2;
let resposta;

//Função para realizar a operação de multiplicação:
function multiplicar( ){
    pegaInputs();
    resposta =  inputNum1 * inputNum2;
    console.log( inputNum1 + " * " + inputNum2 );
    exibeResposta();
}

//Função para realizar a operação de divisão:
function dividir( ){
    pegaInputs();
    resposta = inputNum1 / inputNum2;
    console.log( inputNum1 + " / " + inputNum2 );
    exibeResposta();
}

//captar informações do html:
function pegaInputs(){
    inputNum1 = document.getElementById( "num1" ).value;
    inputNum2 = document.getElementById( "num2" ).value;
}   


//Exibir resposta do calculo no local apropriado:
function exibeResposta(){
    document.getElementById( "answer" ).innerHTML = resposta;
}

function start(){

    if( inputNum1 === null || inputNum1 === undefined || inputNum2 === null || inputNum2 === undefined ){
        console.log( "Preencha o formulario com os devidos numeros!" );
    
    } else {
        document.querySelector( "mult" ).addEventListener( "click", multiplicar );
        document.querySelector( "div" ).addEventListener( "click", dividir );
    }

}

start();
