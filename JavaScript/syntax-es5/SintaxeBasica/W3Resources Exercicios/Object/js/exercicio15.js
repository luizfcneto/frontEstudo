/*
    Descrição:
        Fazer uma função em js que recebe como parametro um objeto
        retornar esse objeto no formato de lista mapeada ( chave, valor )

Object.prototype.toString.call:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString

typeof:
    https://www.w3schools.com/js/js_datatypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
    https://www.w3resource.com/javascript/operators/typeof.php

Array.push:
    https://www.w3schools.com/jsref/jsref_push.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    
Object.getOwnPropertyNames:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
    https://www.freecodecamp.org/forum/t/how-to-use-the-javascript-object-getownpropertynames-get-own-property-names-explained-with-examples/19387


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-15.php
*/

function mapeiaEsseObjeto( obj ){
    console.log( "Parametro Fornecido: " );
    console.log( obj );

    if( Object.prototype.toString.call( obj ) !== "[object Object]" || typeof( obj ) !== "object" ){
        return [];
    
    }else{
        // Array de atributos/propriedades do objeto:
        let arrProp = Object.getOwnPropertyNames( obj );
        console.log( arrProp );

        let matrizMap = [];

        // Array de array ( de duas posições: chave, valor )
        for( let key in obj ){
            let map = [];
            map.push( key, obj[key] );
            matrizMap.push( map );
        }
        
        // Array de objetos ( atributo chave, conteudo valor)
        // for( let key in obj ){
        //     let otherObj = {};

        //     Object.defineProperty( otherObj, key, {
        //         value: obj[key]
        //     });
            
        //     // console.log( otherObj );
        //     matrizMap.push( otherObj );

        // } 
        
        return matrizMap;
    }

    // Objeto formato Literal:
    let Object1 = {
        atributo1: "atributo 1 Object 1",
        atributo2: "atributo 2 Object 1",
        atributo3: "atributo 3 Object 1",

        atributoObj: {
            atributoObj1: "atributoObj1",
            atributoObj2: "atributoObj2",
            atributoObj3: "atributoObj3"
        }
    }    
}

console.log( mapeiaEsseObjeto( Object1 ) ); 