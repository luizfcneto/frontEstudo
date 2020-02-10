/*
    Descrição:    
        Fazer uma função em js que recebe como parametro um numero
        Esse numero representa o tamanho ( n ) de uma matriz quadrada
        Retornar essa matriz identidade.

    Exemplo: 
        entrada: 1
        saida: [ 1 ]

        entrada: 2 
        saida:  [ 1  0 ]  
                [ 0  1 ]    

        entrada: 4
        saida:  [ 1  0  0  0 ]
                [ 0  1  0  0 ]
                [ 0  0  1  0 ]
                [ 0  0  0  1 ]

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-10.php
*/          
function identityMatrix( n ){
    console.log( "Parametro Fornecido: " + n );
    if( n <= 0 ){
        console.log( "Ta me trollando, RAPA?! " );
        return -1;
    }else{

        //Inicializando uma matriz;
        let matrix = [];
        for( let i = 0; i < n; i++ ){
            matrix[i] = new Array( n );
        }

        //Populando a matriz identidade.
        for( let i = 0; i < n; i++ ){
            
            for( let j = 0; j < n; j++ ){
                if( i === j ){
                    matrix[i][j] = 1;
                }else{
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix;
    }

}

console.log( identityMatrix( 2 ) );
console.log( identityMatrix( 1 ) );
console.log( identityMatrix( 10 ) );