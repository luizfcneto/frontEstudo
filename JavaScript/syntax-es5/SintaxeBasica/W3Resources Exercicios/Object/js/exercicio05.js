/*
    Descrição:
        Fazer uma função em javascript que receba um objeto como parametro
        que tem os atributos necessários para calcular o volume de um cilindro
        Fazer uma função que calcule e retorne o volume desse cilindro.
        Formula para calcular Volume do cilindro:
        V = PI * r^2 * h
        h = altura;
        r = raio;

MATH.PI:
    https://www.w3schools.com/jsref/jsref_pi.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

MATH.toFixed:
    https://www.w3schools.com/jsref/jsref_tofixed.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

MATH.pow:
    https://www.w3schools.com/jsref/jsref_pow.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

OBJECT add property:
    https://www.w3schools.com/js/js_object_properties.asp

OBJECT:
    https://www.w3schools.com/js/js_objects.asp
    https://www.w3schools.com/js/js_object_definition.asp

    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class


Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-5.php
*/

// Forma 01: Fazendo uma função externa ao objeto que calcula o volume do cilindro passando esse objeto do cilindro como parametro
function calculaVolume01( cylinderObj ){
    console.log( "__________INICIO Forma01__________ ")
    console.log( "Parametro recebido: " );
    console.log( cylinderObj );

    // Calculando Volume e atribuindo essa nova propriedade ao objeto:
    cylinderObj.volume = ( cylinderObj.PI * Math.pow( cylinderObj.radius, 2 ) * cylinderObj.height ).toFixed(4);
    console.log( cylinderObj.volume );
}

// Forma 01: Declarando de forma Literal o Objeto de Cilindro
let Cylinder01 = {
    height: 5,
    radius: 2.5,
    PI: Math.PI, 
};

// Forma 01: passando objeto como parametro para calcular e adicionar a propriedade volume ao objeto
calculaVolume01( Cylinder01 );
console.log( "Cilindro 1: " )
console.log( Cylinder01 );
console.log( "__________FIM Forma01__________" );
















console.log( "__________INICIO Forma02__________" );    //ES05
// Forma 02: Declarando de forma literal o objeto do cilindro + o método de calcular volume
let Cylinder02 = {
    height: 5,
    radius: 2.5,
    PI: Math.PI,

    // propriedade calculaVolume02 que se refere a uma função, vulgo método calculaVolume02()
    calculaVolume02 : function(){
        return ( this.PI * Math.pow( this.radius, 2 ) * this.height ).toFixed(4);
    }
}

console.log( "Cilindro 2: " );
console.log( Cylinder02 );

// Criando e atribuindo volume como atributo novo de Cylinder02
Cylinder02.volume = Cylinder02.calculaVolume02();
console.log( Cylinder02.volume );
console.log( Cylinder02 );
console.log( "__________FIM Forma02__________" );



















console.log( "__________INICIO Forma03__________" );
// Forma 03: de declarar o Objeto Cilindro: Através da criação da classe
const Cilindro = class {

    constructor( altura, raio ) {
        this.altura = altura;
        this.raio = raio;
        this.pi = Math.PI;

    }

    // Método que calcula volume e retorna o valor, sem atribuir o resultado em nenhuma propriedade da classe
    calculaVolume03(){
        return ( this.pi * Math.pow( this.raio, 2 ) * this.altura ).toFixed(4);
    }

}

// Classe Cilindro
console.log( Cilindro );
const cylinder03 = new Cilindro( 3, 4 );

console.log( "Cilindro 3: " );
console.log( cylinder03 );

// Exibe volume calculado
console.log( cylinder03.calculaVolume03() );

// Utilizando o método da classe Cilindro para calcular Volume. e adicionar atributo volume no objeto cylinder03
cylinder03.volume = cylinder03.calculaVolume03();
console.log( cylinder03 );
console.log( "__________FIM Forma03__________" );















console.log( "__________INICIO Forma03__________" );
// Forma 04: Criando objeto a partir de funções
let Cilindro04 = function( altura, raio ){
    this.altura = altura; 
    this.raio = raio;
    this.pi = Math.PI;

    calculaVolume = function(){
        return ( this.pi * Math.pow( this.raio, 2 ) * this.altura ).toFixed(4);
    }

}
console.log( "Função" );
console.log( Cilindro04 );


console.log( "__________FIM Forma03__________" );