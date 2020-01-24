/*
    Descrição:
        Fazer uma função em js que recebe uma string e um inteiro como parametro
        remover um char dessa string de uma posicao especifica ( inteiro ) 
        retornar a nova string com o char removido

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-22.php

*/

//Minha Solução:
function removeChar( str, position ){
    console.log( str, position );
    if( position >= str.length || position < 0 ){
        return str;
    }
    else{     
        let newString = "";
        let bstr = "";
        let fstr = "";
        for( let i = 0; i < str.length; i++ ){

            if( i === position ){
                continue;
            }else if( i < position ){
                bstr += str[i];
            }else if( i > position ){
                fstr += str[i];
            }

        }
        console.log( bstr );
        console.log( fstr );
        newString = bstr + fstr;
        return newString;

    }

}

console.log( removeChar( "banana", 1 ) );
console.log( removeChar( "miojo", 4 ) );

//Minha outra solução utilizando métodos ja prontos
function removeChar2( str, position ){
    console.log( str, position );
    if( position >= str.length || position < 0 ){
        return str;
    }else{
        let newStr = str.slice( 0, position ) + str.slice( position + 1, str.length );
        return newStr;
    }
}

console.log( removeChar2( "banana", 1 ) );
console.log( removeChar2( "miojo", 4 ) ); 