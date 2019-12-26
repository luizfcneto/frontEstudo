/*
    Descrição:
        Escreva uma função em js que receba como parametro uma string
        caso essa string não comece com "Py" insira e retorne a string 
        caso contrario apenas retorne a string;

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-21.php

*/

//Minha Solução:
function isPyThere( str ){

    if( str[0] === "P" && str[1] === "y" ){
        return str;
    
    }else{
        str = "Py" + str;
        return str;
    }
    
}


console.log( isPyThere( "Chocolate" ) );
console.log( isPyThere( "thon é ruim" ) );
console.log( isPyThere( "thon é pior que js" ) );
console.log( isPyThere( "Pytomba!" ) );
