/*****************Exercicio final Seção 2*****************
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: luizfcneto123@gmail.com  
 *  Descrição:
 *      Parte1:
 *          1: Criar um objeto com um array para o valor das contas
 *          2: Adicionar o método para calcular a gorjeta // calculo especifico da familia 1)
 *          2.1: Esse método deve incluir um loop para iterar todas as contas pagas e as gorjetas calculadas
 *          2.2: Para a saída, crie um novo array contendo todas as gorjetas, e outro array contendo todos os pagamentos finais ( conta + gorjeta ).
 *      
 *      Parte 2: 
 *          1: Implementar a mesma coisa que a parte 1, só que utilizando outro calculo 
 *              para as gorjetas ( outra familia )
 *          
 *          2: Criar uma função ( não um método ) para calcular a média do array de gorjetas.
 *          3: Calcular a média de gorjetas para cada familia
 *          4: Printar no console qual familia pagou a maior gorjeta na média.
 * 
 */         

 //Resolução 1: Desenvolvendo uma classe familia
// class Familia{
//     nome = null;
//     contas = null;
//     contaFinal = null;
//     gorjetas = null;

//     //método construtor
//         constructor( nome, numeroContas ){
//             this.nome = nome;
//         this.contas = new Array( numeroContas );
//         this.contaFinal = new Array( numeroContas );
//         this.gorjetas = new Array( numeroContas );
//     }

//     //método para inicializar/preencher o array de contas
//     preencheContas(){
//         for( var i = 0; i < this.contas.length; i++ ){
//             this.contas[ i ] = parseFloat( prompt( "Familia " + this.nome +
//             " Informe o valor da conta " + ( i + 1 ) + " :" ) );
//         }
//     }

//     //método para calcular cada gorjeta
//     geraGorjeta( gorjeta ){
//         //conta com especificação da familia 1
//         if ( this.contas.length === 5 ){
//             if ( gorjeta < 50 && gorjeta >= 0 ){
//                 return gorjeta * .2;
            
//             }else if ( gorjeta >= 50 && gorjeta < 200 ){
//                 return gorjeta * .15;
    
//             }else if ( gorjeta >= 200 ){
//                 return gorjeta * 0.1;
    
//             }else{
//                 return 0;
//             }

//             //Conta com especificação da familia 2
//         }else if ( this.contas.length === 4 ){
//             if ( gorjeta < 100 && gorjeta >= 0 ){
//                 return gorjeta * .28;
            
//             }else if ( gorjeta >= 100 && gorjeta < 300 ){
//                 return gorjeta * .10;
    
//             }else if ( gorjeta >= 300 ){
//                 return gorjeta * .25;
    
//             }else{
//                 return 0;
//             }
//         }
       
//     }

//     //método preenche vetor gorjeta
//     preencheGorjetas(){
//         for ( var i = 0; i < this.contas.length; i++ ){
//             this.gorjetas[ i ] = this.geraGorjeta( this.contas[ i ] );
//         }
//         this.calculaContaFinal();
//     }

//     //método para calcular cada conta final ( conta + gorjeta )
//     calculaContaFinal(){
//         for( var i = 0; i < this.contas.length; i++ ){
//             this.contaFinal[ i ] = this.gorjetas[ i ] + this.contas[ i ];
//         }
//     }

//     //método para imprimir a conta, gorjetas e conta final da classe familia
//     printaTudo(){
//         console.log( "Contas Familia: "+ this.nome );
        
//         for ( var i = 0; i < this.contas.length; i++ ){
//             console.log( 
//                 "Conta " + ( i + 1 ) + ": " + this.contas[ i ] + 
//                 " Gorjeta " + ( i + 1 ) + ": " + this.gorjetas[ i ] +
//                 " Conta final " + ( i + 1 )+ ": " + this.contaFinal[ i ] + " "
//             );
//         }
//     }
// }
// //Declarando familia 1
// familia1 = new Familia( prompt( "Informe o nome da sua familia: "), 5 );
// var mediaGorjetasFamilia1;
// console.log( familia1 );

// //Preenchendo/inicializando contas familia1
// familia1.preencheContas();
// familia1.preencheGorjetas();
// familia1.printaTudo();

// //Declarando familia 2 
// familia2 = new Familia( prompt( "Informe o nome da sua familia: "), 4 );
// var mediaGorjetasFamilia2;
// console.log( familia2 );

// //Preenchendo/inicializando contas familia2 
// familia2.preencheContas();
// familia2.preencheGorjetas();
// familia2.printaTudo();

// //função calcula média de gorjetas
// function calculaMediaGorjetas( familia ){
//     var resultado = 0;
//     for ( var i = 0; i < familia.gorjetas.length; i++ ){
//         resultado += familia.gorjetas[ i ];
//     }   
//     return resultado / familia.gorjetas.length;
// }

// //atribui a cada familia, a média de gorjetas pagas pelas contas, respectivamente
// mediaGorjetasFamilia1 = calculaMediaGorjetas ( familia1 );
// mediaGorjetasFamilia2 = calculaMediaGorjetas ( familia2 );

// console.log( mediaGorjetasFamilia1, mediaGorjetasFamilia2 );

// if( mediaGorjetasFamilia1 > mediaGorjetasFamilia2 ){
//     console.log( familia1.nome );

// }else if ( mediaGorjetasFamilia1 < mediaGorjetasFamilia2 ) {
//     console.log( familia2.nome );

// }else {
//     console.log( "gorjetas iguais" );
// }


//Resolução 2:
// contas john: 124, 28, 268, 180, 42
// contas mark: 77, 375, 118, 45

var john = {
    contas: [ 124, 28, 268, 180, 42 ],
    gorjetas: [],
    contaFinal: [],
    
    calculaGorjeta : function( gorjeta ){
        if ( gorjeta < 50 && gorjeta >= 0 ){
            return parseFloat( gorjeta * 0.2 );
        
        }else if ( gorjeta >= 50 && gorjeta < 200 ){
            return parseFloat( gorjeta * 0.15 );

        }else if ( gorjeta >= 200 ){
            return parseFloat( gorjeta * 0.1 );

        }else{
            return 0;
        }
    },

    geraContaFinal: function(){
        for( var indice = 0; indice < this.contas.length; indice++ ){
            this.contaFinal[ indice ] = this.contas[ indice ] + this.gorjetas[ indice ];
        }
    },

    preencheGorjetas: function(){
        for( var indice = 0; indice < this.contas.length; indice++ ){
            this.gorjetas[ indice ] = this.calculaGorjeta( this.contas[ indice ] );
        }
        this.geraContaFinal();
    },

    printaTudo: function(){
        for( var i = 0; i < this.contas.length; i++ ){
            console.log( 
                "Conta " + ( i + 1 ) + ": " + this.contas[ i ] + 
                " Gorjeta " + ( i + 1 ) + ": " + this.gorjetas[ i ] +
                " Conta final " + ( i + 1 )+ ": " + this.contaFinal[ i ] + " "
            );

        }
    }

}
console.log( john );
john.preencheGorjetas();
john.printaTudo();

var mark = {
    contas: [ 77, 475, 110, 45 ],
    gorjetas: [],
    contaFinal: [],

    calculaGorjeta: function( conta ){
        if( conta < 100 && conta > 0 ){
            return parseFloat( conta * 0.20 );
        
        }else  if( conta >= 100 && conta < 300 ){
            return parseFloat( conta * 0.10 );
        
        }else if ( conta >= 300 ){
            return parseFloat( conta * 0.25 );
        
        }else {
            return 0;
        }

    },

    geraContaFinal: function(){
        for( var indice = 0; indice < this.contas.length; indice++ ){
           this.contaFinal[ indice ] = this.contas[ indice ] + this.gorjetas[ indice ];
        }
    },

    preencheGorjetas: function(){
        for( var indice = 0; indice < this.contas.length; indice++ ){
            this.gorjetas[ indice ] = this.calculaGorjeta( this.contas[ indice ] );
        }
        this.geraContaFinal();
    },  

    //outra forma de declarar um método de um objeto.
    printaTudo(){
        for( var i = 0; i < this.contas.length; i++ ){
            console.log( 
                "Conta " + ( i + 1 ) + ": " + this.contas[ i ] + 
                " Gorjeta " + ( i + 1 ) + ": " + this.gorjetas[ i ] +
                " Conta final " + ( i + 1 )+ ": " + this.contaFinal[ i ] + " "
            );

        }
    }

}

console.log( mark );
mark.preencheGorjetas();
mark.printaTudo();

function calculaMedia( vetor ){
    var somatorio = 0;
    for( var i = 0; i < vetor.length; i++ ){
        somatorio += vetor[ i ];
    }
    return somatorio / vetor.length; 
}


// markMedia = calculaMedia( mark.gorjetas );
// johnMedia = calculaMedia( john.gorjetas );

//podemos adicionar essas variaveis médias para seus objetos respectivamente, fazendo da seguinte forma:
mark.gorjetaMedia = calculaMedia( mark.gorjetas );
john.gorjetaMedia = calculaMedia( john.gorjetas );

console.log( mark, john );

if( mark.gorjetaMedia > john.gorjetaMedia ){
    console.log( "Mark tem um gasto de média de gorjetas maior que o John! " );
    console.log( mark.gorjetaMedia );

}else if( john.gorjetaMedia > mark.gorjetaMedia ){
    console.log( "John tem um gasto em média de gorjetas maior que o Mark! " );
    console.log( john.gorjetaMedia );

}else{
    console.log( "Ambos tem um gasto em média de gorjetas iguais! " );
}