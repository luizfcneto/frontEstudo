/*
Regras Jogo:

- O jogo contém dois jogadores, jogando em rounds
- Em cada turno, um jogador rola um dado quantas vezes desejar. Cada resultado será adicionado à pontuação da rodada;
- Mas, caso o jogador role um 1, Todos os seus pontos da rodada serão perdidos. Depois disso, é a vez do próximo jogador;
- O jogador pode escolher 'hold', que mantém a pontuação da rodada dele e é adicionado à pontuação global. Depois disso, é a vez do oponente.
- O primeiro jogador a alcançar 100 pontos na pontuação GLOBAL, vence o jogo

    Principais funções do jogo:
        roll();
        hold();
        init();

    Funções secundárias do jogo:
        changePlayer();
        generateDice();
        alteraPontuacaoLimite();



    Modificações na Regra do jogo:
    1. O jogador perde sua pontuação total quando rolar 6 duas vezes seguidas.   
    Após isso, é a vez do oponente.     
    DONE;

    2. Adicionar um campo de entrada no HTML onde os jogadores possam definir
    a pontuação que devem atingir para vencer o jogo. 
    DONE;

    3. Adicionar outro dado ao jogo, assim existiram dois dados. 
    O jogador perde a pontuação corrente quando pelo menos um resulta o valor 1.
    DONE;


*/

var dice1Before, dice2Before, currentScore, globalScore, activePlayer, playing, winnerLimitScore;


function init( ){
    playing = true;
    //activePlayer pode conter o valor 0, ou 1. O 0 representa a pontuação do player 1, e o 1: representa do player 2
    activePlayer = 0;
    currentScore = 0;

    //Inicializando jogo:
    globalScore = [ 0, 0 ];

    //Zerando variaveis correspondentes ao valor total de cada jogador:
    // document.querySelector( "#score-0" ).textContent = globalScore[ 0 ];
    // document.querySelector( "#score-1" ).textContent = 0;
    // document.querySelector("#score-1").textContent = 0;
    document.querySelector( "#score-0" ).innerHTML = "<b>" + 0 + "</b>";
    document.querySelector( "#score-1" ).innerHTML = "<b>" + 0 + "</b>";

    //Zerando variaveis correspondentes ao valor corrente de cada jogador:
    document.querySelector( "#current-0" ).innerHTML = "<b>" + 0 + "</b>";
    document.querySelector( "#current-1" ).innerHTML = "<b>" + 0 + "</b>";;

    //Escondendo imagem dos dois dados ao iniciar o jogo:
    document.querySelector( "#dice-0" ).style.display = "none";
    document.querySelector( "#dice-1" ).style.display = "none";

    //Reseta o nome dos dois jogadores, para tirar o "Vencedor"
    document.querySelector( "#name-0" ).innerHTML = "<b>" + "Player 1 " + "</b>";
    document.querySelector( "#name-1" ).innerHTML = "<b>" + "Player 2 " + "</b>";

    document.querySelector( ".player-0-panel" ).classList.remove( "active" );
    document.querySelector( ".player-1-panel" ).classList.remove( "active" );
    
    //retirar a classe Winner do jogador  que ganhou a partida.
    document.querySelector( ".player-0-panel" ).classList.remove( "winner" );
    document.querySelector( ".player-1-panel" ).classList.remove( "winner" );

    document.querySelector( ".player-" + activePlayer + "-panel" ).classList.add( "active" );

    //Definindo pontuação limite do jogo default:
    winnerLimitScore = document.getElementById( "limitScore" ).value
    document.getElementById( "currentLimit" ).innerHTML = winnerLimitScore;
    console.log( document.getElementById( "limitScore" ).value );
}

init();


//função para alterar o player, em caso de player atual tire 1 no dado, ou que o próprio decida guardar pontuação corrente
function changePlayer( activePlayer ){
    if( activePlayer === 0 ){
        activePlayer = 1;
        return activePlayer;

    }else{
        activePlayer = 0;
        return activePlayer;
    }
}

function generateDice(){
    var dice = Math.floor( Math.random() * 6 ) + 1;
    return dice;
}

//Gerando numero do dado aleatóriamente [ao clicar no botao "roll"]:
document.querySelector( ".btn-roll" ).addEventListener( "click", function(){
    if( playing ){
        // var dice = 6;
        var dice1 = generateDice();
        var dice2 = generateDice();

        var diceDOM1 = document.querySelector( "#dice-0" );
        var diceDOM2 = document.querySelector( "#dice-1" );

        //modificar a imagem do dado, de acordo com o resultado aleatorio que cair no dado:
        diceDOM1.src = "dice-" + dice1 + ".png" ;
        diceDOM2.src = "dice-" + dice2 + ".png" ;

        //Mostrar imagem do dado ao ser rolado:
        diceDOM1.style.display = "block";
        diceDOM2.style.display = "block";    
        
        if( dice1 === 1 || dice2 === 1 ){
            currentScore = 0;
            document.querySelector( "#current-" + activePlayer ).textContent = currentScore;

            //remove classe "active" da classe player-activePlayer-panel
            // document.querySelector( ".player-" + activePlayer + "-panel" ).classList.remove( "active" );
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.toggle( "active" );

            activePlayer = changePlayer( activePlayer );

            //adiciona classe "active" da classe player-activePlayer-panel
            // document.querySelector( ".player-" + activePlayer + "-panel" ).classList.add( "active" );
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.toggle( "active" );

            //Esconde imagem do dado quando o jogador acertar 1.
            diceDOM1.style.display = "none";
            diceDOM2.style.display = "none";
            dice1Before = 0;
            dice2Before = 0;

        // Quando jogador rolar dois 6 seguidos pontuação geral dele zera.
        }else if( ( dice1 === 6 || dice2 === 6 ) && ( dice1Before === 6 || dice2Before === 6 ) ){
            //Zera pontuação corrente
            currentScore = 0;
            document.querySelector( "#current-" + activePlayer ).innerHTML = "</b>" + currentScore + "</b>" ;
            
            // Zera Pontuação Total
            globalScore[ activePlayer ] = currentScore;
            document.querySelector( "#score-" + activePlayer ).innerHTML = "<b>" + globalScore[ activePlayer ] + "</b>";

            
            //Altera jogadores
            document.querySelector( ".player-"+ activePlayer + "-panel" ).classList.toggle( "active" );
            activePlayer = changePlayer( activePlayer );
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.toggle( "active" );

            //resenta valor anterior do dado
            dice1Before = 0;
            dice2Before = 0;

        } else{
            currentScore = currentScore + dice1 + dice2 ;
            document.querySelector( "#current-" + activePlayer ).textContent = currentScore;
            dice1Before = dice1;
            dice2Before = dice2;

        }
    }
    

} );

//Armazenando o valor acumulado na pontuação geral [ao clicar no botao "hold"]:
document.querySelector( ".btn-hold" ).addEventListener( "click", function(){
    if( playing ){
        dice1Before = 0;
        dice2Before = 0;

        globalScore[ activePlayer ] += currentScore;
        document.querySelector( "#score-" + activePlayer ).innerHTML = "<b>" + globalScore[ activePlayer ] + "</b>";
        currentScore = 0;
        
        document.querySelector( "#current-" + activePlayer ).innerHTML = "<b>" + currentScore + "</b>";

        if( globalScore[ activePlayer ]  >= winnerLimitScore ){
            document.querySelector( "#name-" + activePlayer ).innerHTML = "<b>" + "WINNER!" + "</b>";
            document.querySelector( "#dice-0" ).style.display = "none";
            document.querySelector( "#dice-1" ).style.display = "none";
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.add( "winner" );
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.remove( "active" );
            
            playing = false;

        }else{
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.remove( "active" );
            activePlayer = changePlayer( activePlayer );
            document.querySelector( ".player-" + activePlayer + "-panel" ).classList.add( "active" );

        }
    }

} );


//Começando um jogo novo [ao clicar no botão "new game"]
document.querySelector( ".btn-new" ).addEventListener( "click", init );

function changeWinnerLimit(){
    if( globalScore[ 0 ] === 0 && globalScore[ 1 ] === 0 ){
        winnerLimitScore = document.getElementById( "limitScore" ).value;
        document.getElementById( "currentLimit" ).innerHTML = "<b>" + winnerLimitScore + "</b>";
        console.log( document.getElementById( "limitScore" ).value );
        
    }


}

//Inicializando jogo
// globalScore = [ 0, 0 ];
// document.querySelector("#score-0").textContent = globalScore[0];
// document.querySelector("#score-1").textContent = globalScore[1];
// document.querySelector("#current-" + globalScore[0] ).textContent = 0;
// document.querySelector("#current-" + globalScore[1] ).textContent = 0;


// document.querySelector("#score-0").innerHTML = "<p>" + 0 + "</p>";
// document.querySelector("#score-1").innerHTML = "<p>" + 0 + "</p>";

//método para Iniciar um novo jogo:
// function startNewGame(){
//     activePlayer = 0;
//     currentScore = 0;
//     globalScore = [ 0, 0 ];
//     document.querySelector( "#score-0" ).innerHTML = "<b>" + globalScore[0] + "</b>";
//     document.querySelector( "#score-1" ).innerHTML = "<b>" + globalScore[1] + "</b>";
//     document.querySelector( "#current-0" ).innerHTML = "<b>" + 0 + "</b>";
//     document.querySelector( "#current-1" ).innerHTML = "<b>" + 0 + "</b>";

//     //sumindo com o dado, alterando css para display: none
//     document.querySelector( ".dice" ).style.display = "none";




//     // while( globalScore[0] <= 100 || globalScore[1] <= 100 ){
        
//     // }
//     console.log( vencedor() );
// }


// //método de segurar pontuação corrente:
// function hold( activePlayer, currentScore ){
//     globalScore[ activePlayer ] += currentScore;
//     currentScore = 0;
// }

// //Gerando um numero aleatório entre 1 e 6:
// function generateDice(){
//     dice = Math.floor( Math.random() * 6 ) + 1;
//     return dice;
// }



// //função que informa o jogador que venceu
// function vencedor(){
//     if( globalScore[0] > 100 ){
//         return "Jogador 1";

//     }else if( globalScore[1] > 100 ){
//         return "Jogador 2";

//     }else{
//         return "Empate que nunca existe!";
//     }
// }

// document.querySelector("#current-" + activePlayer ).textContent = dice;
// //método de jogar:
// function play( activePlayer ){
    
//     dice = generateDice();
//     //carregar imagem do dado correspondente 
//     // document.querySelector( "#src")
//     currentScore += dice;
//     document.querySelector( "#current-" + activePlayer ).textContent = currentScore;
    
//     if( dice === 1 ){
//         currentScore = 0;
//         changePlayer( activePlayer );
//     }

//     // else if( currentScore + globalScore[ activePlayer ] >= 100 ){
//     //     //
//     // }

//     /*if( jogadorClicaSegurar )
//         hold( activePlayer, currentScore );
//         changePlayer();
//     */

//     /*if( jogadorClicaJogar ){
//         play( activePlayer );
//     }
//     */
// }

// startNewGame();