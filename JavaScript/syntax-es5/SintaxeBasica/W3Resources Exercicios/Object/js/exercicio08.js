/*
    Descrição:
        Fazer uma função em js que exiba um relógio ( mostrando hora:minuto:segundo )
        e reexiba a cada segundo que passa.

Timing Events:
    https://www.w3schools.com/js/js_timing.asp


Object.prototype.function:
    https://www.w3schools.com/js/js_object_prototypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-8.php
*/

// function setClock(){
//     console.log( "Mostrando as Horas: " );
//     let hora = new Date();
//     console.log( hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds() );
// }

// setInterval( setClock, 1000 );

// Fazendo com Object:
let Clock = function(){
    let date = new Date();
    this.hora = date.getHours();
    this.minutos = date.getMinutes();
    this.segundos = date.getSeconds();
}

Clock.prototype.run = function (){
    setInterval( this.update.bind( this ), 1000 );

}

Clock.prototype.update = function(){
    
    this.segundos++;

    if( this.segundos === 60 ){
        this.minutos++;
        this.segundos = this.segundos - 60;
    }

    if( this.minutos === 60 ){
        this.hora++;
        this.minutos = this.minutos - 60;
    }

    if( this.hora === 24 ){
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;
    }

    this.displayHours();

}

Clock.prototype.displayHours = function(){
    console.log( this.hora + ":" + this.minutos + ":" + this.segundos );

}

let relogio = new Clock();
relogio.run();

