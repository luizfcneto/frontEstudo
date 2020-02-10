/*
    Descrição:
        Fazer uma função em js que recebe uma string como parametro.
        Fazer com que todo inicio de palavra dessa string comece com
        letra maiuscula.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php
*/

function camelEveryFirstLetter( str ) {
    console.log( "Parametro Fornecido: " + str );

    /* Retirando espaços antes e depois da string. 
    Em seguida, faço dessa string um array separando cada elemento por espaço. */
    str = str.trim().split( " " );
    let ans = [];

    for( let i = 0; i < str.length; i++ ){
        
        let word = str[i];
        if( str[i][0] !== str[i][0].toUpperCase() ){
            word = str[i][0].toUpperCase() + str[i].slice( 1, str[i].length );
        
        }   
        ans.push( word );
    }
    return ans.join( " " );

}

console.log( camelEveryFirstLetter( "the quick brown fox" ) );