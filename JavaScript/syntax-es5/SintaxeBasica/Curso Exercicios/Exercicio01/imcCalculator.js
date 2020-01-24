/****************IMC-Calculator****************
    Autor: Luiz Fernando
    Email: luizfcneto ( luizfcneto )
    Descrição:
        Esse script irá receber peso e altura de um individuo e irá retornar o indice de massa corporal
        precisamos de:
            - altura: cms
            - peso: kg
        
        O desafio desse script é:
            Comparar IMC de duas pessoas diferentes e verificar printar em uma frase se a primeira tem IMC maior que a segunda

*/

var alturaP;
alturaP = prompt( "Informe a altura do primeiro em metro, apenas o numero: " );

var pesoP;
pesoP = prompt( "Informe o peso do primeiro em kilogramas, apenas o numero:" );
var resultadoP;

resultadoP = pesoP / ( alturaP * alturaP ) ;

console.log( "com altura:" + alturaP + " e peso: " + pesoP + " Seu indice de massa corporal é: " + resultadoP );

var alturaS;
alturaS = prompt( "Informe a altura do segundo em metro, apenas o numero: " );

var pesoS;
pesoS = prompt( "Informe o peso do segundo em kilogramas, apenas o numero:" );
var resultadoS;

resultadoS = pesoS / ( alturaS * alturaS ) ;

console.log( "com altura:" + alturaS + " e peso: " + pesoS + " Seu indice de massa corporal é: " + resultadoS );

var resposta = resultadoP > resultadoS;
console.log( "O primeiro tem um IMC maior que o segundo? \n" + resposta  );


console.log( resultadoP, resultadoS );
/* Instrutor não havia ensinado comandos if e else
// if ( resultado < 18.5 ){
//     console.log( "Abaixo do peso" );
//     alert( "Abaixo do peso" );
// }else if ( resultado >= 18.5 && resultado < 24.9 ){
//     console.log( "Peso normal" );
//     alert( "Peso normal" );

// }else if ( resultado > 25 && resultado < 29.9  ){
//     console.log( "Sobrepeso" );
//     alert( "Sobrepeso" );
// }else if ( resultado > 30 && resultado < 34.9  ){
//     console.log( "Obesidade Grau 1" );
//     alert( "Obesidade Grau 1" );

// }else if ( resultado > 35 && resultado < 39.9 ){
//     console.log( "Obesidade Grau 2" );
//     alert( "Obesidade Grau 2" );

// }else{
//     console.log( "Obesidade Grau 3" );
//     alert( "Obesidade Grau 3" );
// }

*/