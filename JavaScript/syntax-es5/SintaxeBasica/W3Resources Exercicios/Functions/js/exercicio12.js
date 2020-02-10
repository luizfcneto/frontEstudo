/*
    Descrição:
        Fazer uma função que recebe um numero.
        checar se esse numero fornecido é um numero perfeito.
        
        Segundo a definição no wikipedia:
            um numero perfeito é quando a soma de todos os seus
            divisores resultam no mesmo numero.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-12.php
*/

function perfectNumber( num ){
    console.log( "Parametro Fornecido: " + num );

    let divisores = getDivisores( num );
    console.log( divisores );
    let sum = 0;

    for( let i = 0; i < divisores.length; i++ ){
        sum += divisores[i];
    }

    if( sum === num ){
        return true;

    }else{
        return false;
    }
}

function getDivisores( num ){
    let ans = [];   

    for( let i = 1; i < num; i++ ){
        if( num % i === 0 ){
            ans.push( i );
        }
    }
    return ans;
}

// 6 é um numero perfeito.
console.log( perfectNumber( 6 ) );

// 28 é um numero perfeito.
console.log( perfectNumber( 28 ) );

// 8128 é um numero perfeito
console.log( perfectNumber( 8128 ) );

console.log( perfectNumber( 10 ) );
console.log( perfectNumber( 35 ) );
console.log( perfectNumber( 50 ) );