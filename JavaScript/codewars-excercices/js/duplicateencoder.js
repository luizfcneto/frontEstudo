/*
    Descrição:
        Fazer uma função que receba uma string/palavra
        a função deve codificar a string de forma que:
        se uma letra aparece apenas uma vez na string devemos retornar a letra "("
        se a letra aparece mais de uma vez na string devemos retornar a letra ")"

    Exemplo:
        entrada: banana
        saida: ()))))


Map:
    https://www.w3schools.com/jsref/jsref_map.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://www.geeksforgeeks.org/javascript-array-map-method/
    https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    https://stackoverflow.com/questions/54172109/typeerror-map-is-not-a-function

String:
    https://www.w3schools.com/js/js_string_methods.asp

*/

//Minha solução:
function duplicateEncode( word ){
    console.log( "Palavra fornecida: " + word );

    // Nao posso usar string.map, devo usar o método .split('') que ai sim poderei usar o map
    var answer = word.split('').map( function( val ){
        let counter = 0;
        for( let i = 0; i < word.length; i++ ){
           
            if( word[i].toUpperCase() === val.toUpperCase() ){
                counter++;
                
                if( counter > 1 ){
                    return ")";
                }
            }
        }

        if( counter === 1 ){
            return "(";
        }

    } );

    answer = answer.toString();
    answer = retiraVirgula( answer );
    return answer;
}

console.log( duplicateEncode( "banana" ) );
console.log( duplicateEncode( "Bob esponja" ) );
console.log( duplicateEncode( "Javascript é muito louco" ) );

function retiraVirgula( palavra ){
    let newString = "";
    for( let i = 0; i < palavra.length; i++ ){
        if( palavra[i] === "," ){
            continue;
        }
        newString += palavra[i];
    }
    return newString;
}

//Outras Soluções:
// function duplicateEncode(word){
   
//     var unique='';
//     word = word.toLowerCase();
//     for(var i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;

// }

// Complexidade abaixo: O(n^2)
// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
// }
