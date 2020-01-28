/*  
    Descrição:
        Fazer uma função em js que recebe como parametro um objeto
        Imprimir no console todas as propriedades contidas nesse objeto

Object.getOwnPropertyName:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-11.php
*/

function displayAllproperties( obj ){
    console.log( obj );
    console.log( Object.getOwnPropertyNames( obj ) );
}

function Cilindro( altura, raio ){
    this.altura = altura;
    this.raio = raio;
    this.pi = Math.PI;

    this.calculaVolume = function(){
        return ( this.pi * Math.pow( this.raio, 2 ) * this.altura ).toFixed(4);
    }

}

function Circulo( raio ){
    this.raio = raio;
    this.pi = Math.PI;

    this.calculaArea = function(){
        return ( this.pi * Math.pow( this.raio, 2 ) ).toFixed( 2 );
    }

    this.calculaPerimetro = function(){
        return ( 2 * this.pi * this.raio ).toFixed( 2 );
    }

}

let cilindro = new Cilindro( 20, 5 );
let circulo = new Circulo( 100, 5 );

displayAllproperties( cilindro );
displayAllproperties( circulo );

cilindro.volume = cilindro.calculaVolume();
displayAllproperties( cilindro );

circulo.area = circulo.calculaArea();
circulo.perimetro = circulo.calculaPerimetro();
displayAllproperties( circulo );