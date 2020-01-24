/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string,
        retornar uma outra string alterando o case de cada caractere da 
        string fornecida.

    Exemplo:
        entrada: "meu Pastel É mais BaRato"
        saida:  "MEU pASTEL é MAIS bArATO"

String:
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

    https://www.w3schools.com/jsref/jsref_join.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join


Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-9.php
*/

function invertCase( str ){
    console.log( "Parametro Fornecido: " + str );
    console.log( str );
    let newArray = [];

    newArray = str.split('').reduce( ( arrTemp, element ) => {
        // console.log( arrTemp );
        // console.log( element );

        if( element === element.toUpperCase() ){
            arrTemp.push( element.toLowerCase() );
        }else if( element === element.toLowerCase() ){
            arrTemp.push( element.toUpperCase() );
        }
        return arrTemp;
    } , [] ).join('').toString();

    // newArray = newArray.join('').toString();
    return newArray;
}

console.log( invertCase( "meu Pastel É mais BaRato" ) );