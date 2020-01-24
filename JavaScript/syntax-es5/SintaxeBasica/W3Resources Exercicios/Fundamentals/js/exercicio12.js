/*
    Descrição:
        Escrever uma função em javascript que pegue a URL do website ( da pagina carregando )
    

Window Location:
    https://www.w3schools.com/js/js_window_location.asp
    https://www.w3schools.com/js/js_window.asp

DOM navigation:
    https://www.w3schools.com/js/js_htmldom_navigation.asp


Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-12.php
*/

//Minha solução:
function getCurrentURLPage( ){
    //método que retorna ( URL - href ) da página atual.    
    return window.location.href;
}

console.log( getCurrentURLPage() );

// Retorna o nome do dominio do web host
// console.log( window.location.hostname );

// Retorna o caminho e o nome do arquivo da pagina corrente
// console.log( window.location.pathname );

// Retorna o protocolo web utilizado
// console.log( window.location.protocol );

//retorna um novo documento
// console.log( window.location.href );

//retorna a porta utilizada na comunicação feita pela URL
// console.log( window.location.port );

//Outra forma de captar a url através do documento da página web
// console.log( document.URL );