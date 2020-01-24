/*****************If e Else*****************
    Comando If ( se )
    Comando Else ( senão )

*/
// var primeroNome = Luiz;
var primeiroNome = prompt ( "Informe seu nome:" );

// var estadoCivil = solteiro;
var estadoCivil = prompt( primeiroNome + " Informe seu estado civil:" );

var idade = prompt( primeiroNome + " Informe sua idade:" );

if ( estadoCivil === "casado" ){
    if ( idade < 18 ){
        console.log( primeiroNome + ", liga pra policia, tu é menor! ")
        alert( "Liga pra policia menor! " );
    
    }else {
        console.log( primeiroNome + " está casado." );
        alert( "Então você é casado!" );
    
    }

} else if ( estadoCivil === "viuvo" ){
    if ( idade < 18 ){
        console.log ( primeiroNome + ", liga pra policia, tu é menor, nem tinha que ter casado! tu é menor!s")
        alert ( "liga pra policia menor!" );
    
    }else {
        console.log( primeiroNome + " está viuvo." );
        alert( "Então você é viuvo..." );
    }

} else {
    if ( idade < 18 ){
        console.log ( primeiroNome + " está solteiro. Novinho ainda! " + idade );
        alert( "Então quer dizer que tu ta soltinho? hm... e ainda é novinho!");    
        
    } else {
        console.log ( primeiroNome + " está solteiro. ");
        alert( "Então quer dizer que tu ta soltinho? hm... " );
    }
}


// Curiosidade do "===":
if ( true == 'true' );  // aqui vai dar false
console.log ( true == 'true' );

if ( true == '1' );     // aqui vai dar true
console.log ( true == '1' );

if ( true == true );    // aqui vai dar true
console.log ( true == true );

if ( true === 'true' ); // aqui vai dar false, objetos diferentes mas com "valor" igual
console.log ( true === 'true' );

if ( true === '1' );    // aqui vai dar false, objetos diferentes mas com "valor" igual
console.log ( true === '1' );

if ( true === true );   // aqui vai dar true
console.log ( true === true );

if ( true === 1 );      // aqui vai dar false, objetos diferentes, mas com "valor" semantico igual para outras linguagens ( c, java );
console.log ( true === 1 );

if ( null == null );    // aqui vai dar true;
console.log( null == null ); 

if ( null === null );   // aqui vai dar true;
console.log( null === null );

if ( "1" == 1 );        // aqui vai dar true;
console.log ( "1" == 1 );

if ( "1" === 1 );       //aqui vai dar false;
console.log( "1" === 1 );

//treinando condicoes com ternarios:

( idade >= 18 ) ? console.log( primeiroNome + " pode beber ") : console.log ( primeiroNome + " Não pode beber!" );
var maiorDeIdade = idade >= 18 ? true : false;      // não necessitava usar ternario.
console.log( maiorDeIdade );