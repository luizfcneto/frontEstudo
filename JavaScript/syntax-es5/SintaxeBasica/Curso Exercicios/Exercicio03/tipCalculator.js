/****************TipCalculator****************
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: luizfcneto123@gmail.com
 *  Descrição: *Criar uma função para calcular a gorjeta que o cliente de um restaurante tem que dar para o garçom
 *      *O cliente visita tres restaurantes distintos.
 *      *O cliente quer dar a gorjeta segundo as regras:
 *          - 20% de gorjeta para contas abaixo de 50
 *          - 15% de gorjeta para as contas que tiverem um valor entre 50 e 200
 *          - 10% de gorjeta para contas com valor acima de 200.
 * 
 *  Entrada: 
 *      nome dos restaurantes visitados 
 *      valores das contas que deram nos restaurantes, respectivamente 
 * 
 *  Saída:    2 arrays:
 *      1- Contendo todas as gorjetas que pagou para cada conta
 *      1- Contendo todos os pagamentos finais ( contas + gorjetas )
 */


// Declarando as variaveis
var nomeRestaurantes = new Array();
var restaurantesContas = new Array();
var gorjetasRestaurantes = new Array();

//preenchendo array do nome de restaurantes
for ( i = 0; i < 3; i++ ){
    nomeRestaurantes[ i ] = prompt( "Informe o nome do restaurante " + ( nomeRestaurantes.length + 1 ) + " : " );
}

//preenchendo array do valor da conta de cada restaurante
for ( i = 0; i < nomeRestaurantes.length; i++ ){
    restaurantesContas[ i ] = prompt( "Informe o valor da conta do restaurante " + nomeRestaurantes[ i ] + " : " );
}

function calculaGorjeta( restaurantesContas ){
    var gorjetas = new Array();

    for ( i = 0; i < restaurantesContas.length; i++ ){
        if ( restaurantesContas[i] < 50 && restaurantesContas[i] > 0 ){
            gorjetas[i] = parseFloat( restaurantesContas[i] ) * 0.2;
        
        }else if ( restaurantesContas[i] >= 50 && restaurantesContas[i] < 200 ){
            gorjetas[i] = parseFloat( restaurantesContas[i] ) * 0.15;
        
        }else if ( restaurantesContas[i] >= 200 ){
            gorjetas[i] = parseFloat( restaurantesContas[i] ) * 0.1;
        
        }else{
            gorjetas[i] = restaurantesContas[i];
        }
        
    }
    return gorjetas;

}

gorjetasRestaurantes = calculaGorjeta( restaurantesContas );

function calculaContaGeral( gorjetasRestaurantes, restaurantesContas ){
    for ( i = 0; i < 3; i++ ){
        restaurantesContas[i] = parseFloat( restaurantesContas[i] )  + parseFloat( gorjetasRestaurantes[i] );

    }
    return restaurantesContas;
}


restaurantesContas = calculaContaGeral( gorjetasRestaurantes, restaurantesContas );



//Imprimindo Saida:
for ( i = 0; i < nomeRestaurantes.length; i++ ){
    console.log( "Restaurante: " + nomeRestaurantes[i] 
    + "- valor total da conta: " + ( restaurantesContas[i] ) + ", gorjeta dessa conta: "
    + ( gorjetasRestaurantes[i] ) +" \n" ); 
}
