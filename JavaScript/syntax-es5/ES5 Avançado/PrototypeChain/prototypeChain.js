/***** Prototype Chain 
 *  
 */

var Pessoa = function ( nome, anoNascimento, profissao ){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;

}

Pessoa.prototype.calculaIdade = function(){
    return 2019 - this.anoNascimento;
}

//Printando Constructor Pessoa:
console.log( "Printando Construtor Pessoa: " );
console.log( Pessoa );

//Printando atributos adicionados à propriedade prototype de Pessoa:
console.log( "Pessoa.prototye: " ); 
console.log( Pessoa.prototype );

//Instanciando um Objeto da(o) Classe/Constructor/Prototype chamado luiz:
var luiz = new Pessoa( "Luiz Fernando", 1996, "developer" );

//Printando objeto luiz do Construtor/Prototype/Classe Pessoa
console.log( "Objeto luiz do Constructor Pessoa: " );
console.log( luiz );

//Printando __.proto__, atributo de prototype que esse constructor herda de outros objetos
console.log( "propriedade __proto__ contendo todos os métodos e atributos que luiz herdou de outros objetos" );
console.log( luiz.__proto__ );

//Printando para mostrar que o atributo prototype de um Constructor é igual ao atributo do objeto instanciado desse Constructor Pessoa
console.log( "Atributo prototype do Construtor Pessoa é igual ao atributo __proto__ do objeto instanciado do construtor Pessoa? " );
console.log( Pessoa.prototype === luiz.__proto__ );

//Verifica se o atributo "nome" do objeto luiz é dele próprio:
console.log( "O atributo \"nome\" do objeto luiz instanciado do construtor Pessoa é seu próprio?" );
console.log( luiz.hasOwnProperty("nome") );

//Verifica se o atributo "valueOf" do objeto luiz é dele próprio:
console.log( "O atributo \"valueOf\" do objeto luiz instanciado do construtor Pessoa é seu próprio?" );
console.log( luiz.hasOwnProperty( "valueOf" ) );

var luizV = [ "Luiz Fernando", 23, "developer" ];
//Printando vetor luizV
console.info( luizV );

//Verifica se o atributo "length" do objeto luiz é dele próprio:
console.log( "O atributo \"length\" do objeto luizV instanciado do construtor Array é seu próprio?" );
console.log( luizV.hasOwnProperty( "length" ) );