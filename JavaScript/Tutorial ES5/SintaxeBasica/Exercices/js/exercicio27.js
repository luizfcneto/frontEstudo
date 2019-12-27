/*  
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        verificar se essa string começa com "Java"
        retorna verdadeiro, caso verdade
        retorna falso, caso não começe.

String:
    https://www.w3schools.com/js/js_string_methods.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-27.php
*/

//Minha Solução:
function verifyBegin( str ){
    if( str.length < 4  ){
        return false;
    
    }else{
        console.log( "Palavra fornecida:" + str );
        let begin = str.slice( 0, 4 );
        if( begin !== "Java" ){
            return false;
        }else{
            return true;
        }
    }
}

console.log( verifyBegin( "JavaScripto" ) );
console.log( verifyBegin( "Php não ta com nada" ) );
console.log( verifyBegin( "Java, Maven, Eclipse" ) );