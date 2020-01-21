/*   
    Descrição:
        Fazer uma função em js que seja executada quando o evento de clicar no botão for 
        disparado.
        A função deve contar e exibir os itens de uma lista de drop-down ( vulgo 
        elementos html select-option ) no formato: window.alert

HTML DOM method getElementById:
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

HTML DOM property children:
    https://www.w3schools.com/jsref/prop_element_children.asp

HTML DOM property value:
    https://www.w3schools.com/jsref/prop_select_value.asp

HTML DOM property childElementCount:
    https://www.w3schools.com/jsref/prop_element_childelementcount.asp


Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-9.php
*/

function getOptions(){

    // Elemento html select
    let select = document.getElementById( "mySelect" );
    let optionElements = [];

    for( let i = 0; i < select.childElementCount; i++ ){
        optionElements[i] = select.children[i].value;
    }

    window.alert( "Quantidade de Elementos: " + select.childElementCount 
        + "\nElementos: " + optionElements );


}