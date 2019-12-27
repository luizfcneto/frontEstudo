/*
    Descrição:
        fazer uma função em js que receba como parametro um numero
        verificar se esse numero é multiplo de 3 ou de 7.


Solução: 
*/

//Minha solução:
function doVerify( number ){
    if( number < 0 ){
        return "Numero invalido";
    
    }else{

        if( number % 3 === 0 && number % 7 === 0 ){
            return "Multiplo de 3 e 7";
        
        } else if( number % 3 === 0 ){
            return "Multiplo de 3";
        
        } else if( number % 7 === 0 ){
            return "Multiplo de 7";
        
        } else {
            return "Nem de 3, nem de 7";
        }
    }

}

console.log( 15, doVerify( 15 ) );
console.log( 21, doVerify( 21 ) );
console.log( 14, doVerify( 14 ) );
console.log( 29, doVerify( 29 ) );