/*
    Descrição:
        Fazer uma função que pege os atributos width e height de uma janela ( window )
        toda vez que ela sofrer alteração de tamanho.

Window event onresize:
    https://www.w3schools.com/jsref/event_onresize.asp

Window event onload:
    https://www.w3schools.com/jsref/event_onload.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-13.php
*/

function verificaTamanhoJanela(){
    let janela = window;
    console.log( "Janela Modificada" );
    console.log( "Largura: " + janela.outerWidth, "Altura: " + janela.outerHeight );
}