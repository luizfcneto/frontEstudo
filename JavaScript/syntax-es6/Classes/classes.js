/*
    Classes
*/

// ES05: Função Construtora:
var Pessoa5 = function( nome, anoNascimento, profissao ){
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.profissao = profissao;
}

Pessoa5.prototype.calculaIdade = function( ){
    var idade = new Date().getFullYear() - this.anoNascimento;
    console.log( idade );
}

var pessoaQualquer = new Pessoa5( "Luiz", 1996, "desenvolvedor" );
console.log( pessoaQualquer );
pessoaQualquer.calculaIdade();

class Pessoa6 {
    // Função construtora, recebe parametros necessários para construir objeto da classe Pessoa6
    constructor( nome, anoNascimento, profissao ){
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    }

    // Método
    calculaIdade() {
        let idade = new Date().getFullYear() - this.anoNascimento;
        console.log( idade );
    }

    // Método estático:
    static olaMundo(){
        console.log( "Olá, Mundo!", "[Método estático]" );
    }
}


// Executando um método Estático. Não precisa de um objeto instanciado para utiliza-lo.
Pessoa6.olaMundo();

let Luiz = new Pessoa6( "Luiz", 1996, "Desenvolvedor" );
console.log( Luiz );
Luiz.calculaIdade();

// Erro, não é possível utilizar um método estático em um objeto instanciado da classe.
// Luiz.olaMundo();

// Getters: Método ( que naverdade é um atributo ) que retorna um valor/propriedade de um objeto
// Setters: Método que altera valor/conteúdo de uma propriedade de um objeto.
/* Parte muito obscura, melhor utilizar métodos gets e setters ao inves da palavra chave get/set 
class Retangulo {
    constructor( altura, largura ){
        this._altura = altura;
        this._largura = largura;

    }

    // método get area()
    get area(){
        // return this.calculaArea();
        return this._area;
    }

    //Método set area()
    set area( areaNova ){
        this._area = this.calculaArea();
    }

    calculaArea(){
        return  this.altura * this.largura;
    }

}

const quadrado = new Retangulo( 4, 4 );
// quadrado.area abaixo é uma propriedade get, e não um método. Por isso não possui ().
console.log( quadrado.area );
console.log( quadrado._area );

*/

class Retangulo {
    constructor( altura, largura ){
        this.altura = altura;
        this.largura = largura;
    }

    getArea(){
        return this.area;
    }

    // Método setArea():
    setArea(){
        this.area = this.calculaArea();
    }

    calculaArea(){
        return  this.altura * this.largura;
    }

}

const retangulo = new Retangulo( 5, 10 );
// getArea indefinido ainda.
// console.log( retangulo.getArea() );

// definindo propriedade area
retangulo.setArea();

console.log( retangulo.getArea() );