/*
    Descrição:
        Fazer uma função que recebe como parametro uma string
        retornar uma outra string baseada na string fornecida
        retirando as letras repitidas.

Solução: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-16.php
*/

function uniqueLetters( string ){
    console.log( "Parametro Fornecido: " + string );

    let ans = [];
    let flag = false;

    for( let i = 0; i < string.length; i++ ){

        // console.log( string.charAt( i ) );
        if( ans.length === 0 ){
            ans.push( string[i] );
        }
        
        for( let j = 0; j < ans.length; j++ ){
            if( ans[j] === string[i] ){
                flag = true;
            }
        }

        if( flag === false ){
            ans.push( string.charAt( i ) );
        }
        flag = false;

    }
    return ans.join("");

}

function uniqueLetters2( str ){
    console.log( "Parametro Fornecido: " + str );

    let ans = str[0];

    for( let i = 0; i < str.length; i++ ){
        
        // console.log( str[i], str.charAt( i ) );
        if( ans.search( str[i] ) === -1 ){
            ans += str[i];
        }

    }
    return ans;

}

console.log( uniqueLetters2( "thequickbrownfoxjumpsoverthelazydog" ) );
