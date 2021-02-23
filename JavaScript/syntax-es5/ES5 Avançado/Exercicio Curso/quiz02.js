/*
        Quiz Game - II parte
    Autor: Luiz Fernando ( luizfcneto )
    Email: devluizfcneto@gmail.com  
    Descrição: Continuar o jogo Quiz, mas incrementando umas funcionalidades como:
        - Adicionar uma pontuação pro jogador
        - Fazer o jogo continuar gerando perguntas após responder a primeira pergunta;
        - Fazer o jogo parar após digitar "sair" na entrada do jogo.
        - Exibir o placar do jogador no console sempre após uma correção de uma pergunta.
*/

( function() {

    function Questao( enunciado, opcoes, gabarito ){
        this.enunciado = enunciado;
        this.opcoes = opcoes;
        this.gabarito = gabarito;
    
    }   
    
    Questao.prototype.exibirQuestao = function(){
        console.log( this.enunciado );
    
        for( var i = 0; i < this.opcoes.length; i++ ){
            console.log( i + ": " + this.opcoes[ i ] );
        }
    
    }
    
    Questao.prototype.corrigeQuestao = function( resposta, callback ){
        console.log( typeof resposta );
        var pontuacao;

        if( resposta === this.gabarito ){
            console.log( "Acertou!" );
            pontuacao = callback( "true" );
            

        }else{
            console.log( "Errrrrrrou!" );
            pontuacao = callback( "false" );
        }

        this.exibePontuacao( pontuacao );
    
    }
    
    function pontuacaoGeral(){
        var pontuacaoCorrente = 0;

        return function( acertou ){
            if( acertou === "true" ){
                pontuacaoCorrente++;
            }
            return pontuacaoCorrente;
        }

    }

    var mantemPontuacao = pontuacaoGeral();

    Questao.prototype.exibePontuacao = function( pontuacao ){
        console.log( "Pontuação Geral: " + pontuacao );
        console.log( "___________________________________" );

    }

    var pergunta01 = new Questao( "P: Qual o meu maior medo ?", [ "altura", "barata", "cobra" ], 0 );
    var pergunta02 = new Questao( "P: Qual o meu heroi preferido ?", [ "Batman", "Dr. Estranho", "Homem-Aranha" ], 1 );
    var pergunta03 = new Questao( "P: Qual a minha maior dificuldade ?", [ "Foco", "Me abrir com pessoas", "Praticar Esportes" ], 0 );
    var pergunta04 = new Questao( "P: Estou gostando de estudar javascript? ", [ "sim", "não", "gosto, mas tenho dificuldade em criar rotina e usá-lo" ], 2 );
    var pergunta05 = new Questao( "P: Qual destas áreas de T.I eu tenho mais interesse em estudar no momento?", [ "Banco de Dados(Big Data)", "Desenvolvimento Web( Javascript )" , "Machine Learning" ], 1 );
    
    var perguntas = [ pergunta01, pergunta02, pergunta03, pergunta04, pergunta05 ];
    
    function geraIndex(){
        return Math.floor( Math.random() * perguntas.length );
    }
    
    var indexPergunta = geraIndex();
    perguntas[ indexPergunta ].exibirQuestao();
      
    var resposta = prompt( "Responda as perguntas no console: \t\t Para sair digite:\"sair\" " );
    var sair = false;
    
    if( resposta === "sair" ){
        sair = true;
    }
    
    while( sair !== true ){
    
        switch( resposta ){
            case "sair": 
                console.log( "saindo... " );
                sair = true;
                break;
                
            default:
                perguntas[ indexPergunta ].corrigeQuestao( parseInt( resposta ), mantemPontuacao );    
                indexPergunta = geraIndex();
                perguntas[ indexPergunta ].exibirQuestao();
                resposta = prompt( "Responda as perguntas no console: \t\t Para sair digite:\"sair\" ");
             
        }  
    }   

})();
