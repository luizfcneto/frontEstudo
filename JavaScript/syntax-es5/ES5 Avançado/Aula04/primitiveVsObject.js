/*************** Tipos Primitivos Vs Object *************** 
 *   Espaço de memória alocado com cópia de valor nele guardado vs Referência para algum outro espaço 
 *  de memória alocado 
 * 
 */

//Declarando duas variaveis, numero1 com atribuição de um numero: 23 e outra (numero2) que atribui o mesmo conteudo de numero1 
var numero1 = 13;
var numero2;
 
//atribuição simples de dois numeros inteiros ( primitivo );
numero2 = numero1;

console.log( "numero1: ");
console.log( numero1 );

console.log( "numero2: " );
console.log( numero2 );

//Fazendo o mesmo que acima, porém com objetos.
var objeto1 = {
    nome: "Luiz Fernando"
};

//objeto2 aponta para a mesma referencia de objeto1, logo o que for alterado na referencia de objeto1 ou objeto2 será modificado no endereço de memória onde ambos apontam.   
var objeto2 = objeto1;

console.log( objeto1.nome, objeto2.nome)
 
objeto2.nome = "Rodrigo";
console.log( "Alterando objeto2.nome de \"Luiz Fernando\" para \"Rodrigo\" ");
console.log( objeto1.nome, objeto2.nome );


//testando passagem de parametros de funções para os dois tipos de variáveis:
function alteraDados( alteraNumero, alteraNome ){
    
    /*passagem de parametro por valor ( Primitivo ): é alocado 
    outro espaço de memória chamado alteraNumero dentro do 
    escopo desta função. Logo numero1 não sofre alteração 
    alguma. Toda a modificação que ocorrer em alteraNumero
    estará apenas modificando esta variável local.
    */
    alteraNumero = 50;

    /*passagem por referência ( Objeto ): A referencia para o
    espaço de memória alocado para o objeto é passado como 
    parametro para a função, logo toda a modificação feita 
    a partir dessa referência, será modificada fora do escopo 
    dessa função. Pois alteramos diretamente pela referência 
    o espaço de memória alocado em questão.
    Logo: alteraNome é um objeto que aponta(referencia) para
    o mesmo espaço de memória apontado( referenciado ) por objeto2
    */
    alteraNome.nome = "Josue da Joatinga";
    
}

console.log( "numero1: [pre funcao]" );
console.log( numero1 );

//passagem de parametro do numero1 é por valor. 
alteraDados( numero1, objeto2 );

console.log( "numero1: [pos funcao]" );
console.log( numero1 );

console.log( "objeto1.nome/objeto2.nome: " );
console.log( objeto2.nome ); 