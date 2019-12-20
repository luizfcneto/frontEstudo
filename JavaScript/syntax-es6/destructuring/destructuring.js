/*
    Destructuring
*/

// ES5
// var array = [ "Luiz Fernando", 23 ];
// var nome = array[0];
// var idade = array[1];

// console.log( "variaveis" );
// console.log( nome, idade );
// console.log( "Array" );
// console.log( array[0], array[1] );

// _____________________________________________________________________________________________________________
// ES6
//Array
// let array = [ "Luiz", "Neto", 23 ];
// 1 forma:
// const [ primeiroNome, ultimoNome, idade ] = [ "Luiz", "Neto", 23 ];

// 2 forma:
// const [ primeiroNome, ultimoNome, idade ] = array;
// console.log( primeiroNome, ultimoNome, idade );


// _____________________________________________________________________________________________________________
// Objeto:
// const pessoa = {
//     primeiroNome: "Luiz",
//     ultimoNome: "Neto",
//     idade: 23
// }

//Criando constantes ( variaveis ) e atribuindo a elas com o mesmo valor dos atributos respectivamente.
// const { primeiroNome, ultimoNome, idade } = pessoa;  
// console.log( primeiroNome, ultimoNome, idade );

//a,b e c são undefined. Não existem variaveis a, b, c que são propriedades de pessoa.
// const { a, b, c } = pessoa;
// console.log( a, b, c );

// _____________________________________________________________________________________________________________
//Criando constantes ( variaveis ) com outros nomes ( em ingles, depois do ":" ) e atribuindo a eles os valores contidos nos atributos do objeto pessoa ( o que está antes do ":" ) , respectivamente
// const { primeiroNome: firstName, ultimoNome:lastName, idade: age } = pessoa;
// console.log( firstName, lastName, age );


// _____________________________________________________________________________________________________________
// function calculaAposentadoria( ano ){
//     let idadeF = new Date().getFullYear() - ano;
//     return [ idadeF, 65 - idadeF ];
// }

// const [ idade, aposentadoria ] = calculaAposentadoria( 1996 );
// console.log( idade );
// console.log( aposentadoria );



