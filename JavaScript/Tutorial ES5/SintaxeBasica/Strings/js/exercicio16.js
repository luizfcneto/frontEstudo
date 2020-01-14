/*
    Descrição:
        Escrever uma função em js que recebe como parametro uma string, um numero e um char
        a string representa uma frase e o numero repreenta uma posição
        A função deve truncar a frase a partir da posição fornecida como parametro,
        por padrão utilizaremos a reticencias, caso não seja passado um char específico.
        OBS: Caso não passem o numero da posição, retornar a frase completa.

    Exemplo:
        entrada: "Estou estudando javascripto fazendo exercicios"
        saida: Estou estudando javascripto fazendo exercicios

        entrada: "Estou estudando javascripto fazendo exercicios", 26 
        saida: "Estou estudando javascripto..."

        entrada: "Estou estudando javascripto fazendo exercicios", 26, "+"
        saida: "Estou estudando javascripto+"

String.slice:
    https://www.w3schools.com/jsref/jsref_slice_string.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    https://www.geeksforgeeks.org/javascript-string-slice/
    https://www.devmedia.com.br/javascript-slice-selecionando-elementos-de-uma-string-ou-array/39810


Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php
*/
function textTruncate( str, position, char ){
    console.log( "Parametros Fornecidos: " + str + ", " + position + " & " + char );

    if( str === undefined ){
        return "";
    
    }else if( position === undefined ){
        return str;
    
    }else {
        let ans = "";
        
        if( position <= 0 ){
            return ans;
        
        }else if( position > str.length ){
            return str;
        
        }

        if( char !== undefined ){
            ans = str.slice( 0, position ) + char;
            return ans;
        
        }else{
            ans = str.slice( 0, position ) + "...";
            return ans;
        }
    }
}

console.log( textTruncate( "Estou estudando javascripto fazendo exercicios" ) );
console.log( textTruncate( "Estou estudando javascripto fazendo exercicios", 26 ) );
console.log( textTruncate( "Estou estudando javascripto fazendo exercicios", 26, "+" ) );

// console.log( textTruncate( "+" ) );

