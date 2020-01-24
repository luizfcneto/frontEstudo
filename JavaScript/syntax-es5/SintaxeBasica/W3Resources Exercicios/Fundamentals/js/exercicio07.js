/*
    Descrição:
        Criar uma função que procure quais anos o dia 01 de Janeiro começará no domingo
        entre os anos de 2014 e 2050


        - Solução: 
            Sei que no ano de 2017 dia 01 de Janeiro caiu em um domingo
            Sei que no ano de 2014 dia 01 de Janeiro caiu em uma quarta
                2015 -> quinta
                2016 -> sexta, como 2016 é bissexto acrescentamos um dia a mais no ano
                365 % 7 = 1
                366 % 7 = 2

                365 / 7 = 52 + 1    => a cada ano acrescentamos um dia da semana.
                ano bissexto:
                366 / 7 = 52 + 2    => a cada ano bissexto acrescentamos dois dias na semana.

Date: 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
    https://www.w3schools.com/js/js_date_methods.asp
    https://www.w3schools.com/js/js_dates.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-7.php

*/

//Minha Solução:
function verificaAnoBissexto( year ){
    if( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ){
        return true;

    }else {
        return false;
    }
    
}

function findFirstJanuary( anoInicial, anoFinal ){
    console.log( "Periodo: " + anoInicial + " ~ " + anoFinal );
    //Instanciando uma data no ano fornecido, no mes 0 ( Janeiro ) e dia 01: 1/1/anoInicial
    let dateTemp = new Date( anoInicial, 0, 1 );

    //Date.getDay() retorna dia da semana em inteiro 
    let diaSemana = dateTemp.getDay();
    let ano = dateTemp.getFullYear();

    while( ano <= anoFinal ){
       
        if( diaSemana === 0  ){
            console.log( "Primeiro de Janeiro " + ano );
        }

        if( verificaAnoBissexto( ano ) ){
            diaSemana = ( diaSemana + 366 ) % 7;
            ano++;

        }else{
            diaSemana = ( diaSemana + 365 ) % 7;
            ano++;

        }
    }
}


findFirstJanuary( 2014, 2050 );
//findFirstJanuary2( 2014, 2050 );

//Outra Solução:
function findFirstJanuary2( anoInicial, anoFinal ){
    let aux = anoInicial;
    console.log( "Periodo: " + anoInicial + " ~ " + anoFinal );

    while( aux <= anoFinal  ){
        let tempDate = new Date( aux, 0, 1 );
        
        if( tempDate.getDay() === 0 ){
            console.log( "Primeiro de Janeiro " + tempDate.getFullYear() );
        }
        aux++;
    }

}