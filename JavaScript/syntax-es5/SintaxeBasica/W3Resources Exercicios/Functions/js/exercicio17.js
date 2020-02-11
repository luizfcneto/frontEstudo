/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        Contabilizar para cada letra presenta na string quantas vezes ela aparece
        Armazenar em um objeto contendo atributos representando as letras 
        e seus valores respectivamente sendo a quantidade de aparições.
        Retornar esse objeto.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-17.php
*/
function getOccurrences( str ){
    console.log( "Parametro Fornecido: " + str );

    let obj = {};
    let letters = "";
    let arrQ = [];
    letters = str[0];

    // Mapeando letras unicas
    for( let i = 0; i < str.length; i++ ){

        if( letters.search( str[i] ) === -1 ){
            letters += str[i];
        }
    }

    // Mapeando aparição de cada letra unica
    for( let i = 0; i < letters.length; i++ ){

        let counter = 0;
        for( let j = 0; j < str.length; j++ ){
            if( letters[i] === str[j] ){
                counter++;
            }

        }
        arrQ.push( counter );
    }

    // modificando tipo para array de letras
    letters = letters.split("");

    for( let prop in arrQ ){

        Object.defineProperty( obj, letters[ prop ], {
            value: arrQ[ prop ]
        } )

    }

    return obj;
}

console.log( getOccurrences( "thequickbrownfxjmpsvlazydg" ) );
console.log( getOccurrences( "thequickbrownfoxjumpsoverthelazydog" ) );