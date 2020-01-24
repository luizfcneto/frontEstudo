/* 
    Descrição:
        Fazer um programa em js que recebe como parametro dois inteiros que representam ano Inicial e ano Final
        Encotrar dentro desse periodo de anos, anos que são bissextos
        Retorar um outro array de inteiros que contendo os anos bissextos

    
Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-16.php
*/

function verificaAnoBissextoPorPeriodo( anoInicial, anoFinal ){
    let ans = [];

    for( i = anoInicial; i <= anoFinal; i++ ){
        if( verificaAnoBissexto( i ) ){
            ans.push( i );
        }
    }
    return ans;
}   

function verificaAnoBissexto( year ){
    if( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ){
        return true;

    }else {
        return false;
    }
    
}

console.log( verificaAnoBissextoPorPeriodo( 2000, 2050 ) );