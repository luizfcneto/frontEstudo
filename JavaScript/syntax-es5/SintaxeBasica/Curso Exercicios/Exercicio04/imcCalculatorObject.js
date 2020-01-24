/*****************Exercicio 04*****************
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: luizfcneto123@gmail.com  
 *  Descrição:
 *      Fazer um script do mesmo exercício 1, de calcular o indice de massa corporal
 *      de duas pessoas, só que utilizando as propriedades de objeto
 *          - Criando atributos de nome, massa e altura
 *          - E método para gerar o imc daquele objeto.
 *      
 */

// //Método 1: Criando objeto de cada pessoa 
// var pessoa1 = {
//     nome: null,
//     massa: null,
//     altura: null,

//     calculaIMC: function(){
//         this.imc = this.massa / ( this.altura * this.altura ); 
//     },

//     pessoa1: function(){
//         this.nome = prompt(" Informe o nome da pessoa 1: ");
//         this.massa = parseFloat( prompt( "Informe a massa do(a): " + this.nome + " em kg.") );
//         this.altura = parseFloat( prompt( "Informe a altura do(a): " + this.nome + " em m" ) );
//     },

//     informaIMC: function(){
//         if ( this.imc < 18.5 ){
//             this.imcInfo = "Abaixo do peso";
        
//         }else if ( this.imc >= 18.5 && this.imc < 24.9 ){
//             this.imcInfo = "Peso normal";

//         }else if ( this.imc >= 24.9 && this.imc < 29.9  ){
//             this.imcInfo = "Sobrepeso";
        
//         }else if ( this.imc >= 29.9 && this.imc < 34.9  ){
//             this.imcInfo = "Obesidade Grau 1";

//         }else if ( this.imc >= 34.9 && this.imc < 39.9 ){
//             this.imcInfo = "Obesidade Grau 2";           
        
//         }else{
//             this.imcInfo = "Obesidade Grau 3";
//         }
//     }
// };

// //chamando método que calcula o IMC, e a informação do IMC
// pessoa1.pessoa1();
// pessoa1.calculaIMC();
// pessoa1.informaIMC();
// console.log ( pessoa1 );

// //Imprimindo IMC da pessoa 1:
// console.log( "IMC do(a): " + pessoa1.nome );
// console.log( pessoa1.imc );
// console.log( "resultado: "+ pessoa1.imcInfo );

// //Criando objeto de pessoa 2 
// var pessoa2 = {
//     nome: null,
//     massa: null,
//     altura: null,

//     calculaIMC: function(){
//         this.imc = this.massa / ( this.altura * this.altura ); 
//     },

//     pessoa2: function(){
//         this.nome = prompt(" Informe o nome da pessoa 2: ");
//         this.massa = parseFloat( prompt( "Informe a massa do(a): " + this.nome + " em kg.") );
//         this.altura = parseFloat( prompt( "Informe a altura do(a): " + this.nome + " em m" ) );
//     },

//     informaIMC: function(){
//         if ( this.imc < 18.5 ){
//             this.imcInfo = "Abaixo do peso";
        
//         }else if ( this.imc >= 18.5 && this.imc < 24.9 ){
//             this.imcInfo = "Peso normal";

//         }else if ( this.imc >= 24.9 && this.imc < 29.9  ){
//             this.imcInfo = "Sobrepeso";
        
//         }else if ( this.imc >= 29.9 && this.imc < 34.9  ){
//             this.imcInfo = "Obesidade Grau 1";

//         }else if ( this.imc >= 34.9 && this.imc < 39.9 ){
//             this.imcInfo = "Obesidade Grau 2";           
        
//         }else{
//             this.imcInfo = "Obesidade Grau 3";
//         }
//     }
// };

// //chamando método que calcula o IMC
// pessoa2.pessoa2();
// pessoa2.calculaIMC();
// pessoa2.informaIMC();
// console.log( pessoa2 );

// //imprimindo IMC da pessoa 2
// console.log( "IMC do(a) " + pessoa2.nome );
// console.log( pessoa2.imc );
// console.log( "resultado: "+ pessoa2.imcInfo );

//Método 2: Utilizando uma classe Pessoa
class Pessoa {
    nome = null;
    altura = null;
    massa =  null;

    calculaIMC(){
        this.imc = this.massa /  ( this.altura * this.altura );
    };

    constructor(){
        this.nome = prompt(" Informe o nome da pessoa: ");
        this.massa = parseFloat( prompt( "Informe a massa do(a): " + this.nome + " em kg.") );
        this.altura = parseFloat( prompt( "Informe a altura do(a): " + this.nome + " em m" ) );
    };

    informaIMC(){
        if ( this.imc < 18.5 ){
            this.imcInfo = "Abaixo do peso";
        
        }else if ( this.imc >= 18.5 && this.imc < 24.9 ){
            this.imcInfo = "Peso normal";

        }else if ( this.imc >= 24.9 && this.imc < 29.9  ){
            this.imcInfo = "Sobrepeso";
        
        }else if ( this.imc >= 29.9 && this.imc < 34.9  ){
            this.imcInfo = "Obesidade Grau 1";

        }else if ( this.imc >= 34.9 && this.imc < 39.9 ){
            this.imcInfo = "Obesidade Grau 2";           
        
        }else{
            this.imcInfo = "Obesidade Grau 3";
        }
    }

}

//chama método de construção que irá atribuir os atributos do Objeto Pessoa
var pessoa1 = new Pessoa();
var pessoa2 = new Pessoa();

//Calcula IMC, gera a informação de acordo com o IMC e imprime
pessoa1.calculaIMC();
pessoa1.informaIMC();

console.log( pessoa1 );

//Calcula IMC, gera a informação de acordo com o IMC e imprime
pessoa2.calculaIMC();
pessoa2.informaIMC();
console.log( pessoa2 );