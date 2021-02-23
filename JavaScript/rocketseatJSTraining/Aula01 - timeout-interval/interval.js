/*
    função: setInterval( sayHi, 5000 )
                          1      2
    1: função a ser referenciada pela função ( setInterval )
    quando uma função é referenciada( sem a utilização das "(", ")" ), ela está sendo passada como paramêtro
    e pode ser executada sempre que a função setInterval for executada

    2: tempo em ms, de repetição que a função setInterval será executada
    lê-se a função acima como:
    de 5 em 5 segundos, execute a função sayHi

*/

function sayHi(){
    console.log( "Hi! ");
}

setInterval( sayHi, 5000 );