/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        Retornar um array contendo todas as combinações 

    Exemplo:
        entrada: "dog"
        saida: [ "d", "do", "dog", "o", "og", "g" ]

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
*/

function generateAllCombinations( word ){
    console.log( "Parametro fornecido: " + word );
    let ans = [];

    for( let i = 0; i < word.length; i++ ){
        
        let aux = word[i];
        ans.push( aux );
        for( let j = i + 1; j < word.length; j++ ){

            aux += word[j];
            ans.push( aux );
            
        }

    }

    // Retorno em array de combinações;
    return ans;

    // Retorno em string
    // return ans.join(",");

}

console.log( generateAllCombinations( "dog" ) );
console.log( generateAllCombinations( "abcd" ) );