/*
    Descrição:
        Fazer uma função em js que recebe como parametro uma string, um numero e outra string
        a primeira string representa uma base de string,
        o numero representa a nova string que será inserida nessa base do primeiro parametro
        a segunda string representa uma letra, "l" = left e "r" = right
        a letra que define qual posição o numero transformado em string se posicionará na base
        caso a letra não esteja definida, tomar como padrão "r"

    Exemplo:
        entrada: '0000', 123, 'l'
        saida: 0123

        entrada: '00000000', 123, ''
        saida: 12300000

Solução:
*/
function formattedString( base, number, pad ){
    console.log( "Parametros Fornecidos: " + base + ", " + number + " & " + pad );
    
    let ans = "";
    if( pad === undefined || pad === null || pad === "\0" || pad === "" ){
        pad = "r";
    } 

    number = number.toString();
    // number = "" + number;
    
    if( pad === "r" ){
        ans = number + base.slice( number.length, base.length );
        return ans;

    }else if( pad === "l" ){
        ans = base.slice( 0, base.length - number.length ) + number;
        return ans; 

    }else{
        console.log( "pad invalido" );
    }

}

console.log( formattedString( "0000", 123, 'l' ) );
console.log( formattedString( "00000000", 123, '' ) );
console.log( formattedString( "00000000", 123, 'r' ) );
console.log( formattedString( "00000000", 123,  ) );

