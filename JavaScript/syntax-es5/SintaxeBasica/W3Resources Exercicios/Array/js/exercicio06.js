/*
    Descrição:
        Fazer uma função em js que recebe como parametro um numero de telefone
        retornar o numero adicionando entre dois numeros pares um "traço" - 

    Exemplo:
        entrada: 2574471564
        saida: 2574-47156-4

Solução:
*/

function doIt( number ){
    console.log( "Parametro fornecido: " + number );
    
    //transformando numero para array:
    let arrNum = [];
    while( Math.trunc ( number / 10 ) !== 0  ){
        arrNum.push( Math.trunc( number % 10 ) );
        number = number / 10;
    }
    arrNum.push( Math.trunc( number % 10 ) );
    console.log( arrNum );
    
    //revertendo o array
    let arr = [];
    for( let i = arrNum.length - 1; i >= 0; i-- ){
        arr[ arrNum.length - i - 1] = arrNum[i];
    }
    console.log( arr );

    //Verificar dois numeros pares juntos
    let ans = "" + arr[0];
    for( let i = 1; i < arr.length; i++ ){
        if( arr[i - 1] % 2 === 0 && arr[i] % 2 === 0 ){
            ans += "-";
        }
        ans += arr[i];   
    }
    return ans;
}

//Solução 2: toString() & arr.push() & arr.join()
function doIt2( number ){
    console.log( "Parametro fornecido: " + number );
    
    let str = number.toString();
    let arr = [ str[0] ];

    for( let i = 1; i < str.length; i++ ){
        if( str[i - 1] % 2 === 0 && str[i] % 2 === 0 ){
            arr.push("-");
        }
        arr.push( str[i] );
        
    }
    console.log( arr );
    return arr.join("");
}

console.log( doIt( 2574471564 ) );
console.log( doIt2( 2574471564 ) );