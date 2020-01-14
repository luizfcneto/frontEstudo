/*
    Descrição:
        Fazer um programa em js que recebe como parametro um numero
        Retornar esse numero em string acrescentando o sufixo de ordenação numeral
        para o respectivo numero.

    Exemplo:
        entrada: 0
        saida: 

        entrada: 1
        saida: "1st"

        entrada: 3
        saida: "3rd"
    

Solução: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-15.php
*/ 

function humanizeFormat( number ){
    console.log( "Parametro Fornecido: " + number );

    if( number <= 0 ){
        return "";
    
    }else{
        let order = number % 10;
        let ans = "";
        switch( order ){
            case 1:
                ans = number + "st";
                break;
            
            case 2: 
                ans = number + "nd";
                break;
            
            case 3: 
                ans = number + "rd";
                break;

            default:
                ans = number + "th";
        }

        return ans;
    }
}

console.log( humanizeFormat( 21 ) );
console.log( humanizeFormat( 32 ) );
console.log( humanizeFormat( 13 ) );
console.log( humanizeFormat( -50 ) );
console.log( humanizeFormat( 240 ) );
console.log( humanizeFormat( 0 ) );