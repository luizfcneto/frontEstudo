/*
    Descrição:
        fazer uma função que recebe como parametro um ano
        verificar se o ano fornceido é um ano bissexto ou não

*/

function verificaAnoBissexto( year ){
    if( year % 400 === 0 || ( year % 4 === 0 && year % 100 !== 0 ) ){
        return true;

    }else {
        return false;
    }
    
}

console.log( verificaAnoBissexto( 2016 ) );
console.log( verificaAnoBissexto( 2018 ) );
console.log( verificaAnoBissexto( 2020 ) );
console.log( verificaAnoBissexto( 2022 ) );
console.log( verificaAnoBissexto( 2024 ) );
