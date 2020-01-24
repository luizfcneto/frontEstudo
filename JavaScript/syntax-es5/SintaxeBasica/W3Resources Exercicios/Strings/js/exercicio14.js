/*
    Descrição:
        Fazer uma função em js que recebe como parametro duas strings, e um numero.
        Sendo uma frase, uma palavra e um numero representando a posição.
        Adicionar essa palavra na frase na posição dada
        Retorar nova string.

        Obs:    Caso não fornecam o numero, inserir palavra no começo
                Caso não fornecam a palavra, retornar a frase original

    Exemplo:
        entrada: "estou praticando", "javascripto"
        saida: "javascripto estou praticando"

        entrada: "estou praticando", "javascripto", 16
        saida: "estou praticando javascripto"

String.slice:
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-14.php
*/

function insert( str, word, position ){
    console.log( "Parametros Fornecidos: " + str + ", " + word + " & " + position );

    if( word === undefined ){
        return str;
    
    }else if( str === undefined ){
        return "";
    
    }else if( position === undefined ){
        return word + " " + str;
   
    }else{
        if( position === 0 ){
            return word + " " + str;
        
        }else if( position >= str.length ){
            return str + " " + word;
        
        }

        let part1 = str.slice( 0, position );
        let part2 = str.slice( position, str.length );

        return part1 + " " + word + " " + part2;
    
    }
}

console.log( insert( "estou praticando", "javascripto" ) );
console.log( insert( "estou praticando", "javascripto", 50 ) );

console.log( insert( "Olá", "Mundo" ) );
console.log( insert( "Olá", "Mundo", 2 ) );