/*
    Descrição:
        Escrever um programa que exiba a data corrente e a hora no formato:
        Sample Output: "Today is: Tuesday"
        Current time is: 10 PM : 30 : 38
                                30 => minutos
                                38 => segundos

Exercicios: https://www.w3resource.com/javascript-exercises/
solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php

Date:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
    https://www.w3schools.com/js/js_dates.asp
*/

//Instanciando uma nova data com valor corrente.
let date = new Date();
console.log( date );

console.log( date.getDate() + " - dia do mes");
console.log( date.getTime() + " - Valor do horario em milissegundos." );
console.log( date.getTimezoneOffset() + " - Diferença em minutos entre o horario na minha zona local e UTC"  );
console.log( date.getFullYear() + " - Ano da data" );
console.log( date.getHours()  + " - Hora da data" );
//0 -> Domingo, 1 -> Segunda, 2 -> Terça, 3 -> Quarta, 4 -> Quinta, 5 -> Sexta, 6 -> Sabado
console.log( date.getDay() + " - Dia da semana em numero" );
console.log( date.getMinutes() + " - Minutos da Data" );
console.log( date.getSeconds() + " - Segundos da Data" );

let hora = date.getHours();
let minutos = date.getMinutes();
let segundos = date.getSeconds();
let diaMes = date.getDate();
let diaSemana = date.getDay();
let am = false;
let output = "";
let amOrPm;

//Verificando se horario é PM ou AM
if( hora >= 12 && hora <= 0  ){
    am = false;
    amOrPm = "PM";
}else{
    am = true;
    amOrPm = "AM";
}

//Verificando dia da semana:
/*
if( diaSemana === 0 ){
    diaSemana = "Domingo";
}else if( diaSemana === 1 ){
    diaSemana = "Segunda";
}else if( diaSemana === 2 ){
    diaSemana = "Terça";
}else if( diaSemana === 3 ){
    diaSemana = "Quarta";
}else if( diaSemana === 4 ){
    diaSemana = "Quinta";
}else if( diaSemana === 5 ){
    diaSemana = "Sexta";
}else if( diaSemana === 6 ){
    diaSemana = "Sabado";
}*/

//outra Forma de verificar o dia:
let days = [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado" ];
diaSemana = days[ diaSemana ];

output = "Hoje é: " + diaSemana + ".\nHora atual: " + hora + " " + amOrPm + " : " + minutos + " : " + segundos;
console.log( output );