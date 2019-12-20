/*
    Descrição:
        Escrever uma função que entregue como parâmetro um ano,
            retornar o século correspondente a aquele ano.
*/

//Minha Resolução:
function century ( year ) {
    
    if( year % 100 >= 1 ){
      return  Math.trunc( year / 100 ) + 1;
    
    }else {
      return Math.trunc( year / 100 );
    }
    
}


var inputAno = parseInt( prompt( "Informe um ano que deseja saber o século: " ) );
console.log( "Ano informado: " + inputAno );

var seculo = century( inputAno );
console.log( "Século: " + seculo );

//Outras Resoluções:
// const century = year => Math.ceil( year / 100 );

// function century(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
// }