/*
    Strings - Template Literals 
*/


let firstName = "Luiz";
let lastName = "Neto";
const dataNascimento = 1996;

function calculaIdade( dataNascimento ){
    return 2019 - dataNascimento;    
}

//ES5
console.log( lastName + ", " + firstName + " possui " + calculaIdade( dataNascimento ) + " anos de idade" );

//ES6 utilizando Template Literals
console.log( `${ lastName }, ${ firstName } possui ${ calculaIdade( dataNascimento ) } anos de idade ` );