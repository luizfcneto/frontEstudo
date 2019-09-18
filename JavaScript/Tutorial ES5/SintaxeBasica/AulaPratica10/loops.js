/****************Loops****************
 *  Autor: Luiz Fernando ( luizfcneto )
 *  Email: Luizfcneto123@gmail.com
 * 
 */

 // Inicializando um vetor
var naturais = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var valoresMisturados = [ "Luiz", 1.79, 23, "Vermelha" ];

//imprimindo todos os elementos do vetor naturais com for: 
console.log( "Imprimindo numeros naturais com for: ");
for ( var contador = 0; contador < naturais.length; contador++ ){
    console.log ( naturais[ contador ] );

}

//imprimindo numeros pares com for:
console.log( "Imprimindo numeros pares com for: ")
for ( var contador = 0; contador < naturais.length; contador++ ){
    if ( naturais[ contador ] % 2 === 0 ){
        console.log( naturais[ contador ] );
    }
}

//imprimindo numeros pares em ordem decrescente com for:
console.log ( "imprimindo numeros pares decrescente com for: ");
for ( var contador = naturais.length - 1; contador >= 0; contador-- ){
    if ( naturais[ contador % 2 ] === 0 ){
        console.log( naturais[ contador ] );
    }
}

//imprimindo valores de determinados tipos de um array:
console.log( "Imprimindo tipos especificos que um array contem: numero")
for ( var contador = 0; contador < valoresMisturados.length; contador++ ){
    // if( typeof valoresMisturados[ contador ] !== "string" ) continue;       //imprimindo apenas o conteúdo do array que tiver o tipo string
    // console.log ( valoresMisturados[ contador ] )
    

    //imprimindo apenas o conteúdo do array que tiver o tipo number
    if ( typeof valoresMisturados[ contador ] !== "number"  ) {
        continue;
    }
    console.log ( valoresMisturados[ contador ] );
    
}

//imprimindo numeros naturais com while:
console.log( "Imprimindo naturais com while: " );
var parada = 0;
while ( parada < naturais.length ){
    console.log( naturais[ parada ] );
    parada ++;
}

//imprimindo numeros naturais decrescente com while:
console.log( "Imprimindo naturais decrescente com while: " );
var parada = naturais.length - 1;
while ( parada >= 0 ){
    console.log ( naturais[ parada ] );
    parada--;
}


//imprimindo numeros pares com while: 
console.log( "Imprimindo numeros pares com while: " );
var parada = 0;
while ( parada < naturais.length ){
    if ( naturais[ parada ] % 2 === 0 ){
        console.log( naturais[ parada ] );
    }

    if ( naturais[ parada ] === 5 ){
        console.log ( "parada forçada: break " );
        break;
    }
    parada++;
}

//Imprimindo com do, while, elementos do array que são do tipo diferente de string
console.log( " Imprimindo com do, while, elementos do array que são do tipo diferente de string " );
var contador = 0;
do{
    if ( typeof valoresMisturados[ contador ] !== "string" ){
        console.log ( "posicao array: " + contador );
        console.log ( "conteudo: " + valoresMisturados[ contador ] );
    }
    contador++;
}while ( contador < valoresMisturados.length );
