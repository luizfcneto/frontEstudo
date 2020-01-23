/*
    Descrição:
        Escrever uma função em js que recebe como parametro um objeto
        Imprimir o tamanho do objeto

Object.hasOwnProperty:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
    https://www.geeksforgeeks.org/javascript-hasownproperty-method/

Solução:
*/

function consoleLength( obj ){
    console.log( "Parametro Fornecido:" );
    console.log( obj );

    let size = 0;

    // Percorrer o objeto e adicionar a quantidade de atributos que pertencem ao objeto
    for( let prop in obj ){
        if( obj.hasOwnProperty( prop ) ){
            size++;
        }
    }

    console.log( "tamanho do objeto: " + size );

}

let student = {
    firstName: "Luiz Fernando",
    lastName: "Neto",
    age: 23
}

consoleLength( student );