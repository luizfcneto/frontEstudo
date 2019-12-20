/*
    Arrow Functions

*/

// ES5
var hello5 = function(){
    return "Hello World!";
}

console.log( hello5() );


// ES6
let hello6 = () => "Hello World!";
console.log( hello6() );

hello6 = ( nome ) => "Hello, " + nome;
console.log( hello6( "Luiz" ) );


const anos = [ 1974, 1960, 1945, 1937, 1990, 2005 ]; 

// ES5 
var idade5 = anos.map( function( elemento ) {
    return 2019 - elemento;
});

console.log( idade5 );


// ES6 - forma 1:
let idade6 = anos.map( elemento => 2019 - elemento );

console.log( idade6 );

//ES6 - forma 2:
idade6 = anos.map( ( elemento, index ) => `Elemento:  ${ index + 1 }, idade: ${ 2019 - elemento } ` ); 
console.log( idade6 );

//ES6 - forma 3:
idade6 = anos.map( ( elemento, index ) => {
    const anoAtual = new Date().getFullYear();
    let idade = anoAtual - elemento;
    return `Index: ${ index + 1 }, Idade: ${ idade } `;
});

console.log( idade6 );



//ES5
var box5 = {
    cor: "verde",
    ordem: 1,
    exibeAlerta: function(){
        var self = this;
        document.querySelector(".green").addEventListener("click", function(){
            alert( self.cor + " " + self.ordem );
        })

    }

}
// box5.exibeAlerta();

//ES6
let box6G = {
    cor: "verde",
    posicao: 1,
    exibeAlerta: function() {
        document.querySelector(".green").addEventListener( "click", () => alert( `${ this.cor }, posicao: ${ this.posicao }` ) );

    }

}
box6G.exibeAlerta();

let box6B = {
    cor: "azul",
    posicao: 2,
    exibeAlerta: function(){
        document.querySelector(".blue").addEventListener( "click", () => alert( `${ this.cor }, posicao: ${ this.posicao } ` ) );


    }
}
box6B.exibeAlerta();

let box6R = {
    cor: "vermelha",
    posicao: 3,

    exibeAlerta: function() {
        document.querySelector(".red").addEventListener( "click", () => alert( `${ this.cor }, posicao: ${ this.posicao }` ) );

    }

}
box6R.exibeAlerta();




















