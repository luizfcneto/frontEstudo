/*
    Descrição:
        Escrever uma função que possui como parâmetro um array de numeros;
        Retornar a soma do quadrado desses números.

*/

//Minha Resolução:
function squareSum( numbers ){
    var sum = 0;

    for( let i = 0; i < numbers.length; i++ ){
        numbers[i] = numbers[i] * numbers[i];
        sum += numbers[i];
    }
    return sum;

}

let numbers = [];

//Input Numbers
let numbersInput;

numbersInput = prompt( "Informe um número, digite 0 para parar de inserir." );
let cont = 0;

while ( numbersInput !== 0 ){
    numbers[ cont ] = parseInt( numbersInput );    
    cont++;
    numbersInput = prompt( "Informe um número, digite 0 para parar de inserir." );

}

console.log( "Numeros que você forneceu: " + numbers );
let numberAnswer = squareSum( numbers );

console.log( numberAnswer );

//Outras Resoluções:
// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }