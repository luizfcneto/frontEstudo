/*  Função Constructor 
    
*/

//Declaração de objeto literal

var luiz = {
    nome: "Luiz",
    anoNascimento: 1996,
    profissao: "developer"

};
console.log( luiz );


//Constructor Function: Forma padrão de declarar a classe/Construtor Pessoa. ( Pattern - default )
var Pessoa = function( nome, anoNascimento, profissao ){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;


    //método calcularIdade() declarado no Constructor:
    // this.calcularIdade = function(){
    //     return 2019 - this.anoNascimento;
    // }

}
/*
    HERANÇA: Adicionando diretamente o método que deseja herdar no atributo prototype do Construtor.
    Uma das formas de implementar herança entre objetos
*/
//Adicionando o método calcularIdade() no Prototype do Constructor Pessoa:
Pessoa.prototype.calcularIdade = function(){
    return 2019 - this.anoNascimento;
}

console.log( Pessoa.prototype );

var rodrigo = new Pessoa( "Rodrigo", 2000, "Estudante" );
console.log( rodrigo );

console.log( rodrigo.calcularIdade() ); 

//  Testando
// var Atleta = function( qtdMedalhasOuro, participacoesOlimpicas, autorizadoOlimipiada2016 ){
//     this.qtdMedalhasOuro = qtdMedalhasOuro;
//     this.participacoesOlimpicas = participacoesOlimpicas;
//     this.autorizadoOlimipiada2016 = autorizadoOlimipiada2016;

// }

// Pessoa.prototype.olimipiadasParticipadas = function(){
//     return this.participacoesOlimpicas;
// }

// Pessoa.prototype.qtdMedalhasOuro;

// console.log( rodrigo.olimipiadasParticipadas() );
// rodrigo.qtdMedalhasOuro = 10;
// console.log( rodrigo.qtdMedalhasOuro );