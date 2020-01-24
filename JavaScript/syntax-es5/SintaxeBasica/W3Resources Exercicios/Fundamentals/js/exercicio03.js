/*
    Descrição:
        Escrever um programa que pegue a data corrente e printa no formato:
        mm-dd-yyyy, ou mm/dd/yyyy, ou dd-mm-yyyy, ou dd/mm/yyyy
        
Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

Date:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
    https://www.w3schools.com/js/js_dates.asp

*/

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

console.log( day, month, year );

function verificaAnoBissexto( year ){
    
    if( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ){
        return true;

    }else {
        return false;
    }
}

function validaAno( year ){
   
    if( year < 0 ||  year > new Date().getFullYear() ){
        console.log( new Date().getFullYear() );
        return false;
    
    }else{
        return true;
    }
}


function validaMes( month ){
    
    if( month < 1 || month > 12 ){
        return false;
    
    }else{
        return true;
    }
}

function validaDia( day, month, year ){
    
    if( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ){
        if( day > 31 || day < 1 ){
            return false;
        
        }else{
            return true;
        }

    }else if( month === 4 || month === 6 || month === 9 || month === 11 ){
        if( day > 30 || day < 1 ){
            return false;
        
        }else{
            return true;
        }
    }else{
        let eBissexto = verificaAnoBissexto( year );
        if( eBissexto ){
            if( month === 2 ){
                if( day > 29 || day < 1 ){
                    return false;
                }else{
                    return true;
                }
            }
        }else{
            if( month === 2 ){
                if( day > 28 || day < 1 ){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
}


function dateFormat( day, month, year, type ){
    
    //validando ano 
    if( validaAno( year ) === false ) {
        console.log( "validou Ano - errado");
        return "";
    }  
    //validando dados ano, mes e dia para Numero
    //if( typeof( day ) !== Number || typeof( month ) !== Number || typeof( year ) !== Number ) {
    //    console.log( "validou Tipo- errado" );
    //    return "";
    //}  
    //valida mes
    if( validaMes( month ) === false ) {
        console.log( "validou Mes - errado " );
        return "";
    }
    //valida dia
    if( validaDia( day, month, year ) === false ){
        console.log( "Validou dia - errado" );
        return "";
    }  

    else{
        let format = "";
        switch( type ){
            //mm-dd-yyyy
            case 0:
                console.log( "Formatação desejada: mm-dd-yyyy ");
                //format = month + "-" + day + "-" + year;
                format = `${month}-${day}-${year}`;
                break;

            //mm/dd/yyyy
            case 1:
                console.log( "Formatação desejada: mm/dd/yyyy" );
                //format = month + "/" + day + "/" + year;
                format = `${month}/${day}/${year}`;
                break;

            //dd-mm-yyyy
            case 2:
                console.log( "Formatação desejada: dd-mm-yyyy" );
                //format = day + "-" + month + "-" + year;
                format = `${day}-${month}-${year}`
                break;

            //dd/mm/yyyy
            case 3:
                console.log( "Formatação desejada: dd/mm/yyyy" );
                //format = day + "/" + month + "/" + year;
                format = `${day}/${month}/${year}`;
                break;
            //
            default:
                console.log( "Formatação invalida." );
        }
        
        return format;
    }
}

console.log( dateFormat( day, month, year, 0 ) );
console.log( dateFormat( day, month, year, 1 ) );
console.log( dateFormat( day, month, year, 2 ) );
console.log( dateFormat( day, month, year, 3 ) );
console.log( dateFormat( day, month, year, 4 ) );

