/*
    Descrição: Escrever um programa que encontra o somatório de cada número a partir do 1 até o numero 
        fornecido como parâmetro.
        Regras: Numero forneceido como parâmetro tem de ser positivo e inteiro.

*/

//Minha resolução:
var summation = function ( numero ){
    var resposta = 0;

    if( numero > 0 ){
        for( let i = 1; i <= numero; i++ ){
            resposta += i;
        }
        return resposta;
    }else{
        return resposta;
    }

}

var input = prompt( " Escreva um numero e retornarei o somátorio de 1 até ele " );
console.log( "Voce informou o numero: " + input );

input = summation( input );
console.log( "resposta: " + input );


//Outras Resoluções:
// const summation = n => n * (n + 1) / 2;

//Usando função matemática 
//function summation(num) {
//    return num * (num + 1) / 2;
//}