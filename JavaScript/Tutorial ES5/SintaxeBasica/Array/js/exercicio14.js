/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array
        Remover os elementos que estão duplicados e retornar o novo array
    
    Exemplo:
        entrada: [ 1, 2, 5, 5, 1, 4, 9 ];
        saida: [ 1, 2, 5, 4, 9 ]

Array: 
    https://www.w3schools.com/jsref/jsref_filter.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-14.php
*/

function removeDuplicate( arr ){
    let newArray = []; 
    newArray = arr.filter( remove, newArray );
    return newArray;
}

function remove( valorCorrente, index, array ){
    console.log( "Valor Corrente: " + valorCorrente + " Index: " + index + " Array: " + array );
    console.log( "Array novo: " + this );
    
    if( this.length === 0 ){
        this.push( valorCorrente );
        return valorCorrente;
        
    }else{
        let i = 0;
        let repeat = 0;
        for( i = 0; i < this.length; i++ ){
            if( valorCorrente === this[i] ){
                repeat++;
                break;
            }
        }
        if( repeat === 0 ){
            this.push( valorCorrente );
            return valorCorrente;
        }

    }
}

console.log( removeDuplicate( [ 1, 2, 5, 5, 1, 4, 9 ] ) );