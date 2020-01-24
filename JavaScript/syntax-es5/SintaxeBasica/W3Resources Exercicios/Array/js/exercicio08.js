/*
    Descrição:
        Fazer uma função em js que receba como parametro um array
        retornar o elemento deste array que é mais frequente.

    exemplo: 
        entrada: [ 1, 2, 2, 5, 4, 1, 1, 2, 4, 5, 7, 1 ]
        saida: 1, repete: 4 vezes

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php
*/

function mostFrequent( arr ){
    console.log( "Parametro fornecido: " + arr );
    arr.sort();
    let counters = [ 0 ];
    let counter = 0;
    let element = arr[0];

    //cria um outro array, contendo a quantidade de vezes que cada letra repetiu
    for( let i = 0; i < arr.length; i++ ){
        if( element !== arr[i] ){
            element = arr[i];
            counters.push( 1 );
            counter++;
        
        }else{
            counters[ counter ]++;
        }

    }

    let ans = 0;
    let aux = counters[0];
    let qtd = 0;
    let resp = 0;

    //verifica qual o maior numero de repetição de letras no array de repetições
    for( let i = 0; i < counters.length; i++ ){
        if( aux < counters[i] ){
            aux = counters[i];
            ans = i;
            qtd = counters[i];        
        
        }else if( aux === counters[i] && i === 0 ){
            qtd = counters[i];
        }

    }

    //verificando qual a letra correspondente à maior repetição
    for( let i = 0; i < ans; i++ ){
        resp += counters[i];
    }
    console.log( "digito: \'" + arr[ resp ] + "\' repetiu: " + qtd + " vezes" );
    return arr[resp];
}


console.log( mostFrequent( [ 1, 2, 2, 5, 4, 1, 1, 2, 4, 5, 7, 1 ] ) );
console.log( mostFrequent( [ 3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3 ] ) );
console.log( mostFrequent( [ "h", "o", "r", "a", "d", "o", "a", "l", "m", "o", "ç", "o",
            "é", "d", "e", ":", 1, 2, ":", 0, 0, "a", "t", "é", 1, 2, ":", 2, 0, "."] ) );


