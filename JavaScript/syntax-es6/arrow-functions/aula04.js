/*
    Arrow Functions

*/

// ES5
var hello5 = function(){
    return "Hello World!";
}

console.log( hello5() );


// ES6
let hello6 = () => `Hello World!`;
console.log( hello6() );

hello6 = ( nome ) => `Hello, " ${ nome }`;
// ou
// hello6 = nome => `Hello, ${ nome }`;
console.log( hello6( "Luiz" ) );


const anos = [ 1974, 1960, 1945, 1937, 1990, 2005 ]; 

// ES5 
var idade5 = anos.map( function( elemento ) {
    return 2019 - elemento;
});

console.log( idade5 );


// ES6 - forma 1 apenas um parametro:
let idade6 = anos.map( elemento => 2019 - elemento );
// ou 
// let idade6 = anos.map( ( elemento ) => {
//     return 2020 - elemento;
// });
console.log( idade6 );

//ES6 - forma 2 mais de um parametro:
idade6 = anos.map( ( elemento, index ) => `Elemento:  ${ index + 1 }, idade: ${ 2020 - elemento } ` ); 
// ou 
// idade6 = anos.map( ( elemento, index ) => {
//     return `Elemento: ${ index + 1 }, idade: ${ 2020 - elemento }`
// } );
console.log( idade6 );

//ES6 - forma 3:
idade6 = anos.map( ( elemento, index ) => {
    const anoAtual = new Date().getFullYear();
    let idade = anoAtual - elemento;
    return `Index: ${ index + 1 }, Idade: ${ idade } `;
});

console.log( idade6 );


//ES5

// var box5 = {
//     cor: "verde",
//     ordem: 1,
//     exibeAlerta: function(){
//         // Ler guia para entender este contorno da palavra this.
//         var self = this;
//         document.querySelector(".green").addEventListener("click", function(){
//             alert( self.cor + " " + self.ordem );
//         })

//     }

// }
// box5.exibeAlerta();

//ES6
let box6G = {
    cor: "verde",
    posicao: 1,

    exibeAlerta: () => {
        document.querySelector(".green").addEventListener( "click", () => {
            return alert( `${ this.cor }, posicao: ${ this.posicao }` ); 
        }  );

    }

}
box6G.exibeAlerta();

let box6B = {
    cor: "azul",
    posicao: 2,

    exibeAlerta: function(){
        document.querySelector(".blue").addEventListener( "click", () => {
            return alert( `${ this.cor }, posicao: ${ this.posicao } ` ) 
        } );

    }
}
box6B.exibeAlerta();

let box6R = {
    cor: "vermelho",
    posicao: 3,

    exibeAlerta: function() {
        document.querySelector(".red").addEventListener( "click", () => { 
            return alert( `${ this.cor }, posicao: ${ this.posicao }` );
        } );
    }

}
box6R.exibeAlerta();


let circulo = {
    PI: 3.1415,
    raio: 5,

    // Correto -> campo lexico do objeto circulo
    // calculaArea: function(){
    //         console.log( this.PI, this.raio );
    //     return this.PI * this.raio * this.raio;
    // }

    // Errado -> campo lexico do objeto window
    calculaArea: () => {
        console.log( this.PI, this.raio, this );
        return this.PI * this.raio * this.raio
    }
} 
circulo.calculaArea();
// console.log( circulo.volume );
console.log( circulo.calculaArea() );


// ATENÇÃO ao saber onde utilizar a arrow function
/*
// ERRO:
// campo léxico anexo ao objeto box6R nesse caso é o objeto global, window 
let box6R = {
    cor: "vermelho",
    posicao: 3,

    // campo léxico que a função arrow abaixo irá referenciar o this será do objeto global, window
    -exibeAlerta: () => {-
        document.querySelector(".red").addEventListener( "click", () => { 
            return alert( `${ this.cor }, posicao: ${ this.posicao }` );
        } );
    }

}
box6R.exibeAlerta();


DICAS: 
    1 - Caso função não precise utilizar a palavra chave "this" pode usar tranquilamente
     arrow function;
    
    Exemplos: 
        let responde = ( nome ) => `Olá, ${ nome }`;

        let calculaIdade = ( anoNascimento ) => {
            return 2020 - anoNascimento;
        }

    2 - Caso a função seja um método de um objeto e precise fazer referencias aos atributos 
    do mesmo objeto ( ou seja, precisa da referencia de "this" ), utilizar a sintaxe da 
    função regular. 
    
    ex:
    let circulo = {
        PI: 3.1415,
        raio: 5,

        // Correto
        calculaArea: function(){
            return this.PI * this.raio * this.raio;
        }

        // Errado
        calculaArea: () => this.PI * this.raio * this.raio;

    } 


    3 - Caso a função seja um método de um objeto que utilize uma outra função externa ao objeto
    principal, ex alguma função que utilize uma função callback, caso essa função callback precise dos atributos internos do objeto principal é recomendado utilizar a arrow function ( na callback ). 


    Se tiver dúvida printa o this dentro da arrow function e verifique se está referenciando ao objeto desejado
*/



















