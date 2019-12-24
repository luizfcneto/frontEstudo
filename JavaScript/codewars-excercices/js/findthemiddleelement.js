/*
    Descrição:
        Criar uma função que receba um array com 3 elementos
        retornar o indice do elemento médio 


    Exemplo: 
        Entrada: [ 3, 6, 2 ]
        saida: 0

        Entrada: [ 5, 7, 9 ]
        saida: 1

*/

//Minha Solução:
var gimme = function ( inputArray ){
    let maior = verificaMaior( inputArray[0], inputArray[1], inputArray[2] );
    
    if( maior === 0 ){
        if( inputArray[1] > inputArray[2])  return 1;
        else    return 2;

    }else if( maior === 1 ){
        if( inputArray[2] > inputArray[0] ) return 2;
        else    return 0;
        
    }else{
        if( inputArray[0] > inputArray[1] ) return 0;
        else    return 1;
        
    }
}

//retorna o indice dos numeros do array
function verificaMaior( num1, num2, num3 ){


    if( num1 > num2 && num1 > num3 ){
        return 0;
    
    }else if( num2 > num1 && num2 > num3 ){
        return 1;
    
    }else{
        return 2;
    }

}

//Outras soluções:
/* Ordenou o array e retornou o elemento 1.
function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

var gimme = function (inputArray) {
    var order = inputArray.slice().sort(function(a,b) { return a-b;});
    return inputArray.indexOf(order[1]);
  
};

*/