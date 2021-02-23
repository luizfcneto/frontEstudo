/*
    função: setTimeout( sayHello, 10000 )
                            1       2
    1: nome da função referenciada pela função setTimeout();
    uma função referenciada não utiliza "()",
    quando utilizamos "()" a função é executada e não referenciada. Assim, ela para execução do timeout
    2: tempo em milisegundos para executar a função sayHello();
    
    lê-se:
    abriu a página:
    daqui a 10 segundos execute a função "sayHello"

*/

function sayHello(){
    console.log( "Hello!" );
}

setTimeout( sayHello, 10000 );