/*
    Maps
*/

// Criando Maps 
// Forma 1:
let map = new Map();

// Inserindo elementos em Map:
map.set( "chave1", "valor1" );
map.set( "chave2", "valor2" );
map.set( "chave3", "valor3" );
map.set( "chave4", "valor4" );
console.log( "map1", map );

// verificando se "chave2" pertence ao map:
if( map.has( "chave4" ) ){

    // Removendo elemento de map pela chave:
    map.delete( "chave2" );
}
console.log( "map1", map );

// Verificando tamanho/quantidade de par chave:valor existente em map:
console.log( "map1 tamanho: ", map.size );

// Forma 2:
let array = [ [ "chave1", "valor1" ], [ "chave2", "valor2" ], [ "chave3", "valor3" ] ];
let map2 = new Map( array );

console.log( "map2", map2 );

// Limpando todas as chave:valor do map2:
map2.clear();
console.log( "map2", map2 );

//Forma 3:
let map3 = new Map( [ ...array ] );
console.log( "map3", map3 );

// criando arrays de chaves 
let arrayDeChaves = [ ...map3.keys() ];
console.log( "array de chaves: ", arrayDeChaves );

// criando arrays de valores
let arrayDeValores = [ ...map3.values() ];
console.log( "array de valores:", arrayDeValores );

// Percorrendo Map utilizando for ... of : forma1 - par chave:valor
console.log( "Percorrendo map utilizando for...of e par chave:valor forma 1" );
for( let [ chave, valor ] of map3 ){
    console.log( `${ chave } : ${ valor } ` );
}

// Percorrendo Map utilizando for ... of : forma2 - par chave:valor
console.log( "Percorrendo map utilizando for...of e par chave:valor forma 2" );
for( let [ chave, valor ] of map3.entries() ){
    console.log( `${ chave } : ${ valor } ` );
}

// Percorrendo Map utilizando for ... of : forma 3 - somente chaves:
console.log( "Percorrendo map utilzando for...of apenas chaves " );
for( let chave of map3.keys() ){
    console.log( `${ chave } ` ); 
}

// Percorrendo Map utilizando for ... of : forma 3 - somente valores:
console.log( "Percorrendo map utilzando for...of apenas valores " );
for( let valor of map3.values() ){
    console.log( `${ valor } `);
}

// Percorrendo Map utilizando forEach()
console.log( "Percorreendo map utilizando forEach() ")
map3.forEach( ( valor, chave ) => {
    // Lembrando que como chave pode ter tipos diferentes podemos fazer ações mais coordenadas relacionadas a cada tipo difrente de chave.
    console.log( `${ chave } : ${ valor }`)
} , map3 )

// Testando Maps de Objetos:
let ObjectMaps = new Map();

let object1 = {
    nome: "Nome1",
    anoConstrucao: 1996,
    numeroDeArvores: 50000,
    area: 7500000
}

let object2 = {
    nome: "Nome2",
    anoConstrucao: 2000,
    numeroDeArvores: 4500,
    area: 10000
}

let propriedadesObjeto1 = Object.getOwnPropertyNames( object1 );
let [ propriedade1 , propriedade2, propriedade3, propriedade4 ] = propriedadesObjeto1;


ObjectMaps.set( propriedade1, object1.nome );
ObjectMaps.set( propriedade2 , object1.anoConstrucao );
ObjectMaps.set( propriedade3 , object1.numeroDeArvores );
ObjectMaps.set( propriedade4, object1.area );

ObjectMaps.set( object2, object2.nome );
ObjectMaps.set( object2, object2.anoConstrucao );
ObjectMaps.set( object2, object2.numeroDeArvores );
// ObjectMaps.set( object2, object2.area );

console.log( ObjectMaps );

let arrayMap = Array.from( ObjectMaps );
console.log( arrayMap );