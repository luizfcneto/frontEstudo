/*
    Destructuring
*/

// ES5
// var array = [ "Luiz Fernando", 24 ];
// var nome = array[0];
// var idade = array[1];

// console.log( "variaveis: nome e idade" );
// console.log( nome, idade );
// console.log( "Array, posições 0 e 1" );
// console.log( array[0], array[1] );

// _____________________________________________________________________________________________________________
// ES6
//Array
// let array = [ "Luiz", "Neto", 24 ];
// 1 forma:
// const [ primeiroNome, ultimoNome, idade ] = [ "Luiz", "Neto", 24 ];
// let [ primeiroNome, ultimoNome, idade ] = [ "Luiz", "Neto", 24]

// 2 forma:
// const [ primeiroNome, ultimoNome, idade ] = array;
// let [ primeiroNome, ultimoNome, idade ] = array;

// console.log( primeiroNome, ultimoNome, idade );


// _____________________________________________________________________________________________________________
// Objeto:
// const pessoa = {
//     primeiroNome: "Luiz",
//     ultimoNome: "Neto",
//     idade: 24
// }

//Criando constantes ( variaveis ) e atribuindo a elas com o mesmo valor dos atributos respectivamente.
// const { primeiroNome, ultimoNome, idade } = pessoa;  
// console.log( primeiroNome, ultimoNome, idade );

// let { primeiroNome, idade } = pessoa;
// console.log( primeiroNome, idade );

//a,b e c são undefined. Não existem variaveis a, b, c que são propriedades de pessoa.
// const { a, b, c } = pessoa;
// let { a, b, c } = pessoa;
// console.log( a, b, c );

// _____________________________________________________________________________________________________________
//Criando constantes ( variaveis ) com outros nomes ( em ingles, depois do ":" ) e atribuindo a eles os valores contidos nos atributos do objeto pessoa ( o que está antes do ":" ) , respectivamente
// const { primeiroNome: firstName, ultimoNome:lastName, idade: age } = pessoa;
// let { primeiroNome: firstName, ultimoNome: lastName, idade: age } = pessoa;
// console.log( firstName, lastName, age );


// _____________________________________________________________________________________________________________
// function calculaAposentadoria( ano ){
//     let idade = new Date().getFullYear() - ano;

//     // retornando um array;
//     return [ idade, 65 - idade ];
// }

// const [ idade, aposentadoria ] = calculaAposentadoria( 1996 );
// let [ idade, aposentadoria ] = calculaAposentadoria( 1996 );
// console.log( idade );
// console.log( aposentadoria );


// function calculaAposentadoria( ano ){
//     let idade = new Date().getFullYear() - ano;

//     // retornando um objeto;
//     return {
//         idade: idade,
//         aposentadoria: 65 - idade
//     }
// }

// const { idade, aposentadoria } = calculaAposentadoria( 1996 );
// let { idade, aposentadoria } = calculaAposentadoria( 1996 );

// console.log( idade, aposentadoria );

// Não é destructuring.
// let obj = calculaAposentadoria( 1996 );
// console.log( obj );