/*
    Descrição:
        Fazer uma função em js que receba como parametro um objeto
        Retornar todos os nomes dos atributos objetos dentro desse argumento e 
        que foram herdados para ele.

Object.prototype.toString.call:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString

typeof:
    https://www.w3schools.com/js/js_datatypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    https://www.w3resource.com/javascript/operators/typeof.php


Object.getOwnPropertyNames:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
    https://www.freecodecamp.org/forum/t/how-to-use-the-javascript-object-getownpropertynames-get-own-property-names-explained-with-examples/19387

Array.push:
    https://www.w3schools.com/jsref/jsref_push.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-13.php
*/

function giveMeTheProperties( object ){
   
    console.log( "Parametro Fornecido:" );
    console.log( object );

    // Duas formas de verificar se é um objeto:
    // console.log( Object.prototype.toString.call( object ) );
    // console.log( typeof( object ) );

    if( Object.prototype.toString.call( object ) !== "[object Object]"  || typeof( object ) !== "object" ){
        return [];
    
    }else{
        let properties =  Object.getOwnPropertyNames( object );

        let ans = [];
        console.log( "Propriedades do objeto fornecido: " );
        for( let i = 0; i < properties.length; i++ ){
            ans.push( properties[i] );
        }
        console.log( ans );

        // console.log( "Propriedades Herdadas" );
        let piObject = object.__proto__;
        piObject = Object.getOwnPropertyNames( piObject );

        for( let i = 0; i < piObject.length; i++ ){
            ans.push( piObject[i] );
        
        }
    
        return ans;
    }
}

// Instanciando um objeto Literal - OBJETO 1
let object1 = {
    propriedade1: "",
    propriedade2: "",
    propriedade3: "",

    NomeObjeto1: {
        atributoObjeto1: "",
        atributoObjeto2: "",
        atributoObjeto3: "",
        atributoObjeto4: ""
    },

    funcaoObjeto1(){
        let variavelQualquer;
    }

}   

// Instanciando um outro objeto, através de função construtor - OBJETO 2
function Objeto2 ( atributo11 ){
    this.atributo1 = atributo11;
    this.atributo2 = atributo11;
    this.atributo3 = atributo11;

    this.objetoDiferente = {
        atributo1ObjetoDiferente: "",
        atributo2ObjetoDiferente: "",
    }

    function funcaoObjeto2(){
        this.atributo1 + this.atributo2;
    }
}

Objeto2.prototype.funcaoQualquer = true;

function funcaoQualquer() {
    console.log( "Uma Funcao Qualquer" );
};

console.log( giveMeTheProperties( object1 ) );
console.log( giveMeTheProperties( new Objeto2( "Atributo" ) ) );