/*
    Descrição:
        Escrever uma função em js que receba como parametro um elemento html 
        retornar o elemento HTML descrito de forma textual utilizando as 
        entidades necessárias.

    Exemplo:    
        entrada: "<a href="javascript-string-excercise-17.php" target="_blank">"
        saida: "&lt; a href=&quot; javascript-string-exercise-17.php&quot; target=&quot;_blank&quot; &gt"

string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

String.slice:
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    https://www.geeksforgeeks.org/javascript-string-slice/
    https://www.devmedia.com.br/javascript-slice-selecionando-elementos-de-uma-string-ou-array/39810

HTML Entities:
   https://www.w3schools.com/html/html_entities.asp 


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-19.php
*/
function escape_HTML( htmlElement ){
    // console.log( "Parametro Fornecido: " + htmlElement );

    let ans = "";
    if( htmlElement === undefined ){
        return ans;
    
    }else{

        htmlElement = htmlElement.trim().split("");

        for( let i = 0; i < htmlElement.length; i++ ){

            if( htmlElement[i] === "<" ){
                ans += "&lt;";
            
            } else if( htmlElement[i] === ">" ){
                ans += "&gt;";
            
            } else if( htmlElement[i] === "\"" ){
                ans += "&quot;";
            
            } else if( htmlElement[i] === "\'" ){
                ans += "&apos;";
            
            } else if( htmlElement[i] === "&" ){
                ans += "&amp";
            
            }else{
                ans += htmlElement[i];
            }
        }
        return ans;
    }

}

function escape_HTML2( htmlElementEscaped ){
    console.log( "Parametro Fornecido 2: " + htmlElementEscaped );

    let ans = "";
    if( htmlElementEscaped === undefined ){
        return ans;
    
    }else{

        let counter = 0;
        
        while( counter !== htmlElementEscaped.length ){            
                  
            if( htmlElementEscaped[ counter ] === "&" ){
                let part1 = "";
                if( htmlElementEscaped[ counter + 1 ] === "l" && htmlElementEscaped[ counter + 2 ] === "t" && htmlElementEscaped[ counter + 3 ] === ";" ){
                    ans += "<";
                    part1 = htmlElementEscaped.slice( 0, counter );
                    htmlElementEscaped = part1 + htmlElementEscaped.slice( counter + 4, htmlElementEscaped.length );
                    
                }else if( htmlElementEscaped[ counter + 1 ] === "g" && htmlElementEscaped[ counter + 2 ] === "t" && htmlElementEscaped[ counter + 3 ] === ";" ){
                    ans += ">";
                    part1 = htmlElementEscaped.slice( 0, counter );
                    htmlElementEscaped = part1 + htmlElementEscaped.slice( counter + 4, htmlElementEscaped.length );
                    
                }else if( htmlElementEscaped[ counter + 1 ] === "q" && htmlElementEscaped[ counter + 2 ] === "u" && htmlElementEscaped[ counter + 3 ] === "o" && htmlElementEscaped[ counter + 4 ] === "t" && htmlElementEscaped[ counter + 5 ] === ";" ){
                    ans += "\"";
                    part1 = htmlElementEscaped.slice( 0, counter );
                    htmlElementEscaped = part1 + htmlElementEscaped.slice( counter + 6, htmlElementEscaped.length );
                    
                }else if( htmlElementEscaped[ counter + 1 ] === "a" && htmlElementEscaped[ counter + 2 ] === "p" && htmlElementEscaped[ counter + 3 ] === "o" && htmlElementEscaped[ counter + 4 ] === "s" && htmlElementEscaped[ counter + 5 ] === ";" ) {
                    ans += "\'";
                    part1 = htmlElementEscaped.slice( 0, counter );
                    htmlElementEscaped = part1 + htmlElementEscaped.slice( counter + 6, htmlElementEscaped.length );

                } else if( htmlElementEscaped[ counter + 1 ] === "a" && htmlElementEscaped[ counter + 2 ] === "m" && htmlElementEscaped[ counter + 3 ] === "p" && htmlElementEscaped[ counter + 4 ] === ";" ) {
                    ans += "&";
                    part1 = htmlElementEscaped.slice( 0, counter );
                    htmlElementEscaped = part1 + htmlElementEscaped.slice( counter + 5, htmlElementEscaped.length );

                }else{
                    ans += htmlElementEscaped[ counter ];
                    counter++;
                }

            }else{
                ans += htmlElementEscaped[ counter ];
                counter++;
            }

        }

        return ans;
    }


}

let param = document.getElementById( "escape" ).outerHTML;
let param2 = document.getElementById( "escape2" ).outerHTML;
let param3 = document.getElementById( "escape3" ).outerHTML;

// console.log( escape_HTML( param ) );
// console.log( escape_HTML( param2 ) );
// console.log( escape_HTML( param3 ) );

console.log( escape_HTML2( escape_HTML( param ) ) );
console.log( escape_HTML2( escape_HTML( param2 ) ) );
console.log( escape_HTML2( escape_HTML( param3 ) ) );
