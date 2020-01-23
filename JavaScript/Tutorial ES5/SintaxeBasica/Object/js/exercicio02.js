/*
    Descrição:
        Fazer uma função que receba como parametro um objeto e uma propriedade
        fazer com que essa propriedade fornecida como parametro seja removida do 
        objeto.

delete Object.prop:
    https://www.w3schools.com/howto/howto_js_remove_property_object.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/delete

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-2.php
*/

function removeProp( obj, prop ){
   
    //Não funciona no escopo em que o objeto não foi instanciado 
    // console.log( "Parametros fornecidos: " ); 
    // console.log( obj ); 
    // console.log( prop );

    // // Verificar se a propriedade prop existe em obj
    // for( let atributo in obj ){
    //     if( atributo === prop ){
    //         console.log( obj.prop );
    //     }
    // }
    // console.log( obj );

    let Pessoa = {
        nomeInicial: "Luiz",
        nomeFinal: "Neto",
        idade: 23
    }
    console.log( Pessoa );

    // Não é possivel remover uma propriedade utilizando um parametro de string que seja igual ao nome do atributo 
    // let atributo = "nomeFinal";

    // for( let p in Pessoa ){
    //     if( p === atributo ){
    //         delete Pessoa.p;
    //     }
    // }
    
    // unica forma que funciona
    delete Pessoa.idade;
    console.log( Pessoa );

}


// Criando objeto student de forma Literal
let student = {
    name: "Luiz Fernando",
    class: "6 periodo",
    age: 23
}

// Unica forma que funciona
// delete student.class;

removeProp( student, "age" );