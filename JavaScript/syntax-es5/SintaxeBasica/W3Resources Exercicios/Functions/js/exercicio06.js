/*  
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        Retornar a palavra contida nessa string fornecida que tem o maior tamanho.


Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-6.php
*/

function giveMeTheLongestWord( string ){
    console.log( "Parametro fornecido: " + string );
    
    string = string.trim().split( " " );

    ans = "";
    for( let i = 0; i < string.length; i++ ){

        if( string[i].length > ans.length ){
            ans = string[i];
        }

    }
    return ans;
}

console.log( giveMeTheLongestWord( "Web Development Tutorial" ) );