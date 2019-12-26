/*
    Descrição:
        Escrever uma função que recebe como parametro um numero
        retornar o numero de forma expandida em formato de string
    
    Exemplo:
        entrada: 13
        saida: '10 + 3'

        lógica:
            num % 10 = 3
            string = num % 10 + "";

            num / 10 = 1
            string = num * 10 + string;

        entrada: 356
        saida: '300 + 50 + 6'

        num % 10 = 6
        string = num % 10 + "";

        num / 10 = 35
        num % 10 = 5
        string = ( num % 10 ) * 10 + string;

        num / 10 = 3
        num % 10 = 3
        string = ( num % 10 ) * 10 * 10 + string;


*/

//Minha solução: porém para num muito grandes complexidade é maior
function expandedForm( num ){
    console.log( "Numero fornecido: " + num );
    let order = 1;
    let str = "";
    while( num / 10 != 0 ){

        if( Math.trunc( num % 10 ) > 0 && order === 1 ){
            str = Math.trunc( num % 10 ).toString();
            console.log( str, num );
            num = Math.trunc( num / 10 );
            order *= 10;

        }else if ( Math.trunc( num % 10 ) > 0 && order > 1 ){
            
            if( str !== "" ){
                str = ( ( Math.trunc( num % 10 ) ) * order ) + " + " + str;
            }else{
                str = ( ( Math.trunc( num % 10 ) ) * order ) + str;
            }
             
            console.log( str, num );
            num = Math.trunc( num / 10 );
            order *= 10;
        
        }else if( Math.trunc( num % 10 ) === 0 ){
            num = Math.trunc( num / 10 );
            order *= 10;
        }

    }
    return str;
}

console.log( expandedForm( 12 ) );
console.log( expandedForm( 356 ) );
console.log( expandedForm( 9000000 ) );

//Minha outra solução
function expandedForm2( num ){
    str = num.toString();
    answer = "";

    console.log( "Numero fornecido: " + str );
    for( let i = 0; i < str.length; i++ ){

        if( str[i] == 0 ){
            continue;
        
        }else{

            if( answer === "" ){
                answer = ( parseInt( str[i] ) * Math.pow( 10, str.length -  i - 1 ) ).toString();
               
            }else{

                answer = answer + " + " +  ( parseInt( str[i] ) * Math.pow( 10, str.length -  i - 1 ) ).toString();
            }

        }
    }
    console.log( answer );
    return answer;

}

console.log( expandedForm2( 12 ) );
console.log( expandedForm2( 356 ) );
console.log( expandedForm2( 9000000 ) );
console.log( expandedForm2( 97311868 ) );

//Outras soluções:
// const expandedForm = (num) => {
//     return [...String(num)]
//       .map((n, i, a) => n * 10 ** (a.length - i - 1))
//       .filter(Boolean)
//       .join` + `;
// };

// const expandedForm = n => n.toString()
//       .split('')
//       .reverse()
//       .map((a, i) => a * (10 ** i))
//       .filter(a => a > 0)
//       .reverse()
//       .join(' + ');

