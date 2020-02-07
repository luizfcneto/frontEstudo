/*  
    Descrição:
        Fazer uma função em js que recebe um objeto como parametro 
        A função deve fazer uma cópia de um objeto fazendo uma inversão entre 
        atributos e valores do objeto fornecido, trocando os atributos pelo seu valor 
        e no lugar do valor, colocar o atributo.

Object.prototype.toString.call:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString

typeof:
    https://www.w3schools.com/js/js_datatypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    https://www.w3resource.com/javascript/operators/typeof.php

Object.defineProperty:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-16.php
*/

function inverteObjeto( obj ){
    console.log( "Parametro Fornecido: " );
    console.log( obj );

    if( ( Object.prototype.toString.call( obj ) === "[object Object]" && typeof( obj ) === "object" ) 
    || Object.prototype.toString.call( obj ) === "[object Function]" && typeof( obj ) === "function" ){
        let newObj = {};

        for( let key in obj ){
            let newProp = obj[key];
            Object.defineProperty( newObj, newProp, {
                value: key
            } );
        }
        return newObj;
        
    }else{
        console.log( Object.prototype.toString.call( obj ) );
        return {};
    }
}

// Objeto formato Literal:
let Objeto1 = {
    atributo1: "valor atributo 1",
    atributo2: "valor atributo 2",
    atributo3: "valor atributo 3",

    atributoObj: {
        atributoObj1: "valor atributoObj1",
        atributoObj2: "valor atributoObj2",
        atributoObj3: "valor atributoObj3"
    }
    
}    

// Objeto formato função
function Objeto2(){
    this.atributo1 = "valor atributo 1";
    this.atributo2 = "valor atributo 2";
    this.atributo3 = "valor atributo 3";

    this.atributoObj = {
        atributoObj1: "valor atributoObj1",
        atributoObj2: "valor atributoObj2",
        atributoObj3: "valor atributoObj3"
    }

    function calculaSoma(){
        return this.atributo1 + this.atributo2 + this.atributo3;
    }

    calculaSomaDois = function(){
        return this.atributo1 + this.atributo2;
    }

}

// Objeto formato função construtora
let Objeto3 = function(){
    this.atributo1 = "valor atributo 1";
    this.atributo2 = "valor atributo 2";
    this.atributo3 = "valor atributo 3";

    this.atributoObj = {
        atributoObj1: "valor atributoObj1",
        atributoObj2: "valor atributoObj2",
        atributoObj3: "valor atributoObj3"
    }

    function calculaSoma(){
        return this.atributo1 + this.atributo2 + this.atributo3;
    }

    calculaSomaDois = function(){
        return this.atributo1 + this.atributo2;
    }

}

// Estrutura da Classe do Objeto 4
let Objeto4 = class {

    // Função já existente em prototype, responsável pela construção do objeto na estrutura Objeto4
    constructor(){
        this.atributo1 = "valor atributo 1";
        this.atributo2 = "valor atributo 2";
        this.atributo3 = "valor atributo 3";

        this.atributoObj = {
            atributoObj1: "valor atributoObj1",
            atributoObj2: "valor atributoObj2",
            atributoObj3: "valor atributoObj3"
        }
    }

    calculaSomaDois = function(){
        return this.atributo1 + this.atributo2;
    }

    //Essa nomenclatura já adiciona o método no prototype da classe
    calculaSoma(){
        return this.atributo1 + this.atributo2 + this.atributo3;
    }

}




console.log( inverteObjeto( Objeto1 ) );
console.log( inverteObjeto( Objeto2 ) );
console.log( inverteObjeto( Objeto3 ) );
console.log( inverteObjeto( new Objeto4 ) );
