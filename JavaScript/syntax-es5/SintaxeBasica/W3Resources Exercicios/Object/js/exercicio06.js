/*
    Descrição:
        Fazer uma função que recebe como parametro um array de numeros
        Implementar uma ordenção Bubble Sort e retornar o array resultante

    Exemplo:
        entrada: [ 6, 4, 0, 3, -2, 1 ]
        saida: [ -2, 0, 1, 3, 4, 6 ]

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-6.php
*/

function sortByBubble( arr ){

    console.log( "Parametro fornecido " + arr );   

    let ans = arr;

    for( let j = 0; j < ans.length; j++ ){
        for( let i = 0; i < ans.length - 1; i++ ){
            
            if( ans[i] > ans[ i + 1 ] ){
                let aux = ans[ i + 1 ];
                ans[ i + 1 ] = ans[i];
                ans[i] = aux;

            }else 
                continue;
            
        }
    }
         
    return ans;   
}


let array = [ 6, 4, 0, 3, -2, 1 ];
console.log( sortByBubble( array ) );