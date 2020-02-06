/*
    Descrição:
        Fazer uma função em js que recebe como parametro um objeto
        Retornar todos os valores de todas as propriedades presentes nesse objeto fornecido
        como argumento da função.

Object.prototype.toString.call:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString

typeof:
    https://www.w3schools.com/js/js_datatypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    https://www.w3resource.com/javascript/operators/typeof.php

Array.push:
    https://www.w3schools.com/jsref/jsref_push.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-14.php
*/

function giveMeThePropValues( obj ){
    console.log( "Parametro Fornecido:" );
    console.log( obj );

    if( Object.prototype.toString.call( obj ) !== "[object Object]" || typeof( obj ) !== "object" ){
        return [];
    
    }else{
        let propValues = [];
        for( let key in obj ){
            
            // Objeto dentro do Objeto, 
            // if( typeof( obj[key] ) === "object" ){
            //     for( let keyInside in obj[key] ){
            //         propValues.push( obj[key][keyInside] );
            //     }

            // }else {
                propValues.push( obj[key] );
            // }
    
        }

        return propValues;
        }
    
}

// Objeto Literal
let objeto1 = {
    obj1Atributo1: "atributo1 do objeto1",
    obj1Atributo2: "atributo2 do objeto1",
    obj1Atributo3: "atributo3 do objeto1",
    obj1Atributo4: "atributo4 do objeto1",

    obj1AtributoObj: {
        obj1AtributoObjAtributo1: "Atributo1 do atributo do objeto1"
    },

    calculaSoma(){
        return this.obj1Atributo1 + this.obj1Atributo2 + this.obj1Atributo3 + this.obj1Atributo4;
    }

}

// Objeto função construtora
function Objeto2( atributo1 ){
    this.atributo1 = atributo1;
    this.atributo2 = "atributo2";
    this.atributo3 = "atributo3";

    this.atributoObj2 = {
        atributo1Obj2: "Atributo 1 de um objeto atributo do objeto2"
    }

    function calculaSoma(){
        return this.atributo1 + this.atributo2 + this.atributo3;
    }
}


// Objeto Classe
const Objeto3 = class {

    constructor( atributo1 ){
        this.atributo1 = atributo1;
        this.atributo2 = "atributo2 Obj3";
        this.atributo3 = "atributo3 Obj3";
    }

    obj1AtributoObj = {
        obj1AtributoObjAtributo1: "Atributo1 do atributo(objeto) do objeto 3"
    };

    objeto31 = function(){
        console.log( "Função construtora de um objeto 31 dentro de objeto 3" );
        this.atributoDeObjeto31 = " atributo do objeto 31 dentro de objeto 3";
    }

    calculaSoma(){
        return this.atributo1 + this.atributo2 + this.atributo3;
    }

}

console.log( giveMeThePropValues( objeto1 ) );
console.log( giveMeThePropValues( new Objeto2( "Luiz" ) ) );
console.log( giveMeThePropValues( new Objeto3( "Luiz Neto" ) ) );