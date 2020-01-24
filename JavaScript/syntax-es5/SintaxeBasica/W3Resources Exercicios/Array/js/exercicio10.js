/*
    Descrição:
        Fazer uma função em js que recebe como parametro um array
        Fazer com que esse array seja printado na seguinte forma:

    Exemplo:
        entrada: [ [ 1, 2, 1, 24 ], [ 8, 11, 9, 4 ], [ 7, 0, 7, 27 ], [ 7, 4, 28, 14 ], [ 3, 10, 26, 7 ] ]
        saida:
            "linha 0":
                "1"
                "2"
                "1"
                "24"
            "linha 1":
                ...

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-10.php
*/

function printMatrix( arr ){
    console.log( "Parametro fornecido: ");
    console.log( arr );

    // console.log( arr.length );
    // console.log( arr[0].length );

    for( let line = 0; line < arr.length; line++ ){
        console.log( "Linha " + line );
        
        for( let col = 0; col < arr[ line ].length; col++ ){
            console.log( "\t" + arr[ line ][ col ] );
        }

    }

}

printMatrix( [ [ 1, 2, 1, 24 ], [ 8, 11, 9, 4 ], [ 7, 0, 7, 27 ], [ 7, 4, 28, 14 ], [ 3, 10, 26, 7 ] ] );

printMatrix( [ [ 1 ],  [ 1, 2 ],  [ 1, 2, 3 ] ] );