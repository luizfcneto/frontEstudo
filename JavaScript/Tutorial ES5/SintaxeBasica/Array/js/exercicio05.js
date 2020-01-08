/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array de palavras
        retornar esse array no formato de string

Array:
    https://www.w3schools.com/jsref/jsref_join.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-5.php
*/

// Solução com iteração
function arrayToString( arr ){
    console.log( "Parametro fornecido: " + arr );
    
    switch( 1 ){
        case 1:
            let ans = "";
            for( let i = 0; i < arr.length; i++ ){
                if( i === 0 ){
                    ans += arr[i]; 
                } else {
                    ans += "+" + arr[i];
                }
            }
            return ans;

        case 2: 
            return arr.toString();

    }

}

//Solução com regex
function arrayToString2( arr ){
    console.log( "Parametro fornecido: " + arr );

    switch( 1 ){
        case 1: 
            let ans = arr.toString();
            return ans.replace( /,/g, "+");

        case 2:
            return arr.toString();
    }

}


// Solução com Array.join();
function arrayToString3( arr ) {
    console.log( "Parametro fornecido: " + arr );

    switch( 1 ){
        case 1:
            return arr.join("+").toString();
    
        case 2: 
            return arr.toString();
    }
}

console.log( arrayToString( ["pizza", "é", "melhor", "que", "peixe cru" ] ) );
console.log( arrayToString2( ["hamburguer", "é", "melhor", "que", "salada" ] ) );
console.log( arrayToString3( ["banana", "é", "melhor", "que", "maçã" ] ) );


