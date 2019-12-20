/*
    Descrição:
        Fazer uma função que receba como parametro uma String, 
        e reinverta ela omitindo todos os caracteres que não estejam no alfabeto.
        
    Exemplo:
        entrada: "krishan"
        saida: "nahsirk"

        entrada: "Z3tr0n"
        saida: "nrtz"

Solução parecida: https://www.w3resource.com/javascript/form/all-letters-field.php

Regex:
    https://www.w3schools.com/jsref/jsref_match.asp
    https://www.w3schools.com/js/js_regexp.asp
*/

//Minha Solução:
function reverseLetter( string ){
    console.log( "Palavra fornecida: " + string );
    let reverse = "";

    //regex = capta apenas letras do alfabeto, tanto maiusculas quanto minusculas.
    let validateLetter = /^[A-Za-z]+$/;

    for( let i = string.length - 1; i >= 0; i-- ){
        let temp = string[i];

        if( temp.match( validateLetter ) ){
            reverse += string[ i ];
            console.log( reverse );
        }
    }
    return reverse;
}

console.log( reverseLetter( "z3tr0n" ) );
console.log( reverseLetter( "krishan" ) );

//Outra Solução:
//const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');