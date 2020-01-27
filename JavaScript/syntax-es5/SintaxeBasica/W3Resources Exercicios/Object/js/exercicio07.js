/*
    Descrição:
        Fazer uma função em js que recebe como paraemetro uma string
        Retornar em um array, um conjunto de letras e palavras que podem ser formadas 
        pela string fornecida.
        
    Exemplo:
        entrada: dog    
        saida: [ "d", "do", "dog", "o", "og", "g" ];   

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-7.php
*/

function subsetOfAString( str ){

    console.log( "Parametro Fornecido: " + str );
    let ans = [];

    for( let i = 0; i < str.length; i++ ){
        
        let subset;
        for( let j = 0; j < str.length; j++ ){

            if( j === i ){
                subset = str[i];

            } else if( j > i ){
                subset += str[j];
            
            }else{
                continue;
            }
            ans.push( subset );
        }
    }

    console.log( ans );
}

subsetOfAString( "dog" );
subsetOfAString( "Entrada" );