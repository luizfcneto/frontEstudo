/*
    Subclasses
*/

// ES05:
// classe pelo formato função construtora.
var pessoa05 = function( nome, anoNascimento ){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
}

// adicionando método na classe pessoa05
pessoa05.prototype.calculaIdade = function(){
    var anoAtual = new Date().getFullYear();
    return anoAtual - this.anoNascimento;
}

// Construindo classe atleta pelo formato função construtora
var atleta05 = function( nome, anoNascimento, profissao, jogosOlimpicos, medalhas ){
    
    // Invocando "super" da função construtora pai, nesse caso pessoa
    pessoa05.call( this, nome, anoNascimento );
    this.profissao = profissao;
    this.jogosOlimpicos = jogosOlimpicos;
    this.medalhas = medalhas;
}

var luiz05 = new atleta05( "Luiz", 1996, "desenvolvedor", 0, 0 );
console.log( luiz05 );

atleta05.prototype = Object.create( pessoa05.prototype );

// ES06:
class Pessoa06 {
    constructor( nome, anoNascimento ){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    calculaIdade(){
        let anoAtual = new Date().getFullYear();
        return anoAtual - anoNascimento;
    }
}

// subclasse atleta que herda propriedades e métodos de pessoa:
class Atleta06 extends Pessoa06 {
    constructor( nome, anoNascimento, profissao, jogosOlimpicos, medalhas ){
        
        // herdando propriedades de pessoa
        super( nome, anoNascimento );

        this.profissao = profissao;
        this.jogosOlimpicos = jogosOlimpicos;
        this.medalhas = medalhas;
    }

    medalhaGanha(){
        this.medals++;
        console.log( this.medalhas );
    }
    
}

const Luiz = new Atleta06( "Luiz", 1996, "desenvolvedor", 0, 0 );
console.log( Luiz );