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

console.log( "Vetor de anos: " + anos );
console.log( "Vetor de idades: " + idades );
console.log( "Vetor de idades maior que 18: " + maiorIdade );

// Funcoes Anonimas em retorno de outras funções
console.log("__________________________Função Anonima:__________________________ " );

//declarando uma função anonima na variavel perguntaEntrevista que tem como
// parametro da função a variavel "profissao"
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

// var perguntaProfessor = perguntaEntrevista( "professor" )( "Valeria" );
var perguntaProfessor = perguntaEntrevista( "professor" );
perguntaProfessor( "Valeria" );

var pergunta = perguntaEntrevista()( "Ze tuberculo" );

var perguntaBibliotecaria = perguntaEntrevista( "bibliotecaria" )( "Renata" );


// Immediately Invoked Function Expressions ( IIFE )
console.log("__________________________IIFE:__________________________ " );

( function (){
    var numeroAleatorio = Math.trunc( Math.random() * 10 );
    console.log( numeroAleatorio );
})();

// comando abaixo gera erro, pois numeroAleatorio não é acessivel. 
// Está fora do escopo de sua declaração. 
// console.log( numeroAleatorio ); 

var multiplica = ( function( num1, num2 ) {
    return num1 * num2;
});

console.log( multiplica( 2, 5 ) );


// Closure functions, quando temos um retorno de uma função da 
// função aposentadoria, temos um closure, tudo que está dentro dele 
// 
console.log("__________________________Closure:__________________________ " );

function aposentadoria( idadeMinima ){
    var texto = " anos para se aposentar. ";

    //função anonima
    return function( anoNascimento ){
        var idade = 2019 - anoNascimento;
        console.log( "Faltam " + ( idadeMinima - idade ) + texto );
        return idadeMinima - idade;
    }

}

// O comando abaixo da erro, pois idade está dentro de uma 
// closure que pertence a outro escopo
// console.log( idade );

var aposentadoriaBr = aposentadoria( 62 )( 1996 );
console.log( aposentadoriaBr + " no Brasil" );

var aposentadoriaUSA = aposentadoria( 65 )( 1996 );
console.log( aposentadoriaUSA + " nos EUA" );

var aposentadoriaIceLand = aposentadoria( 67 )( 1996 );
console.log( aposentadoriaIceLand + " em IceLand" );


function entrevista( profissao ){

    // Closure
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

// Outro Exemplo de Closure
function Pessoa( salario ){
    
    //Variaveis e métodos privados:
    this.salario = salario;

    function setSalario( salarioNovo ) {
        this.salario = salarioNovo;
    };

    // Só posso usar internamente
    // setSalario( salario );

    // Variaveis e métodos públicos:
    return {

        //Função getSalario() é publica e pode ser executada fora do objeto pessoa
        getSalario() {
            return salario;
        }        

    }

}
let luiz = new Pessoa( 2200 );

console.log( luiz );

// Por mais que eu consiga alterar o salario publicamente abaixo
luiz.salario = 500;
console.log( luiz.salario );

// Da erro, é uma função privada
// luiz.setSalario( 1200 );

//A variavel privada permanece intacta
console.log( luiz.getSalario() );