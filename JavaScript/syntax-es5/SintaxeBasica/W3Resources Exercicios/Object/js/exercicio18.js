/*
    Descrição:
        Fazer uma função em js que recebe como parametro um valor
        Checar se esse valor fornecido é um elemento DOM.

DOM.nodeType:
    https://www.w3schools.com/jsref/prop_node_nodetype.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

DOM.createElement:
    https://www.w3schools.com/jsref/met_document_createelement.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-18.php
*/

function checkDomElement( obj ){
    console.log( "Parametro Fornecido: " )
    console.log( obj );

    // nodeType = 1 -> Tipo elemento html
    console.log( obj.nodeType );
    if( obj.nodeType === 1 ){
        return true;
    }else{
        return false;
    }
    // let type = Object.prototype.toString.call( obj );
    // if( type[1].search( "HTML" ) !== -1 || type[1].search( "Element" ) ){
    //     return true;
    // }else{
    //     return false;
    // }
    
}
let domP = document.createElement("p");
let dom = document;
let domLi = document.createElement("li");

// console.log( Object.prototype.toString.call( domP ) );
// console.log( typeof ( domP ) );

// console.log( Object.prototype.toString.call( dom ) );
// console.log( typeof ( dom ) );

console.log( checkDomElement( dom ) );
console.log( checkDomElement( domLi ) );
console.log( checkDomElement( domP ) );
