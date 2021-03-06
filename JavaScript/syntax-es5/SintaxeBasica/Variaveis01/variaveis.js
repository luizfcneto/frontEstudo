/*********Aula 03*********
    - Coerção de variáveis
    - Aprendendo a concatenação de variáveis
    - Aprendendo a usar o método alert()
    - Aprendendo a atribuir valores de um prompt()
*/

//variavel do tipo string:
var primeiroNome = "Luiz";  
console.log( primeiroNome );

//variavel do tipo string:
var ultimoNome = "Neto";
console.log( ultimoNome );

//variavel do tipo inteiro:
var idade = 23;
console.log( idade );

//variavel tipo string com aspas simples e duplas:
var seLiga = '\"Quanto mais você espera, menos você terá que esperar...\"';
console.log( seLiga );

//variavel tipo boolean:
var flag = true;
console.log ( flag );

//variavel tipo indefinida
var indefinido;
console.log ( indefinido );

indefinido = "agora está definida";
console.log( indefinido );

//variavel do tipo nula:
var teste = null;
console.log( teste );

teste = "agora não está nula";
console.log( teste );

// //criacao de variavel com nomenclatura errada:
// var 5anos = 5;
// console.log( 5anos );
// erro: Uncaught SyntaxError: Invalid or unexpected token


//concatenando Variáveis:
console.log( primeiroNome + " " + ultimoNome + " idade: " + idade );

//testando método novo: alert("string");
alert( primeiroNome + " " + ultimoNome + " idade: " + idade );


//testando o método prompt("String");
var entradaPrompt = prompt( "Qual a sua idade?" ); 


//Soltando um alerta para confirmar a idade atualizada.
alert( primeiroNome + " " + ultimoNome + " idade: " + entradaPrompt );