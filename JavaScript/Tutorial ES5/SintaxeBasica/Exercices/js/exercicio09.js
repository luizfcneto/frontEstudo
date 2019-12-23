/*
    Descrição:
        Escrever uma função em javascript que que calcule os dias que faltam para o próximo natal.
        
Date:
    https://www.w3schools.com/js/js_date_methods.asp
    https://www.w3schools.com/js/js_dates.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
 
Solução: 
    https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-9.php
*/

//Retorna dias que faltam para o próximo natal
function calculaProximoNatal( ){
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth();
    let missing;
    let christmasDate;
    
    if( month === 11 && day > 25 ){
        year++;
    }
    christmasDate = new Date( year, 11, 25 );

    console.log( day, month, year );
    console.log( christmasDate.getDate(), christmasDate.getMonth(), christmasDate.getFullYear() );

    missing = christmasDate.getTime() - date.getTime();
    return convertMilliInDays( missing );

}

function calculaProximoNatalnoAno( ano, mes, dia ){
    let date = new Date( ano, mes, dia );
    let christmasDate;
    let missing;

    if( mes === 11 && dia > 25 ){
        ano++;

    }
    
    christmasDate = new Date( ano, 11, 25 );
    
    console.log( dia, mes, ano );
    console.log( christmasDate.getDate(), christmasDate.getMonth(), christmasDate.getFullYear() );

    missing = christmasDate.getTime() - date.getTime();
    return convertMilliInDays( missing );    

}


function convertMilliInDays( ms ){
    return Math.floor( ms / ( 24 * 60 * 60 * 1000 ) );
}


function convertMilliInHours( ms ){
    return Math.round( ms / ( 60 * 60 * 1000 ) );
}


function verificaAnoBissexto( year ){
    if( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ){
        return true;

    }else {
        return false;
    }    
}

console.log( "Faltam: " +  calculaProximoNatal() + " dia(s)." ); 
console.log( "Faltam: " + calculaProximoNatalnoAno( 2014, 11, 26 ) + " dia(s)."  ); 