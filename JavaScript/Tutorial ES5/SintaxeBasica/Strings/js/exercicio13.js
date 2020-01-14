/*  
    Descrição:
        Fazer uma função em js que recebe como parametro uma string e um numero
        Fazer uma nova string que é composta pela string passada como parametro concatenada
        n vezes ( de acordo com o numero passado como parametro )
    
    Exemplo:
        entrada: "Ha!", 3
        saida: "Ha!Ha!Ha!"

        entrada: "Bacana"
        saida: "Bacana"

String.concat:
    https://www.w3schools.com/jsref/jsref_concat_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat

OBS: É recomendável substituir concat por operadores "+=", por causa de performance

Solução:  https://www.w3resource.com/javascript-exercises/javascript-string-exercise-13.php
*/

function repeat( str, n ){
    console.log( "Parametros Fornecidos: " + str + " & " + n );

    if( n === undefined || n <= 0 ){
        return str;
    }else {
        let ans = "";
        for( let i = 0; i < n; i++ ){
            ans += str;
            // ans = ans.concat( str );
        }
        return ans;
    } 

}

console.log( repeat( "Bla!" ) );
console.log( repeat( "Bla!", 10 ) );

console.log( repeat( "Hahue" ) );
console.log( repeat( "Hahue", 2 ) );