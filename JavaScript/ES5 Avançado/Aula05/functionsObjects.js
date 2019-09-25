/*************** Funções Objetos ***************
 */

//Função Callback
console.log("__________________________Funcao Callback:__________________________ " );
var anos = [ 1940, 1945, 1986, 1996, 2000, 2010 ];

//função principal: percorreArray. função callback: funcao
function percorreArray( vetor, funcao ){
    var vetorResposta = [];
    for ( var i = 0; i < vetor.length; i++ ){
        //método push do constructor de Array, adiciona elemento no final 
        // vetorResposta.push( funcao( vetor[ i ] ) );
        vetorResposta[ i ] = funcao( vetor[ i ] );    
    }

    return vetorResposta;
}

//funcao que calcula a idade de um elemento de um array
function calculaIdade( elemento ){
    return 2019 - elemento;
}

//funcao que verifica se cada elemento(idade) é maior que 18 anos 
function verificaMaiorIdade( elemento ){
    return ( elemento >= 18 ) ? true : false;
}

//funcao callback de calcular idade: calculaIdade
var idades = percorreArray( anos, calculaIdade );

//funcao callback de verificar se idade é maior que 18 anos: verificaMaiorIdade
var maiorIdade = percorreArray( idades, verificaMaiorIdade );

console.log( idades );
console.log( maiorIdade );

// Funcoes Anonimas em retorno de outras funções
console.log("__________________________Função Anonima:__________________________ " );

//declarando uma função anonima na variavel perguntaEntrevista que tem como parametro da função a variavel "profissao"
var perguntaEntrevista = function( profissao ) {
    
    //Se a profissao for professor
    if( profissao === "professor" ){
        
        //retornamos uma função anonima com parametro nome
        return function( nome ){
            console.log( "E ai mestre " + nome + ", você leciona qual disciplina?" );
        }

    }else if( profissao === "desenvolvedor" ){

        return function( nome ){
            console.log( nome + " tu desenvolve o que, e em qual linguagem? " );
        }
        
    }else if( profissao === "design" ){

        return function( nome ){
            console.log( nome + ", você é capaz de explicar o que é UX? " );
        }

    }else if( profissao === "bibliotecaria" ){

        return function( nome ){
            console.log( nome + ", já catalogou quantos livros hoje? " );
        }

    }else {

        return function( nome ){
            console.log( "Ola, " + nome + " o que você faz?" );
        }
    }
}

var perguntaProfessor = perguntaEntrevista("professor")("Valeria");

var pergunta = perguntaEntrevista()("Ze tuberculo");

var perguntaBibliotecaria = perguntaEntrevista("bibliotecaria")("Renata");


// Immediately Invoked Function Expressions ( IIFE )
console.log("__________________________IIFE:__________________________ " );

( function (){
    var numeroAleatorio = Math.trunc( Math.random() * 10 );
    console.log( numeroAleatorio );
})();

// comando abaixo gera erro, pois numeroAleatorio não é acessivel. Está fora do escopo de sua declaração. 
// console.log( numeroAleatorio ); 

var multiplica = ( function( num1, num2 ) {
    return num1 * num2;
})( 2, 5 );

console.log( multiplica );


// Closure functions
console.log("__________________________Closure:__________________________ " );

function aposentadoria( idadeMinima ){
    var texto = " anos para se aposentar. ";

    //Closure
    return function( anoNascimento ){
        var idade = 2019 - anoNascimento;
        console.log( "Faltam " + ( idadeMinima - idade ) + texto );
    }

}

var aposentadoriaBr = aposentadoria( 62 )( 1996 );
var aposentadoriaUSA = aposentadoria( 65 )( 1996 );
var aposentadoriaIceLand = aposentadoria( 67 )( 1996 );


function entrevista( profissao ){

    return function( nome ){
        if( profissao ===  "designer" ){
            var msg = ", voce pode me explicar oque é UX?";
            console.log( nome + msg );

        } else if( profissao === "professor" ){
            var msg = ", qual matéria você leciona?";
            console.log( nome + msg );
        
        } else{
            var msg = ", qual a sua profissão?";
            console.log( nome + msg );
        }    

    }

}

var entrevistaProf = entrevista( "professor" )( "Gilberto" );
var entrevista = entrevista()( "Luiz" );

var add = ( function( ){
    var contador = 0;

    return function(){
        contador++;
        console.log( contador );
        return contador;
    }

})();

add();
add();
add();


