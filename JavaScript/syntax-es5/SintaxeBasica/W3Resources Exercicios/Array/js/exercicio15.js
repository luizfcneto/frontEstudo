/*
    Descrição:
        Fazer um programa em js que recebe como parametro um array de string
        com nome de cores e um outro array com a posição ordinal 
        ( em ingles - 1"st", 2"nd", 3"rd" ).
        Exibir a ordem de cores do array no formato:

        "1st choice is cor1"
        "2nd choice is cor2"
        "3rd choice is cor3"
        ...

    Exemplo:
        entradas:   cores = [ "azul", "verde", "vermelho", "amarelo", "preto" ]
                    ordem = [ "th", "st", "nd", "rd" ]
        saida:
            "1st choice is azul"
            "2nd choice is verde"
            "3rd choice is vermelho"

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-15.php
*/

function displayColorOrder( color, order ){
    console.log( "Parametros fornecidos: " + color + " & " + order );
    let orders = [];
    if( order.lentgh > 5 )  console.log( order );

    for( let i = 0; i < order.length; i++ ){
        if( order[i] === "st" ){
            orders[0] = order[i];
        }else if( order[i] === "nd" ){
            orders[1] = order[i];
        }else if( order[i] === "rd" ){
            orders[2] = order[i];
        }else{
            orders[3] = order[i]
        }
    }

    for( let i = 0; i < color.length; i++ ){
        
        if( ( i + 1 ) % 10 === 1 ){
            console.log( ( i + 1 ) + orders[ i % 10 ] + " choice is " + color[i] );

        }else if ( ( i + 1 ) % 10 === 2 ){
            console.log( ( i + 1 ) + orders[ i % 10 ] + " choice is " + color[i] );

        }else if( ( i + 1 ) % 10 === 3 ){
            console.log( ( i + 1 ) + orders[ i % 10 ] + " choice is " + color[i] );
            
        }else{
            console.log( ( i + 1 ) + orders[3] + " choice is " + color[i] );
        }   
    }
}


displayColorOrder( [ "azul", "verde", "vermelho", "amarelo", "preto" ], [ "th", "st", "nd", "rd" ] );
displayColorOrder( [ "azul", "verde", "vermelho", "amarelo", "preto", "esmeralda", "rosa", "magenta", "salmão", "marrom", "laranja", "cinza", "branca"  ], [ "th", "st", "nd", "rd" ] );