/*
    Descrição:
        Escrever uma função para captar os valores dos atributos do elemento HTML <a>
        ao clicar em um botão.
        os valores dos atributos:
            - href
            - hreflang
            - rel
            - target
            - type
        especificados no <a>

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-4.php
*/

function getAttributesA(){

    let a = document.getElementById("w3r");
    console.log( a.attributes );
    
    for( let i = 0; i < a.attributes.length; i++ ){
        console.log( a.attributes[i] )
        console.log( a.attributes[i].value );

    }

    // Outra forma direta
    // let href = document.getElementById("w3r").href;
    // console.log( href );

    // let hreflang = document.getElementById("w3r").hreflang
    // console.log( hreflang );

    // let rel = document.getElementById("w3r").rel
    // console.log( rel );

    // let target = document.getElementById("w3r").target;
    // console.log( target );

    // let type = document.getElementById("w3r").type;
    // console.log( type );

}