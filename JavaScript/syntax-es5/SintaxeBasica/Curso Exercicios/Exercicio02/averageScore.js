/*******************Exercicio 02*******************
    Autor: Luiz Fernando ( luizfcneto )
    Email: Luizfcneto123@gmail.com
    Descrição:
        O script receberá três pontuações de cada time de basquete, 
        irá calcular a média de cada time e irá informar qual time teve
        a maior média de pontuação.
        Nesse script irei pegar apenas dois times.

        Extra: Adicionando um time a mais na comparação.
*/

//variaveis do time 1:
var nomeTime1;
var p1Jogo1, p1Jogo2, p1Jogo3;
var mediaTime1;

//leitura nome e pontos do time 1:
nomeTime1 = prompt( "Informe o nome do time 1: ");
p1Jogo1 = parseInt( prompt( "Informe a pontuação 1 do time " + nomeTime1 ), 10 );
p1Jogo2 = parseInt( prompt( "Informe a pontuação 2 do time " + nomeTime1 ), 10 );
p1Jogo3 = parseInt( prompt( "Informe a pontuação 3 do time " + nomeTime1 ), 10 );

console.log ( nomeTime1 + " ");
console.log ( "Jogo 1: " + p1Jogo1 + "\t Jogo 2: " + p1Jogo2 + "\t Jogo 3: " + p1Jogo3 );

mediaTime1 = ( p1Jogo1 + p1Jogo2 + p1Jogo3 ) / 3;
console.log ( mediaTime1 );

//variaveis do time 2:
var nomeTime2;
var p2Jogo1, p2Jogo2, p3Jogo3;
var mediaTime2;

//leitura nome e pontos do time 2:
nomeTime2 = prompt( "Informe o nome do time 2: " );
p2Jogo1 = parseInt( prompt( "Informe a pontuação 1 do time " + nomeTime2 ), 10 );
p2Jogo2 = parseInt( prompt( "Informe a pontuação 2 do time " + nomeTime2 ), 10 );
p2Jogo3 = parseInt( prompt( "Informe a pontuação 3 do time " + nomeTime2 ), 10 );

console.log ( nomeTime2 + " ");
console.log ( "Jogo 1: " + p2Jogo1 + "\t Jogo 2: " + p2Jogo2 + "\t Jogo 3: " + p2Jogo3 );

mediaTime2 = ( p2Jogo1 + p2Jogo2 + p2Jogo3) / 3.0;
console.log ( mediaTime2 );

//variaveis do time 3:
var nomeTime3;
var p3Jogo1, p3Jogo2, p3Jogo3;
var mediaTime3;

//leitura nome e pontos do time 3:
nomeTime3 = prompt( "Informe o nome do time 3: " );
p3Jogo1 = parseInt( prompt( "Informe a pontuação 1 do time " + nomeTime3 ), 10 );
p3Jogo2 = parseInt( prompt( "Informe a pontuação 2 do time " + nomeTime3 ), 10 );
p3Jogo3 = parseInt( prompt( "Informe a pontuação 3 do time " + nomeTime3 ), 10 );

console.log ( nomeTime3 + " ");
console.log ( "Jogo 1: " + p3Jogo1 + "\t Jogo 2: " + p3Jogo2 + "\t Jogo 3: " + p3Jogo3 );

mediaTime3 = ( p3Jogo1 + p3Jogo2 + p3Jogo3) / 3.0;
console.log ( mediaTime3 );



if ( mediaTime1 > mediaTime2 && mediaTime1 > mediaTime3 ) {
    console.log("time: " + nomeTime1 + " média: " + mediaTime1 + " tem a pontuação maior! ");
    alert("time: " + nomeTime1 + " média: " + mediaTime1 + " tem a pontuação maior! ")

} else if ( mediaTime2 > mediaTime1 && mediaTime2 > mediaTime3 ) {
    console.log("time: " + nomeTime2 + " média: " + mediaTime2 + " tem a pontuação maior! ");
    alert("time: " + nomeTime2 + " média: " + mediaTime2 + " tem a pontuação maior! ");

} else if ( mediaTime3 > mediaTime1 && mediaTime3 > mediaTime2 ){
    console.log("time: " + nomeTime3 + " média: " + mediaTime3 + " tem a pontuação maior! ");
    alert("time: " + nomeTime3 + " média: " + mediaTime3 + " tem a pontuação maior! ")

} else{
    console.log ( "Teve Empate!" );
    alert( "Teve empate! " );
}
