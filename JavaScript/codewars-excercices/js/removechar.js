/*
    Descrição: 
        Criar uma função para remover o primeiro e o ultimo caractere de uma string dada como parametro.
            regra: Não se preocupar com strings com menos de dois caracteres.

*/

//Minha resolução:
function removeChar( string ){   
    return string.slice( 1, string.length - 1 );
}

var string = prompt( "Escreva uma frase ou palavra: " );
console.log( "Frase/palavra fornecida" +  string );
string = removeChar( string );
console.log( "Resposta: " + string );


//Outras Resoluções:
// function removeChar( str ){
//     return str.slice( 1, -1 );
// }

//const removeChar = str => str.slice(1,-1)