/*  
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        retornar a string com palavras abreviadas

        Critérios de abreviação:
            Se uma palavra tem menos de 4 letras, ela não é abreviada
            Caso a palavra tenha mais de 4 letras a abreviação se dá da seguinte forma:
                1- deixamos a primeira da palavra
                2- acrescentamos após a primeira letra a quantidade de letras que ficam entre a primeira e a ultima letra
                3- acrescentamos a ultima letra

            Exemplo:
                entrada: "Meu pastel é mais barato"
                saida: "Meu p4t é m2s b4o"

            OBS:
                Caso a palavra tenha hifen, a palavra é separada em duas depois aplicamos
                a tecnica de abreviação, mas mantendo o hifen separando as palavras abreviadas

            OBS2: possiveis problemas:
                palavras com virgula, ela não entra na contabilização da palavra
                recolocar o hifen nas palavras corretas.

            Exemplo:
                entrada: "meu-hifen é bacana, mas meu pastel é mais barato"
                saida: "meu-h3n é b4a, mas meu p4l é m2s b4o"
*/

function abbreviate( string ){

    // Separando palavras em array
    let arrStr = string.trim().split(" ");
    console.log( arrStr );

    for( let i = 0; i < arrStr.length; i++ ){
            
        // Entra na regra de abreviação
        if( arrStr[i].length >= 4 ){

            // Final da palavra tem virgula
            if( arrStr[i].charAt( arrStr[i].length - 1 ) === "," ){

                let stringTemp = arrStr[i];
                let positionHifen = stringTemp.search( "-" );
                
                // Palavra possui virgula e hifen 
                if( positionHifen !== -1 ){

                    let firstWord = stringTemp.slice( 0, positionHifen );
                    firstWord = firstWord.charAt( 0 ) + ( firstWord.length - 2 ) + firstWord.charAt( firstWord.length - 1 );  
                                        
                    let secondWord = stringTemp.slice( positionHifen + 1, stringTemp.length );
                    secondWord = secondWord.charAt( 0 ) + ( secondWord.length - 3 ) + secondWord.slice( secondWord.length - 2, secondWord.length );
                    arrStr[i] = firstWord + "-" + secondWord;
                
                // Palavra possui virgula e não possui hifen 
                }else{
                    stringTemp = arrStr[i].charAt( 0 ) + ( arrStr[i].length - 3 ) + arrStr[i].slice( arrStr[i].length - 2, arrStr[i].length );
                    arrStr[i] = stringTemp;
                }

            // Final da palavra sem virgula
            }else if( arrStr[i].charAt( arrStr[i].length - 1 ) !== "," ){

                let stringTemp = arrStr[i];
                let positionHifen = stringTemp.search( "-" );
                
                // Palavra não possui virgula, mas possui hifen 
                if( positionHifen !== -1 ){
                    let firstWord = stringTemp.slice( 0, positionHifen );
                    firstWord = firstWord.charAt( 0 ) + ( firstWord.length - 2 ) + firstWord.charAt( firstWord.length - 1 );  
                    
                    let secondWord = stringTemp.slice( positionHifen + 1, stringTemp.length );
                    secondWord = secondWord.charAt( 0 ) + ( secondWord.length - 2 ) + secondWord.charAt( secondWord.length - 1 );
                    arrStr[i] = firstWord + "-" + secondWord;
                    
                    // Final da palavra sem virgula e não possui hifen 
                }else{
                    stringTemp = arrStr[i].charAt( 0 ) + ( arrStr[i].length - 2 ) + arrStr[i].charAt( arrStr[i].length - 1);
                    arrStr[i] = stringTemp;
                    
                }                  
            }
        }
        
    }
    console.log( arrStr );
    return arrStr.join(" ");
    
}

console.log( abbreviate( "meu-hifen é bacana, mas meu pastel é mais barato" ) );
console.log( abbreviate( "You need, need not want, to complete this code-wars mission" ) );

/* Outras Soluções:

// Com regex:
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
  return string.replace(find, replace);
}

// Outra com Regex:
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(w) { return w[0] + (w.length - 2) + w[w.length - 1] });
}

*/