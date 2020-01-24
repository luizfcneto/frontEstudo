/*
    Descrição:
        Fazer uma função em js que recebe como parametro duas strings
        uma delas é uma frase a outra é uma palavra, ou char
        a função deve procurar na frase a palavra fornecida como parametro
        contabilizar e retornar o numero de ocorrencias que a frase tem com aquela palavra
        retornar 0 caso não tenha encontrado

    Exemplo: 
        entrada: "Minha terra tem palmeiras onde cantam sabiá", "sabiá"
        saida: 1 

        entrada: "Minha terra tem palmeiras onde cantam sabiá", "r"
        saida: 3

        entrada: "Minha terra tem palmeiras onde cantam sabiá", "z"
        saida: 0

String.search:
    https://www.w3schools.com/jsref/jsref_search.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search

String.slice:
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    https://www.geeksforgeeks.org/javascript-string-slice/
    https://www.devmedia.com.br/javascript-slice-selecionando-elementos-de-uma-string-ou-array/39810

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-18.php
*/

function count( string, word ){
    console.log( "Parametros Fornecidos: " + string + " & " + word );

    if( word === undefined )    return 0;
    
    else{
        let count = 0, ans = 0, position = 0;
        string = string.toLowerCase();
        word = word.toLowerCase();

        while( count !== string.length ){

            position = string.search( word );

            if( position === -1 ){
                break;
           
            }else{
                ans++;
                string = string.slice( 0, position ) + string.slice( position + word.length, string.length );        
            }

            count++;
        }
        return ans;
    }
    
}

console.log( count( "Minha terra tem palmeiras onde cantam sabiá", "sabiá" ) );
console.log( count( "Minha terra tem palmeiras onde cantam sabiá", "r" ) );
console.log( count( "Minha terra tem palmeiras onde cantam sabiá" ) );
