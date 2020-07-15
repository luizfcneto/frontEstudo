// import { add, multiply } from "./views/searchView";
// import { id } from "./views/searchView";
import string from "./models/Search";
// console.log( add( 1, 5 ), multiply( id, 10 ), id, string );

// renomeando modulos para outro nome
// import { add as adiciona, multiply as multiplica, id as ID } from "./views/searchView";
// console.log( adiciona( 1, 5 ), multiplica( ID, 10 ), ID, string );

// Importando todos os módulos como um Componente:
import * as searchView from "./views/searchView";

console.log( string );
console.log( searchView.add( 1, 5 ), searchView.multiply( searchView.id, 0 ), searchView.id, string );


