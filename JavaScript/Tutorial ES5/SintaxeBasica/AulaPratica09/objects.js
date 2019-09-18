/**********************Objetos**********************
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: Luizfcneto123@gmail.com
 * 
 */

 var Luiz = {
    esporte: [ "Basquete", "Skate", "Natação" ],
    altura: 1.78,
    primeiroNome: "Luiz Fernando",
    ultimoNome: "Neto",
    profissão: "Estudante",
    doente: false,
    anoNascimento: 1996,

    calculaIdade: function(){
        this.idade = 2019 - this.anoNascimento;
    }

 };

 //manipulação de Objeto pela forma 1
 console.log( Luiz );
 console.log( Luiz.primeiroNome );
 console.log( Luiz.esporte );

 //manipulação de Objeto pela forma 2 
 console.log( Luiz[ "ultimoNome" ] );
 console.log( Luiz[ "doente" ] );
 console.log( Luiz[ "idade" ] );

 Luiz.esporte[ 2 ] = "Handball";
 console.log( Luiz.esporte );
 
 Luiz.profissão = "Desenvolvedor";
 console.log ( Luiz.profissão );
 
 Luiz[ "primeiroNome" ] = "Luiz";
 console.log ( Luiz.primeiroNome );

 Luiz.idade = 1986;
 console.log( Luiz.anoNascimento );

 Luiz.altura = 1.93;
 console.log( Luiz.altura );

 Luiz.profissao = "Jogador de Basquete";
 console.log( Luiz.profissao );

//Objeto sem atribuição, como é a saida:
 var Pessoa = new Object();
 Pessoa.anoNascimento;
 Pessoa.primeiroNome = prompt( "Informa o nome ai Clauderir: " );
 Pessoa.ultimoNome;
 Pessoa.altura;
 Pessoa.profissao;

 console.log( Pessoa );

//Objeto nulo, como é a saida:
 var Joaquina = {
    esporte: null,
    altura: null,
    primeiroNome: null,
    ultimoNome: null,
    profissão: null,
    doente: null,
    anoNascimento: null

 };

 console.log( Joaquina );

 console.log( "Imprimindo idade, sem ter chamado o método de calcularIdade ")
 console.log( Luiz.idade );
 
 console.log( "Fazendo chamada do método calculaIdade: ");
 Luiz.calculaIdade();
 
 console.log( Luiz.idade );