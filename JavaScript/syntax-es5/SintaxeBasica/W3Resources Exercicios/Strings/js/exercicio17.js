/*
    Descrição: 
        Fazer uma função em js que recebe como parametro uma string e um numero
        string representa uma palavra, o numero representa quantidade
        a função deve transformar a string em um array, separando as letras da palavra
        de acordo com a quantidade que foi passada.
        Retorar nesse array

    Exemplo:
        entrada: "w3resource", 2
        saida: [ "w3", "re", "so", "ur", "ce" ]

        entrada: "w3resource" 
        saida: [ "w3resource" ]

        entrada: "w3resource", 3
        saida: [ "w3r", "eso", "urc", "e" ];

string.trim:
    https://www.w3schools.com/jsref/jsref_trim_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim

string.split: Converte string para array
    https://www.w3schools.com/jsref/jsref_split.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-17.php  
*/

function stringChop( word, length ){
    console.log( "Parametros Fornecidos: " + word + " & " + length );

    if( word.length <= 0 ){
        return [];
    
    }else if ( length <= 0 || length === undefined ){
        return word.trim().split();
    
    } else{
        let ans = "";
        for( let i = 0; i < word.length; i++ ){
            if( i % length === 0 ){
                ans += " ";
            }
            ans += word[i];
        }
    
        ans = ans.trim().split(" ");
        return ans;
    }
}

console.log( stringChop( "batata", 2 ) );
console.log( stringChop( "w3resource" ) );
console.log( stringChop( "w3resource", 3 ) );
console.log( stringChop( "w3resource", 6 ) );
console.log( stringChop( "w3resource", -1 ) );
console.log( stringChop( "w3resource", 0 ) );