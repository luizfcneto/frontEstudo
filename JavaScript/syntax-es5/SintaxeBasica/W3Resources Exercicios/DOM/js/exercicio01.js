/*
    Descrição:
        Fazer uma função em js que seja executada quando o evento de clicar no botão
        com o id="jsstyle" faça a modificação no estilo do paragrafo do id="text"
        modificar o estilo do paragrafo no HTML

DOM:
    https://www.w3schools.com/js/js_htmldom.asp

    https://www.w3schools.com/js/js_htmldom_css.asp
    https://www.w3schools.com/jsref/prop_html_style.asp
    https://www.w3schools.com/jsref/dom_obj_style.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-1.php
*/

function alteraEstiloP(){
    let p = document.getElementById("text");
    
    // Alterando estilo de cor da fonte do elemento p do id "text"
    p.style.color = "red";

    // Alterando estilo de tamanho da fonte do elemento p do id "text"
    p.style.fontSize = "24px";

    // Alterando o estilo da fonte do elemento p do id "text"
    p.style.fontStyle = "italic";
    // p.style.fontStyle = "oblique";
    // p.style.fontStyle = "initial";

    console.log( "Botão Clicado" );
}

