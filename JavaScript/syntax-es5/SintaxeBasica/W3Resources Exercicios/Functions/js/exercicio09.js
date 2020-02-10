/*
    Descrição:
        Fazer uma função em js que recebe como parametro um argumento
        retornar o tipo do argumento fornecido.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-9.php
*/

function getType( argument ){
    console.log( "Parametro Fornecido: " + argument );

    return typeof( argument )

}

//String
console.log( getType( "string" ) );

//Numero
console.log( getType( 25 ) );

//Boolean
console.log( getType( true ) );

//Null = Object
console.log( getType( null ) );

//undefined
console.log( getType( undefined ) );


let bola = {
    raio: "",
    circunferencia: "",
    volume: "",
    area: ""
}

//Object
console.log( getType( bola ) );

//Function
console.log( getType( getType ) );

let funcao = function(){
    console.log( "Isso aqui é uma função" );
}

//Function
console.log( getType( funcao ) );
