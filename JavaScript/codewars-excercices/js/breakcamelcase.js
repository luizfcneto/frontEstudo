/*
    Descrição:
        Fazer um método que recebe uma string
        essa string é uma palavra escrita no formato camelCase
        retornar a string colocando um espaço entre as palavras tirando o camelCase

    Exemplo:
        entrada: 'camelCase'        
        saida: 'camel Case'

String:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt


Unicode:
    https://en.wikipedia.org/wiki/List_of_Unicode_characters
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

*/


//Minha Solução:
function solution( string ){
    let espaco = " ";
    let begin = "";
    let end = "";
    let i = 0;
    let counter = 0;
    let ans = string;

    for( let count = 0; count < string.length; count++ ){
        if( string[ count ] === string[ count ].toUpperCase() ){
            counter++;
        }
        
    }

    console.log( "Palavra fornecida: " + string ); 
    
    while( counter > 0  ){
        for( i = 0; i < ans.length; i++ ){

            // for some reason space to upper case is equal to space
            if( ans[i] === ans[i].toUpperCase() && ans[i] !== " " ){
                if( ans[ i - 1 ] !== " " ){
                    break;
                }
            }
            begin += ans[i];
        }
        
        end = ans.substring( i, ans.length ); 
        ans = begin + espaco + end;
        begin = "";
        end = "";
        counter--;
    }
      
    return ans;
}

console.log( solution ( "stringCase" ) );
console.log( solution ( "seraQueTemMaisDeUm" ) );


// Outras Soluções:
// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
// }

// function solution(string) {
//     // return ( string.replace( /([A-Z])/g, ' $1' ) );
//     return string.replace( /[A-Z]/g, ' $&' );
  
// }