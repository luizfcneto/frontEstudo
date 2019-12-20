/*
    Descrição:
        Desenvolver uma função que retorne uma soma resultante de uma série de somas
        até o enésimo numero, fornecido como parametro.

        Regras:
            i   -Resposta deve estar com até no maximo 2 casas decimais e em formato de string
            ii  -Se o valor resultante for 0, o retorno deverá ser 0.
            iii - Somente numeros naturais são permitidos.
            
    i- método toFixed( 2 ) resolve o problema.

    Exemplo:
    Entrada: n = 2
    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + 1/19 + ...
    Saida: 1 + 1/4 = "1.25"

*/

//Minha solução:
function SeriesSum( n ) {
    if( n < 0 ){
        return 0;
    }
    let answer = 0;
    let denominador = 1;
    for( let i = n; i >= 1; i-- ){
        answer += 1 / denominador;
        denominador += 3;    
    }
    answer = answer.toFixed( 2 );
    answer = answer.toString();
    return answer;
}

console.log( SeriesSum( 5 ) );


//Outras Soluções:
//function SeriesSum(n, s = 0) {
//    return n ? SeriesSum( n - 1, s + 1 / ( 3 * n - 2 ) ) : s.toFixed( 2 )
//}

/*
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}
*/