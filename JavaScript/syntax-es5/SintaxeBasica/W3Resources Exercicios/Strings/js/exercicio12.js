/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        essa string estará no formato de camelCase
        retirar a formatação camelCase, colocando todas as letras em minusculo e 
        separando as palavras ou por espaço( " " ), ou hifen ( "-" ), ou underscore ( "_" )

    Exemplo:
        Entrada: "MeuPastelÉMaisBarato!" 
        Saida: "meu pastel é mais barato!" ou "meu_pastel_é_mais_barato!" ou "meu-pastel-é-mais-barato"

string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

string.toUppercase:
    https://www.w3schools.com/jsref/jsref_touppercase.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    https://www.geeksforgeeks.org/javascript-string-touppercase/

String.toLowerCase:
    https://www.w3schools.com/jsref/jsref_tolowercase.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    https://www.geeksforgeeks.org/javascript-string-prototype-tolowercase/

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-12.php
*/
function uncamelize( str, char ){
    console.log( "Parametro Fornecido: " + str + " & " + char );
    if( char === undefined ){
        char = " ";
    }
    let ans = [];

    let arrayStr = str.trim().split("");
    for ( let i = 0; i < arrayStr.length; i++ ){

        if( arrayStr[i] === arrayStr[i].toUpperCase() ){
            if( i !== 0 ){
                ans += char;
            }
            ans += arrayStr[i].toLowerCase();
        
        }else{
            ans += arrayStr[i];
        }

    }
    return ans;

}

console.log( uncamelize( "helloWorld" ) );
console.log( uncamelize( "helloWorld", "-" ) );
console.log( uncamelize( "helloWorld", "_" ) );

console.log( uncamelize( "MeuPastelÉMaisBarato" ) );
console.log( uncamelize( "MeuPastelÉMaisBarato", "-" ) );
console.log( uncamelize( "MeuPastelÉMaisBarato", "_" ) );

console.log( uncamelize( "MeuPastelÉMaisBarato", "?") );
console.log( uncamelize( "MeuPastelÉMaisBarato", "@" ) );
console.log( uncamelize( "MeuPastelÉMaisBarato", "%" ) );

