/*
    Descrição:
        Fazer uma função que calcule uma exponenciação com dados 
        fornecidos pelo usuario e imprimir o resultado
        
        
Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-15.php
*/

function powUser(){
    let base = prompt( "informe a base da exponenciação" );
    let expoente = prompt( "Informe o expoente que deseja elevar " + base + ":" );

    base = parseInt( base );
    expoente = parseInt( expoente );

    console.log( base + "^" + expoente + " = " + Math.pow( base, expoente ) );
}

powUser();