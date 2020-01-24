/*
    Descrição:
        Fazer uma função em js que receba um input como parametro
        checar se esse parametro é uma string e retornar verdadeiro, 
        caso seja, e falso, caso contrario.

Typeof:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof

Object.prototype.toString
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-1.php
*/

//Minha solução:
function verifyString( input ){
    console.log( "Parametro Fornecido" );
    console.log( input );
    if( typeof input === "string" ){
        return true;
    }else{
        return false;
    }
}

//Outra solução:
function verifyString2( input ){
    console.log( "Parametro Fornecido" );
    console.log( input );
    if( Object.prototype.toString.call( input ) === "[object String]" ){
        return true;
    }else{
        return false;
    }

}


console.log( typeof "String" );
console.log( Object.prototype.toString.call( "input" ) );

console.log( verifyString( "String" ) );
console.log( verifyString( 8 ) );
console.log( verifyString( [ "String1", 8 , "String2" ] ) );
console.log( verifyString( [ "String1", "String2", "o" ] ) );

console.log( verifyString2( "String" ) );
console.log( verifyString2( 8 ) );
console.log( verifyString2( [ "String1", 8 , "String2" ] ) );
console.log( verifyString2( [ "String1", "String2", "o" ] ) );