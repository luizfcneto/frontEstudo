/*
    Descrição:
        Fazer uma função em js que recebe uma string como parametro, um nome.
        Retorar esse nome de modo abreviado, primeiro nome + letra do sobrenome + "."

    Exemplo:
        entrada: "Luiz Fernando"
        saida: "Luiz F."

String.search:
    https://www.w3schools.com/jsref/jsref_search.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search
    https://www.geeksforgeeks.org/javascript-string-search/

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-5.php
*/

function abbreviatedName( name ){
    console.log( "Parametro fornecido " + name );  

    if( name.length < 0 ){
        return name;
    
    }else{
        let secondNameIndex = name.search( " " ) + 1;
        let ans = name.slice( 0, secondNameIndex + 1 ) + ".";
        return ans;
    }

}

function abbreviatedName2( name ){
    console.log( "Parametro Fornecido " + name );
    let arrayNames = name.trim().split( " " );
    return arrayNames[0] + " " + arrayNames[1].charAt(0) + ".";

}

console.log( abbreviatedName( "Luiz Fernando Carneiro Neto" ) );
console.log( abbreviatedName( "Kushina Uzumaki" ) );
console.log( abbreviatedName( "Hashirama Senju" ) );
console.log( abbreviatedName( "Hatake Kakashi" ) );
console.log( abbreviatedName( "Uchiha Madara" ) );
console.log( abbreviatedName( "Naruto Uzumaki" ) );

console.log( abbreviatedName2( "Luiz Fernando Carneiro Neto" ) );
console.log( abbreviatedName2( "Kushina Uzumaki" ) );
console.log( abbreviatedName2( "Hashirama Senju" ) );
console.log( abbreviatedName2( "Hatake Kakashi" ) );
console.log( abbreviatedName2( "Uchiha Madara" ) );
console.log( abbreviatedName( "Naruto Uzumaki" ) );