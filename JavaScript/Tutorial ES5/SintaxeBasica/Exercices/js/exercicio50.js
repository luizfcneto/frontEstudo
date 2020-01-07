/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma palavra
        fazer com que a primeira letra dessa palavra seja maiuscula
        retornar a palavra nova.

String:


Solução:
*/
function capitalizeIt( word ){
    console.log( "Palavra fornecida: " + word );

    let ans = "";
    if( word[0] === word[0].toUpperCase() ){
        return word;
    }else{
        ans = word[0].toUpperCase() + word.slice( 1, word.lentgh );
        return ans;
    }

}


console.log( capitalizeIt( "batata" ) );
console.log ( capitalizeIt( "Legumes" ) );
console.log( capitalizeIt( "teste" ) );