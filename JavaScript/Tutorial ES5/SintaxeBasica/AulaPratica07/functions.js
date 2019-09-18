/************** Funções ************** 
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: luizfcneto123@gmail.com
 * 
 */
var anoNascimento = prompt ( "Informe o ano em que você nasceu: " );
var idade;

//declaração de funcão com retorno:
function calculaIdade( anoNascimento ){
    return 2019 - anoNascimento;
}

idade = calculaIdade( anoNascimento );

console.log( idade + " anos " );
alert( idade + " anos? " );


//declaração de função sem retorno:
function mostraSoma( numero1, numero2 ){
    alert ( numero1 + numero2 );
    console.log ( "mostraSoma1\n"+ numero1 + numero2 );

}

// chamamos o método sem retorno, sem nenhuma variavel para atribuir valor da função, pois não retorna nada.
mostraSoma( idade, idade );


//Expressões com funções:
// var calculaIdade2 = function( anoNascimento ){
//     return 2019 - anoNascimento;

// }

// console.log ( calculaIdade2( anoNascimento ) ) ;


// var mostraSoma2 = function ( numero1, numero2 ){
//     alert( numero1 + numero2 );
//     console.log( "MostraSoma2 \n" + numero1 + numero2 );
// }

// mostraSoma2( idade, idade );
var suaAtividadeProfissional = function ( nome, profissao ){
    switch( profissao ){
        case "professor":
            return nome + " é " + profissao + ": ensina aos alunos a matéria ";
        
        case "banqueiro": 
            return nome + " é " + profissao + ": fode com a classe trabalhadora.";

        case "motorista":
            return nome + " é " + profissao + ": transporta as pessoas ao seu destino.";

        case "desenvolvedor":
            return nome + " é " + profissao + ": desenvolve varios sistemas picas!";
        
        default:
            return nome + " é " + profissao + ": deve fazer alguma coisa, não é vagabundo!";
    }

}

console.log ( suaAtividadeProfissional( "Luiz", "desenvolvedor" ) );


//Função recursiva calculando potencia:
function calculaPotencia( numero, expoente ){
    if ( expoente == 1 ){
        return 1 * numero; 

    }else {
        return numero * calculaPotencia( numero, expoente - 1 );
    
    }
}

var numero = prompt ( "informe o numero que deseja calcular potência: " );
var expoente = prompt ( "informe a qual numero que " + numero + " será elevado? " ); 
var resultado = calculaPotencia( numero, expoente );

console.log ( "resultado de " + numero + "^" + expoente +":");
console.log ( resultado );


//Função recursiva calculando numero de fibonacci:
var fibonacci = function( numero ){
    
    if ( numero == 0 ){
        return 0;
    
    } else if ( numero == 1 || numero == 2 ){
        return 1;
    
    } else {
        return fibonacci( numero - 1 ) + fibonacci( numero - 2 );
        
    }
}

console.log( fibonacci ( 8 ) );

//fiobonacci numbers: 1, 1, 2, 3, 5, 8, 13, 21, ...