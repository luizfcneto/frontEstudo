/*
    Descrição:
        Fazer um programa em js que receba como parametro uma string e retorne 

Event onload:
    https://www.w3schools.com/jsref/event_onload.asp

Eventos:
    https://www.w3schools.com/js/js_events.asp

childNodes:
    https://www.w3schools.com/jsref/prop_node_childnodes.asp

setInterval:
    https://www.w3schools.com/jsref/met_win_setinterval.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    https://www.w3schools.com/js/js_timing.asp
    
getElementById:
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp


Objeto Evento:
    https://www.w3schools.com/jsref/obj_event.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-5.php

*/

//Minha solução:
function rotateString( palavraID ){
    let domNodes = "";
    console.log( palavraID );
    domNodes = document.getElementById( palavraID ).childNodes;
    console.log( domNodes[0], domNodes[0].length );
    
    //domNodes é uma arvore composto por nós é um tipo objeto
    console.log( typeof( domNodes[0] ) );
    //console.log( rotacionar[0].charAt( 10 ) ); dando erro pois rotacionar[0] é um objeto, não String

    //pegando o conteudo do objeto que contem a string: atributo data.
    let novaPalavra = domNodes[0].data;
    console.log( novaPalavra, typeof( novaPalavra ) );

    //Definindo tempo periodico para rotacionar:
    setInterval( ( ) => {
        console.log( novaPalavra );
       
        let ultimoChar = novaPalavra.charAt( novaPalavra.length - 1 );
        console.log( ultimoChar );
        
        novaPalavra = novaPalavra.substr( 0, novaPalavra.length - 1 );
        novaPalavra = ultimoChar + novaPalavra;

    }, ( 8000 ) );

}

