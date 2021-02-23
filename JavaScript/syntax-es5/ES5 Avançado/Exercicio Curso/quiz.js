/* 
        Quiz Game
    Autor: Luiz Fernando( luizfcneto )
    Email: luizfcneto123@gmail.com

    Descrição: Fazer um jogo de quiz com perguntas
    

*/

//Q01.0: Função anonima Constructor com métodos implementados nele.
// var Questao = ( function( enunciado, opcoes, gabarito ){
//     this.enunciado = enunciado;
//     this.opcoesResposta = opcoes;
//     this.gabarito = gabarito;

//     this.exibirQuestao = function(){
//         console.log( this.enunciado );
//         for( var i = 0; i < this.opcoesResposta.length; i++ ){
//             console.log( i + ": " + this.opcoesResposta[ i ] );
//         }
        
//     }

//     this.corrige = function( resposta ){
//         if( resposta === this.gabarito )
//             console.log( "Acertou!" );
        
//         else
//             console.log( "Errrrrrou" );
    
//     }

// });

// Q01.1 Função constructor Questao implementando métodos nele.
// function Questao( enunciado, opcoes, gabarito  ){
//     this.enunciado = enunciado;
//     this.opcoesResposta = opcoes;
//     this.gabarito = gabarito;

//     //Implementando o método exibirQuestao na função construtor Questao
//     this.exibirQuestao = function(){
//         console.log( this.enunciado );
//         for( var i = 0; i < this.opcoesResposta.length; i++ ){
//             console.log( i + ": " + this.opcoesResposta[ i ] );
//         }
        
//     }

//     //Implementando o método que corrige a questão na função construtor Questao
//     this.corrige = function( resposta ){
//         if( resposta === this.gabarito )
//             console.log( "Acertou!" );
        
//         else
//             console.log( "Errrrrrou" );
    
//     }
// };

//Q01.2 Função Constructor Questao + adicionando métodos por prototype.
// function Questao( enunciado, opcoes, gabarito ){
//     this.enunciado = enunciado;
//     this.opcoesResposta = opcoes;;
//     this.gabarito = gabarito;

// } 

// //adicionando o método exibirQuestao via prototype.
// Questao.prototype.exibirQuestao = function() {
//     console.log( this.enunciado );
    
//     for( var i = 0; i < this.opcoesResposta.length; i++ ){
//         console.log( i + ": " + this.opcoesResposta[ i ] );
//     }
// };

// Questao.prototype.corrige = function(){

//     if( resposta === this.gabarito ){
//         console.log( "Acertou!" );
//     }        
//     else{
//         console.log( "Errrrrrou" );
//     }

// };

//Q02: Criar perguntas
// var pergunta01 = new Questao( "P: Qual o meu maior medo ?", [ "altura", "barata", "cobra" ], 0 );
// var pergunta02 = new Questao( "P: Qual o meu heroi preferido ?", [ "Batman", "Dr. Estranho", "Homem-Aranha" ], 1 );
// var pergunta03 = new Questao( "P: Qual a minha maior dificuldade ?", [ "Foco", "Me abrir com pessoas", "Praticar Esportes" ], 0 );
// var pergunta04 = new Questao( "P: Estou gostando de estudar javascript? ", [ "sim", "não", "gosto, mas tenho dificuldade em criar rotina e usá-lo" ], 2 );
// var pergunta05 = new Questao( "P: Qual destas áreas de T.I eu tenho mais interesse em estudar no momento?", [ "Banco de Dados(Big Data)", "Desenvolvimento Web( Javascript )" , "Machine Learning" ], 1 );


// //Q03: adicionar perguntas criadas em um Array:
// var arrayPerguntas = [ pergunta01, pergunta02, pergunta03, pergunta04, pergunta05 ];

// //Q04: Gera um numero aleatório, que irá representar o index do array de perguntas, numero retornado será a pergunta selecionada para a resposta.
// function geraNumeroAleatorio(){
//     return Math.floor( Math.random() * arrayPerguntas.length );;
// }

// var indexPergunta = ( geraNumeroAleatorio() );
// arrayPerguntas[ indexPergunta ].exibirQuestao();

// // console.log( arrayPerguntas[ indexPergunta ].exibirQuestao() );

// //Q05: Usar o prompt para coletar a resposta do usuário
// var resposta = parseInt( prompt( "Responda a Pergunta no Console:" ) );
// console.log( "Sua resposta: " + resposta );

// //Q06: Verificar se a resposta está certa e printar a resposta no console.
// arrayPerguntas[ indexPergunta ].corrige( resposta );


//Q07: Para tornar todo o código privado, encapsulamos ele todo em uma unica função IFEE deste modo:
( function (){
    function Questao( enunciado, opcoes, gabarito ){
        this.enunciado = enunciado;
        this.opcoesResposta = opcoes;;
        this.gabarito = gabarito;
    
    } 
    
    //adicionando o método exibirQuestao via prototype.
    Questao.prototype.exibirQuestao = function() {
        console.log( this.enunciado );
        
        for( var i = 0; i < this.opcoesResposta.length; i++ ){
            console.log( i + ": " + this.opcoesResposta[ i ] );
        }
    };
    
    Questao.prototype.corrige = function(){
    
        if( resposta === this.gabarito ){
            console.log( "Acertou!" );
        }        
        else{
            console.log( "Errrrrrou" );
        }
    
    };
    
    //Q02: Criar perguntas
    var pergunta01 = new Questao( "P: Qual o meu maior medo ?", [ "altura", "barata", "cobra" ], 0 );
    var pergunta02 = new Questao( "P: Qual o meu heroi preferido ?", [ "Batman", "Dr. Estranho", "Homem-Aranha" ], 1 );
    var pergunta03 = new Questao( "P: Qual a minha maior dificuldade ?", [ "Foco", "Me abrir com pessoas", "Praticar Esportes" ], 0 );
    var pergunta04 = new Questao( "P: Estou gostando de estudar javascript? ", [ "sim", "não", "gosto, mas tenho dificuldade em criar rotina e usá-lo" ], 2 );
    var pergunta05 = new Questao( "P: Qual destas áreas de T.I eu tenho mais interesse em estudar no momento?", [ "Banco de Dados(Big Data)", "Desenvolvimento Web( Javascript )" , "Machine Learning" ], 1 );
    
    
    //Q03: adicionar perguntas criadas em um Array:
    var arrayPerguntas = [ pergunta01, pergunta02, pergunta03, pergunta04, pergunta05 ];
    
    //Q04: Gera um numero aleatório, que irá representar o index do array de perguntas, numero retornado será a pergunta selecionada para a resposta.
    function geraNumeroAleatorio(){
        return Math.floor( Math.random() * arrayPerguntas.length );;
    }
    
    var indexPergunta = geraNumeroAleatorio();
    arrayPerguntas[ indexPergunta ].exibirQuestao();
    
    // console.log( arrayPerguntas[ indexPergunta ].exibirQuestao() );
    
    //Q05: Usar o prompt para coletar a resposta do usuário
    var resposta = parseInt( prompt( "Responda a Pergunta no Console:" ) );
    console.log( "Sua resposta: " + resposta );
    
    //Q06: Verificar se a resposta está certa e printar a resposta no console.
    arrayPerguntas[ indexPergunta ].corrige( resposta );

})();


