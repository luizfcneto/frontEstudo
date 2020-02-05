/*
    Descrição:
        Fazer um programa em js que cria um objeto do tipo circulo e crie três funções para ele
        construtor:
            - raio
            - pi
        
        fazer método de calcular perimetro:
            2 * Pi * raio

        fazer método para calcular a área do circulo:
            Pi * r^2
    

MATH.Pow:
    https://www.w3schools.com/jsref/jsref_pow.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

Object Constructors:
    https://www.w3schools.com/js/js_object_constructors.asp

Object Prototypes:
    https://www.w3schools.com/js/js_object_prototypes.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-9.php
*/

// Função construtora de Circulo, Circulo é uma classe, ou objeto? R: Objeto, toda função em js é um Objeto
function Circulo( raio ){
    this.raio = raio;
    this.pi = Math.PI;

}

// Criando método e adicionando ao objeto Circulo
Circulo.prototype.calculaPerimetro = function() {
    return ( 2 * this.pi * this.raio ).toFixed( 2 );
}

// Criando método e adicionando ao objeto Circulo
Circulo.prototype.calculaArea = function(){
    return ( this.pi * Math.pow( this.raio, 2 ) ).toFixed( 2 );
}

console.log( Circulo );

let circulo = new Circulo( 5 );
console.log( circulo );

// Criando propriedade area do objeto circulo e atribuindo o resultado do método calculaArea()
circulo.area = circulo.calculaArea();

// Criando a propriedade perimetro do objeto circulo e atribuindo o resultado do método calculaPerimetro()
circulo.perimetro = circulo.calculaPerimetro();

console.log( circulo );

Circulo.prototype.displayCirculo = function(){
    console.log( "Circulo: " );
    console.log( "Raio: " + this.raio );
    console.log( "Perimetro: " + this.perimetro );
    console.log( "Area: " + this.area );

}

circulo.displayCirculo();

// Outra forma: Sem utilizar prototype para adicionar os métodos 
function Circulo02( raio ){
    this.raio = raio;
    this.pi = Math.PI;

    this.CalculaArea02 = function (){
        return ( this.pi * Math.pow( this.raio, 2 ) ).toFixed( 2 );
    }

    this.CalculaPerimetro02 = function(){
        return ( 2 * this.pi * this.raio ).toFixed( 2 );
    }

    this.displayCirculo02 = function(){
        console.log( "Circulo: " );
        console.log( "Raio: " + this.raio );
        console.log( "Perimetro: " + this.perimetro );
        console.log( "Area: " + this.area );
    }

}

let circulo02 = new Circulo02( 40 );
console.log( circulo02 );

circulo02.area = circulo02.CalculaArea02();
circulo02.perimetro = circulo02.CalculaPerimetro02();
circulo02.displayCirculo02();
