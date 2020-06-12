/*
    Array ES06

*/

// ES05:
// var boxes = document.querySelectorAll( ".box" );

// // Método que convertia a lista de nós para Array:
// var boxesArr5 = Array.prototype.slice.call( boxes );

// // Método forEach para percorrer um array
// boxesArr5.forEach( function( elementoCorrente ) {
//     // Inserindo em todos os elementos contidos no array o estilo de cor preta.
//     elementoCorrente.style.backgroundColor = "black";
//     elementoCorrente.style.color = "white";
// } );


// ES06: Array.from():
// let boxes = document.querySelectorAll( ".box" );

// // Novo método Array.from();
// let boxesArr6 = Array.from( boxes );

// boxesArr6.forEach( ( elementoCorrente ) => {
//     elementoCorrente.style.backgroundColor = "black";
//     elementoCorrente.style.color = "white";
// } );


// ES05:
// var boxes = document.querySelectorAll( ".box" );

// // transformando lista para array:
// var boxesArr5 = Array.prototype.slice.call( boxes );

// // percorrendo o array utilizando as palavras chave "break", "continue":
// for( var i = 0; i < boxesArr5.length; i++ ){

//     if( boxesArr5[ i ].className === "box" && boxesArr5[ i ].id === "blue" ){
//         continue;
//         //break;
//     }

//     // Modificando todas as caixas que não tem a classe "blue" para a cor azul e o conteudo textual.
//     boxesArr5[ i ].textContent = "Conteudo Modificado para Blue";
//     boxesArr5[ i ].style.backgroundColor = "blue";
//     boxesArr5[ i ].style.color = "white";
// }

//ES06: For of
// let boxes = document.querySelectorAll( ".box" );

// // Convertendo Lista Encadeada ( node list ) para array usando método novo ES06 Array.from
// let boxArr6 = Array.from( boxes );

// For of
// for( let elementoCorrente of boxArr6 ){
//     if( elementoCorrente.className === "box" && elementoCorrente.id === "blue" ){
//         continue;
//         //break;
//     }

//     elementoCorrente.style.backgroundColor = "blue";
//     elementoCorrente.textContent = "Conteudo Modificado para Blue";
//     elementoCorrente.style.color = "white";
// }


// ES05:
// var idades = [ 10, 5, 20, 14, 17, 25, 50 ]

// var maiorIdade = idades.map( function( elementoCorrente ) {
//     return elementoCorrente >= 18;
// } );

// console.log( maiorIdade.indexOf( true ) );

// console.log( idades[ maiorIdade.indexOf( true ) ] );

// ES06 - Array.findIndex( callback ) & Array.find( callback );
// let idades = [ 10, 5, 20, 14, 17, 25, 50 ]

// // Retorna o index do elemento corrente que é maior que 18
// console.log( idades.findIndex( ( elementoCorrente ) => {
//     return elementoCorrente >= 18;
// } ) );

// // Retorna o elemento corrente maior que 18
// let idadesMaiores = idades.find( ( elementoCorrente, index, array ) => {
//     if( elementoCorrente >= 18 ){
//         return elementoCorrente;
//     }
// } );

// console.log( idadesMaiores );