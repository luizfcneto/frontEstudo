/*
    Descrição:
        Gerar um numero inteiro aleatório entre 1 e 10.
        Perguntar e captar ao usuário via prompt um numero
        verificar e retornar se o numero fornecido pelo usuario e o numero gerado são iguais.
        
Math.random():
    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    - https://www.w3schools.com/jsref/jsref_random.asp

Math.round():
    - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    - https://www.w3schools.com/jsref/jsref_round.asp

*/

//minha solução:
function verificaIguais( input ){
    const numero = geraNumero();
    if( numero === input ){
        return true;
    }else{
        return false;
    }

}

function geraNumero(){
    let number = Math.round( Math.random() * 9 + 1  );
    console.log( number );
    return number;
}

function isCorrect( answer ){
    if( answer === true ){
        return " Acertou! ";
    }else{
        return " Errrrrrrrrou! ";
    }
}

let inputPrompt = prompt( "Tente adivinhar meu numero, dica: está entre 1 e 10." );
inputPrompt = parseInt( inputPrompt );

console.log( isCorrect( verificaIguais( inputPrompt ) ) );
