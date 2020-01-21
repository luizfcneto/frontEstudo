/*
    Descrição:
        Fazer uma função em js que quando o botão do formulário seja clicado
        seja executado.
        Remover o item da lista dropdown cujo id = "colorSelect" esteja selecionado

HTML DOM method getElementById:
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

HTML DOM property children:
    https://www.w3schools.com/jsref/prop_element_children.asp

HTML DOM property value:
    https://www.w3schools.com/jsref/prop_select_value.asp

HTML DOM property childElementCount:
    https://www.w3schools.com/jsref/prop_element_childelementcount.asp

HTML DOM method removeChild:
    https://www.w3schools.com/jsref/met_node_removechild.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    https://www.geeksforgeeks.org/html-dom-removechild-method/

HTML DOM property selectedIndex:
    https://www.w3schools.com/jsref/prop_select_selectedindex.asp
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-8.php
*/

function removeColor(){

    // Elemento do select
    let select = document.getElementById( "colorSelect" );
    
    // Printando os atributos de select
    console.log( select.getAttributeNames() );

    // Printando o valor selecionado registrado no select
    console.log( select.value );

    // Quantidade de elementos filhos do elemento select
    console.log( select.childElementCount );

    // Printando no console os elementos filhos de select
    for( let i = 0; i < select.childElementCount; i++ ){
        console.log( select.children[i].innerHTML );
    }
    
    // Percorrendo o vetor de elementos option para encontrar o que foi selecionado e remove-lo
    for( let i = 0; i < select.childElementCount; i++ ){
        if( select.children[i].value === select.value ){
            console.log( "encontrou o elemento option selecionado: " + select.children[i].value );
            select.removeChild( select.children[i] );
        }
        // console.log( select.removeChild( select.children[i] ) );

    }

}

function removeColor2(){

    // Elemento Select
    let select = document.getElementById( "colorSelect" );

    let counter = select.childElementCount;

    console.log( "Index do elemento Option Selecionado: " + select.selectedIndex );
    console.log( "Conteudo do elemento Option selecionado: " + select.children[ select.selectedIndex ].value );
    select.remove( select.selectedIndex );
    
    if( select.childElementCount === counter - 1 ){
        console.log( "Elemento selecionado removido" );
    }
    

}