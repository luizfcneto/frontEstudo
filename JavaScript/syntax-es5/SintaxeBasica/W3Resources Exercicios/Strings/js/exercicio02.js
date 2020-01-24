/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string
        verificar se essa string está em branco, caso esteja retornar verdadeiro
        caso contrario, falso.

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-2.php
*/
function isThisBlank( str ){
    console.log( "Parametro fornecido: " + str );
    if( str.length === 0 || str === "" ){
        return true;
    }else{
        return false;
    }

}

console.log( isThisBlank( "" ) );
console.log( isThisBlank( " " ) );
console.log( isThisBlank( "Lava roupa todo diaaaa..." ) );
