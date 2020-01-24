/*  
    Descrição:
        Fazer uma função em js que exiba uma imagem aleatoria ( ao clicar em um botão )
        da seguinte lista:
            href: "https://i.picsum.photos/" + id + "/" + height + "/" + width;

HTML DOM method getElementById:
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

HTML DOM create element:
    https://www.w3schools.com/jsref/met_document_createelement.asp

HTML DOM appendChild:
    https://www.w3schools.com/jsref/met_node_appendchild.asp

HTML DOM style Object properties:
    https://www.w3schools.com/jsref/dom_obj_style.asp
    https://www.w3schools.com/jsref/prop_html_style.asp
    https://www.w3schools.com/js/js_htmldom_css.asp

MATH.trunc:
    https://www.w3schools.com/jsref/jsref_trunc.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

MATH.random:
    https://www.w3schools.com/jsref/jsref_random.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-11.php
*/

let divFlag = 1;
function displayRandomImage(){
    console.log( divFlag );
    // Pegando elmemento html DIV onde criaremos img
    let div1 = document.getElementById( "divImg1" );
    // console.log( div1 );

    let div2 = document.getElementById( "divImg2" );
    
    // Criando elemento HTML <img> e adicionando na div respectiva
    if( div1.childElementCount === 0 ){
        let img = document.createElement( "img" );

        img.alt = "Imagem gerada Aleatoriamente";
        // console.log( img.alt );

        div1.appendChild( img );
    }
    
     // Criando elemento HTML <img> e adicionando na div respectiva
    if( div2.childElementCount === 0 ){

         // Criar elemento html <img> na primeira div
        let img = document.createElement( "img" );

        img.alt = "Imagem gerada Aleatoriamente";
        console.log( img.alt );
 
        div2.appendChild( img );
    }
    console.log( "alterando a div: " + divFlag );
    let div = document.getElementById( "divImg" + divFlag );
    let img = div.lastElementChild;

    img.src = randomImage();
    img.style.width = Math.trunc( Math.random() * 500 ) + 100 + "px";
    img.style.height = Math.trunc( Math.random() * 500 ) + 100 + "px";
    
    divFlag = alteraDiv( divFlag );

}

function randomImage(){
    return list[ Math.trunc( Math.random( ) * list.length ) ]; 
}

function alteraDiv( divNumber ){
    if( divNumber === 1 )   return 2;
    else return 1;
}

let list = [
    "https://picsum.photos/id/1000/500/500",
    "https://picsum.photos/id/1001/500/500",
    "https://picsum.photos/id/1002/500/500",
    "https://picsum.photos/id/1003/500/500",
    "https://picsum.photos/id/1004/500/500",
    "https://picsum.photos/id/1005/500/500",
    "https://picsum.photos/id/1006/500/500" 
];