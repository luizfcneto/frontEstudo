/*
    Descrição: 
        Fazer uma função que recebe um numero
            a partir deste número devemos pegar cada algarismo dele e elevar ao quadrado e retorna-lo
            como um numero só.

*/

//Minha resposta:
function squareDigits( num ){
    var numString = num.toString();

    var resposta = "";

    for( let i = 0; i < numString.length; i++ ){
        
        var letter = numString[i];
        // ou var letter = numString.charAt( i );

        var charInt = parseInt( letter );
        letter = charInt * charInt;

        resposta += letter;
    }

    resposta = parseInt( resposta );

    return resposta;

}

var resposta = prompt( "Digite um numero aqui: " );
console.log( " O numero que você passou: " + resposta );
resposta = squareDigits( resposta );
console.log ( " resposta:" + resposta );


//Outras Soluções:
//function squareDigits(num){
//    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//}

//function squareDigits(num){
//    var string = num.toString();
//    var results = [];
//    for (var i = 0; i < string.length; i++){
//        results[i] = string[i] * string[i];
//    }
//    return Number(results.join(''));
//};