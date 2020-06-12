/*
    Blocks and IFFEs
*/

//ES5 IFEE, função privada
( function() {
    var numVar1 = 2;
    var numVar2 = 3;
    console.log( "Usando var ES5: " );
    console.log( numVar1 + numVar2 );

})();

//Erro, numVar1 e numVar2 não estão declarados.
// console.log( numVar1 + numVar2 );

//ES6, mesma função acima
{
    let numLet1 = 3;
    let numLet2 = 1;
    // var numVar3 = 15
    console.log( "Usando Let ES6: " );
    console.log( numLet1 + numLet2 );
}

//Erro, numLet1 e numLet2 não estão declarados.
// console.log( numLet1 + numLet2 );

//Se utilizasemos o numVar3 pelo comando abaixo, não é privado, pois o escopo de numVar3 é da função toda, não somente do bloco como os de Let
// console.log( numVar3 );
