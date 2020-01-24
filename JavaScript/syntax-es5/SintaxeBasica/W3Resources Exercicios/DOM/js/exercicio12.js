/*
    Descrição:
        Fazer uma função em js que ao usuario passar com o mouse em cima de um link específico
        ( hover ) as palavras que estão em negrito em um paragrafo devem ser sublinhadas.

HTML DOM method getElementById:
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

HTML DOM style Object properties:
    https://www.w3schools.com/jsref/dom_obj_style.asp
    https://www.w3schools.com/jsref/prop_html_style.asp
    https://www.w3schools.com/js/js_htmldom_css.asp

HTML DOM property childElementCount:
    https://www.w3schools.com/jsref/prop_element_childelementcount.asp

HTML DOM property children:
    https://www.w3schools.com/jsref/prop_element_children.asp
    https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children


Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-12.php
*/

function sublinhaNegrito(){
    
    let p = document.getElementById( "pNegrito" );
    console.log( p.childElementCount );

    for( let i = 0; i < p.childElementCount; i++ ){
        console.log( p.children[i].textContent.italics() );
        p.children[i].innerHTML = p.children[i].textContent.italics();
        p.children[i].style.color = "red";
    }

}