/*
    Exemplo 1: JavaScript Assincrono
*/

const funcao2Sincrono = () => {
    console.log( "Sincrono, Olá mundo" );
    
}

const funcao2Assincrono = () => {

    setTimeout( () => {
        console.log( "Assincrono, Olá mundo" );
    }, 2000 );
}

const funcao1 = () => {
    console.log( "Ola mundo" );
    // funcao2Sincrono();
    funcao2Assincrono();
    console.log( "fim" );
}

funcao1();