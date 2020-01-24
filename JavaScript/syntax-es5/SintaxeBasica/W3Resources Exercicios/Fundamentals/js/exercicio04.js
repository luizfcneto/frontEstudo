/*
    Descrição:
        Fazer um programa para calcular a área de um triangulo utilizando como parametro apenas os seus lados.
    

    Exemplo: a = 5, b = 6, c = 7. Sendo a,b e c lados do triangulo.

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php

calculando area do triangulo pelos lados: - Formula de Heron
https://www.todamateria.com.br/area-do-triangulo/

condicao de existencia do triangulo:
https://www.colegioweb.com.br/triangulos/condicao-de-existencia-do-triangulo.html

*/

//Minha Solução:
function areaTriangulo( ladoa, ladob, ladoc ){
    //validando lados do triangulo
    if( ladoa < 0 || ladob < 0 || ladoc < 0 ){
        return null;
    }

    //validando condicao de existencia do triangulo
    if( ladoa + ladob <= ladoc || ladob + ladoc <= ladoa || ladoa + ladoc <= ladob ) {
        return null;
    }

    //Calculando area pela formula de heron
    let semiPerimetro = ( ladoa + ladob + ladoc )/2 ;
    let area = Math.sqrt( semiPerimetro * ( semiPerimetro - ladoa ) * ( semiPerimetro - ladob ) * ( semiPerimetro - ladoc ) );   
    return area;
}

console.log( "Area: "+ areaTriangulo( 5, 6, 7 ) );


// semiperiodo = ( 5 + 6 + 7 )/2 => 9
// area = raiz( 9 * ( 9-5) * (9-6) * (9-7) );   => raiz( 9*4*3*2 ) => 14.6969...