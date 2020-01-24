/*
    Descrição:
        criar um programa em js em que ele instancie uma variavel usando um nome definido
        por um usuario
    
Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-13.php

*/

//Minha Solução:
let user = {
    name: "Luiz Fernando",
    age: 23,
    job: "student"
}

let userName = user.name;
const var_name = "don't know what he's doing";
this[userName] = userName + " " + var_name;
console.log( this[userName] );
