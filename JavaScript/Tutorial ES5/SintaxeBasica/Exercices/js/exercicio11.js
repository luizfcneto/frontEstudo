/*
    Descrição:
        Fazer uma função que receba como parametro uma temperatura em celcius
        retornar a conversão de temperatura de celcius para fahrenheit
        Formula:
            c / 5 = ( f - 32 )/9
        

*/

//Minha Solução:
function celiciusToFahrenheit( celcius ){
    return ( ( celcius / 5 ) * 9 ) + 32;
}

function fahrenheitToCelcius( faren ){
    return ( ( faren - 32 ) / 9 ) * 5;
}

console.log( celiciusToFahrenheit( 60 ) );
console.log( fahrenheitToCelcius( 45 ) );