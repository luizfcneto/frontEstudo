/*
    Descrição:
        Inteiro N, sendo ( N >= 0 );
        Digito D, sendo ( 0 <= D <= 9 ) um inteiro;
        Raiz de todos os numeros K, sendo ( 0 <= K <= N ). 
        Contabilize o numero de digitos D usado para escrever todas as potencias de K.

    Exemplo:
        N = 10.
        D = 1.
        Potencias de K = 0; 1*1; 2*2; 3*3; 4*4; 5*5; 6*6; 7*7; 8*8; 9*9 e 10*10
            k0 = 0;     X
            k1 = 1;     -
            k2 = 4;
            k3 = 9;
            k4 = 16;    -
            k5 = 25;
            k6 = 36;
            k7 = 49;
            k8 = 64;
            k9 = 81;    -
            k10 = 100;  -X

        Como o Digito, D = 1. Contamos quantas vezes nos k's ele apareceu: 
            resposta: 4 vezes
        
        Se D = 0 ( X )
            resposta: 3 vezes

Math.trunc:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

*/

//Minha Solulção:
function nbDig( n, d ){
    let arrayK = [];
    let counterDigits = 0;

    for( let i = 0; i <= n; i++ ){
        arrayK[i] = i*i;
        counterDigits += countDigitNumber( arrayK[i], d );    
    }
    return counterDigits;

}

function countDigitNumber( number, digit ){
    let resto, counter = 0;

    if( number < 10 ){
        if( number === digit ){

            counter++;
            return counter;
        }else{
            return 0;
        }
    }
    while ( Math.trunc( number / 10 ) > 0 ){
        resto = Math.trunc( number % 10 );
        
        if( resto === digit ){
            counter++;
        }
        number = Math.trunc( number / 10 );

    }
    if( number === digit ){
        counter++;
    }

    return counter;
}

console.log( nbDig( 5750, 0 ) );
console.log( nbDig( 11011, 2 ) );
console.log( nbDig(  10, 1  ) );

//Outras Soluções:
/*
function nbDig( n, d ) {
    var res = 0;

    for ( var g = 0 ; g <= n; g++ ){
        var square = ( g * g + "" ).split( "" );
        square.forEach( ( s ) => s == d ? res++ : null )
    }
    return res;
}


function nbDig( n, d ) {
    var str = '';
    for( var i = 0; i <= n; i++ ){
      str += Math.pow( i, 2 );
    }
    return str.split( d ).length - 1;
}
*/