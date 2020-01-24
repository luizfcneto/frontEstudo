/*
    Descrição:
        Fazer uma função que aceite uma linha, ou coluna para identificar determinada
        célula da tabela e uma string contendo o conteudo novo que a celula deve possuir
        e ao disparar o evento de clicar no botão a função deve alterar o conteudo 
        da célula.  

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-6.php
*/

// Minha Solução:
function changeContent1(){
    // console.log( rowOrColumn );
    // console.log( string );

    let string = prompt( "Escreva a alteração de conteudo que deseja realizar: " );
    console.log( "Texto a ser inserido: " + string );

    let table = document.getElementById( "myTable" );
    // console.log( table );

    
    //Gerar um numero aleatório para representar a linha e para a coluna
    //Gerando numeros aleatorios baseados nos limites próprios
    let rowEdit = table.lastElementChild.childElementCount;
    rowEdit = generateNumber( rowEdit );

    let cellEdit = table.lastElementChild.lastElementChild.childElementCount;
    cellEdit = generateNumber( cellEdit );
    console.log( "Modificar linha: " + rowEdit, "celula: " + cellEdit );
    
    // console.log( table.lastElementChild.children );

    let row = findRowPosition( rowEdit, table );
    let cell = findCellPosition( cellEdit, row );

    // Modificando texto atual para texto novo
    cell.innerHTML = string;

}

function generateNumber( limit  ){
    return Math.trunc( Math.random() * limit ); 
}

function findRowPosition( cL, table ){
    if( table.lastElementChild.childElementCount < 1 ){
        return "Tabela vazia"
    
    }else{
        // console.log( table.lastElementChild.children[ cL ], cL );
        return table.lastElementChild.children[ cL ];
    }

}

function findCellPosition( cC, row ){
    if( row.childElementCount < 1 ){
        return "Linha Vazia";

    }else{
        return row.children[ cC ];
    }

}


// Outra Solução:
function changeContent2(){
    let rowNumber = window.prompt( "Escolha uma linha entre 0 e 2", "0" );
    let cellNumber = window.prompt( "Escolha uma coluna entre 0 e 2", "1" );

    let conteudo = window.prompt( "Informe o conteudo novo da celula" );
    let posicao = document.getElementById("myTable").rows[ parseInt( rowNumber, 10 ) ].cells;
    posicao[ parseInt( cellNumber, 10 ) ].innerHTML = conteudo;

}