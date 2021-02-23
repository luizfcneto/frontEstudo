/******************* Object.create() *******************
 *  
 */

 //declarando objeto pessoaProto contendo uma função calcularIdade()
var pessoaProto = {
    calcularIdade: function(){
       return 2019 - this.idade;
    }

};

/*  
    Instanciando um objeto novo chamado luiz utilizando o método Object.create( parametro1 )
    parametro1 é um objeto que contém o método calcularIdade();
    todos os métodos declarados em pessoaProto serão adicionados ao atributo prototype do objeto luiz.
*/
var luiz = Object.create( pessoaProto );
console.log( luiz );

luiz.nome = "luiz";
luiz.idade = 23;
luiz.profissao = "desenvolvedor";

console.log( luiz );


var rodrigo = Object.create( pessoaProto, {
    nome: { value: "rodrigo" },
    idade: { value:  "20" },
    profissao: { value: "estudante" }

});
console.log( rodrigo );






















