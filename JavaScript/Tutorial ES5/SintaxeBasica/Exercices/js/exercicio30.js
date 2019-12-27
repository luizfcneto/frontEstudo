/*
    Descrição:
        Fazer uma função em js que receba como parametro uma string
        Verificar se a string possui a string "Script" na quarta posição da string
        Caso a string possua "Script", retorne a string sem o "Script", 
        Caso contrario retorne a string original

    Exemplo:
        entrada: "testStringDoing"
        saida: "testDoing";

String: 
    https://www.w3schools.com/js/js_string_methods.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-30.php
*/

// Minha Solução:
function verifyScript( string ){
    
    if( string.length >= 0 && string.length < 4 ){
        return string;
    
    }else if( string.length < 0 ){
        return "String Invalida";
    
    } else{
        let begin = "";
        let ans = "";
        console.log( "String fornecida: " + string );
        
        if( string.search( "Script" ) === 4 ){
            begin = string.slice( 0, 4 );
            ans = string.slice( 4 + "Script".length, string.length );
            ans = begin + ans;
            return ans; 

        } else{
            return string;
        }
    
    }
}

console.log( verifyScript( "testScripDoing" ) );
console.log( verifyScript( "testScriptDoing" ) );
console.log( verifyScript( "ScriptTestDoing" ) ); 