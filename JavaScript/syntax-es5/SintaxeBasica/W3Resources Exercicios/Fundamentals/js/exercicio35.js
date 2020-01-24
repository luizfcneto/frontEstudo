/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string e um char ( string ) especifico  
        verificar se o char ( string ) especifico está localizado na string entre 
        as posicoes 1 ao 3, caso esteja retornar true, senão false.


Solução:        
*/

//Minha Solução:
function isThere( str, letter ){
    for( let i = 1; i < 4; i++ ){
        if( str[i] === letter ){
            return true;
        }
    }
    return false;

}

console.log( isThere( "teste", "e" ) );
console.log( isThere( "banana", "b" ) );
console.log( isThere( "desenvolvedor", "n" ) );
console.log( isThere( "desenvolvedor", "e" ) );
