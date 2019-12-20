/*
    Descrição: 
        - Fazer uma função que receba um array de numeros como parametro;
        - Verificar se a soma de todos os numeros que pertecem ao array resultam em um numero par ou impar
        - Retornar uma string dizendo se é par ou impar ( even ou odd respectivamente ) 

    Exemplo:
        entrada: [ 0, 1, 2 ] => 0 + 1 + 2 = 3 ( 3 é impar )
        saida: "odd";
*/

//Minha Solução:
function oddOrEven( array ){
    let resultado = 0;
    for( let i = 0; i < array.length; i++ ){
        resultado += array[i];
    }

    console.log( resultado );

    if( resultado % 2 === 0 ){
        return "even";

    }else{
        return "odd";
    }

}


let exemplo1 = [ 0 ];

console.log( "entrada: " + exemplo1 );
console.log( "Saida do " + exemplo1 + " " +  oddOrEven( exemplo1 ) ) ;

let exemplo2 = [ 2, 5, 34, 6 ];
console.log( "entrada: " + exemplo2 );
console.log( "Saida do " + exemplo2 + " " +  oddOrEven( exemplo2 ) ) ;

let exemplo3 = [ 0, -1, -3, -4, 27 ];
console.log( "entrada: " + exemplo3 );
console.log( "Saida do " + exemplo3 + " " +  oddOrEven( exemplo3 ) ) ;

//Outras Soluções:
//const oddOrEven = a => a.reduce( ( s ,n ) => s + n,0) % 2 == 0 ? "even" : "odd";