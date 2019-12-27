/*
    Descrição:
        Fazer uma função estatica em js da classe String - não recebe nenhum parametro
        uma string irá utilizar essa função
        a função deve colocar todo o inicio de palavra começando com letra maiuscula.

    Exemplo:
        entrada: "meu pastel é mais barato".
        saida: "Meu Pastel É Mais Barato".

String:
    https://www.w3schools.com/js/js_string_methods.asp

*/

//Minha solução:
String.prototype.toJadenCase = function () {
    let auxString = this.valueOf();
    let ans = "";
    
    console.log( "Frase fornecida: " + auxString );

    for( let i = 0; i < auxString.length; i++ ){
        
        if( i === 0 && auxString[i] !== auxString[i].toUpperCase() ){
            ans += auxString[i].toUpperCase();
            continue;

        }else if( auxString[ i - 1 ] === " " && auxString[i] !== auxString[i].toUpperCase() ){
            ans += auxString[i].toUpperCase();
            continue;
        
        }else if( ( auxString[ i -1 ] === " " || i === 0 ) && auxString[i] === auxString[i].toUpperCase() ){
            ans += auxString[i];
            continue;
        
        }else{
            ans += auxString[i].toLowerCase();
        }
        
    }

    return ans;
};

console.log( "meu pastel é mais barato".toJadenCase() );
console.log( "e se eU tesTar DesSA FoRMa?".toJadenCase() ); 

//Outras soluções:
/* Com Regex:
String.prototype.toJadenCase = function () {
  return this.replace( /( ^|\s )[a-z]/g, function( x ){ return x.toUpperCase(); } );
}; 
*/

// String.prototype.toJadenCase = function () { 
//     return this.split(" ").map(function(word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
