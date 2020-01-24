/*************ARRAYS*************
 *  Autor: Luiz Fernando ( Luizfcneto )
 *  Email: luizfcneto123@gmail.com
 *  
 */

//Formas de inicializar um array = vetor
var nomesM = [ "Luiz", "João", "Fernando", "Leandro", "Mario" ];
var nomesF = new Array( [ "Luiza", "Joana", "Fernanda", "Leandra", "Maria" ] );
 
console.log( nomesF );

console.log( nomesM );

var luiz = [ "estudante", "gente fina", "desenvolvedor", "red", "black", 23, true ];

//alterando o elemento do indíce 1:
luiz[0] = "estudante de BSI";

console.log( luiz );

//imprimindo um elemento específico:
console.log( luiz[ luiz.length - 1  ] );

//imprimindo todos os elementos:
for ( i = 0; i < luiz.length; i++ ){
    console.log ( luiz[i] );
}

console.log( luiz );

var elementoRetiradoFinal = luiz.pop();
console.log( elementoRetiradoFinal );

elementoRetiradoFinal = luiz.pop();
console.log( elementoRetiradoFinal );

//método push:
luiz.push( "Elemento inserido com Push" );
console.log( luiz );

luiz.push( 23 );
console.log( luiz );

//método shift:
var elementoRetiradoInicio = luiz.shift();
console.log( elementoRetiradoInicio );

console.log( luiz );
//método unshift:
luiz.unshift( "Elemento inserido com método unshift" );
console.log( luiz );

//alterando elemento utilizando o método indexOf:
luiz[ luiz.indexOf( "red" ) ] = "Fui inserido no lugar de red, utilizando método indexOf";
console.log( luiz );