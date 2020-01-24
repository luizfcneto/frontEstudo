/*************Aula 04**************
    - Operadores matemáticos.
    - Operadores lógicos básicos.
    - Ordem de precedencia

*/

//Verificando soma:
var variavel1, variavel2;
variavel1 = 5;
variavel2 = 10;

console.log( variavel1 + " + " + variavel2 + " = " + ( variavel1 + variavel2 ) );

//acrescentando 5 à variavel1;
variavel1 += 5;
console.log( variavel1 + " + " + variavel2 + " = " + ( variavel1 + variavel2 ) );

//acrescentando 1 à variavel1:
variavel1++;
console.log( variavel1 + " + " + variavel2 + " = " + ( variavel1 + variavel2 ) );


//Verificando subtração:
variavel1 = 5;
variavel2 = 10;

console.log( variavel1 + " - " + variavel2 + " = " + ( variavel1 - variavel2 ) );

//decrementando 5 à variavel2;
variavel2 -= 5;
console.log( variavel2 );

//decrementando 1 à variavel1:
variavel1++;
console.log( variavel1 );


//verificando multiplicação:
variavel1 = 5;
variavel2 = 10;

console.log( variavel1 + " * " + variavel2 + " = " + ( variavel1 * variavel2 ) );

//multiplicando variavel1 por 10
variavel1 *= 10;
console.log( variavel1  );

//multiplicando variavel2 por 2
variavel2 *= 2;
console.log(  variavel2 );

//verificando exponenciação:
variavel1 = 2
variavel2 = 3

console.log( variavel1 + "^" + variavel2 + " = " + ( variavel1**variavel2 ) );

variavel2 = variavel2**2;
console.log( variavel2 );

//verficando divisão:
variavel1 = 5;
variavel2 = 10;

console.log( variavel1 + " / " + variavel2 + " = " + ( variavel1 / variavel2 ) );

variavel2 = variavel2/2;
console.log( variavel2 );

variavel1 /= 5;
console.log( variavel1 );

//verificando módulo:
variavel1 = 10;
variavel2 = 2;

console.log( variavel1 + " % " + variavel2 + " = " + ( variavel1 % variavel2 ) );

console.log( variavel1 + " % 8 = " + variavel1 % 8  );

//Operaçoes lógicas:
var a, b;
a = 10;
b = 15;
console.log( "a = " + a + ", b = " + b );

console.log( "a < b" );
console.log( a < b );

console.log( "a == b" );
console.log( a == b );

console.log( "a > b" );
console.log( a > b );


