/*
    Spread Operator // operador de extensão
*/


// ES05
function addValores1( elemento1, elemento2, elemento3 ){
    return elemento1 + elemento2 + elemento3;
}

// Array:
let valoresArray1 = [ 10, 15, 30 ];

let resposta1 = addValores1.apply( null, valoresArray1 );
console.log( `ES05: ${ resposta1 } ` );
//10 + 15 + 30 = 55

// ES06:
function addValores2( elemento1, elemento2, elemento3 ){
    return elemento1 + elemento2 + elemento3;
}

// Array:
let valoresArray2 = [ 10, 15, 30 ];

// Operador de extensão/espalhamento ( Spread Operator ): "..."
let resposta2 = addValores2( ...valoresArray2 ); 
console.log( `ES06: ${ resposta2 } ` );

// Concatenando arrays literalmente:
let familia1 = [ "Renata", "Luiz" ];
let familia2 = [ "Monah", "Gabriel" ];

let geralJunto = [ ...familia1, ...familia2, "Thabata" ];
console.log( geralJunto );

// Copiando um array:
let copiaGeral = [ ...geralJunto ];
console.log( copiaGeral );

// Copiando um objeto Literal:
let obj = {
    variavel1: 10,
    variavel2: 15,
    variavel3: 30
}

let objCopia = { ...obj };
console.log( objCopia );

// Construtor de um objeto com array utilizando Spread Operator:
let camposData = [ 1996, 0, 30 ] // 30 Jan 1996
let nascimento = new Date( ...camposData );
console.log( nascimento );

//NodeList:
let h1 = document.querySelector( "h1" );
let boxes = document.querySelectorAll( ".box" );

// Transformando NodeList em Array e concatenando com h1 para modificar estilo da fonte internos de boxes e do h1:
let arrBoxes = [ h1, ...Array.from( boxes ) ];
console.log( arrBoxes );

arrBoxes.forEach( ( element ) => {
    element.style.color = "purple";
} );