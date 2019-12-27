/*
    Descrição:
        Fazer uma função em js que receba como parametro 3 numeros
        verificar entre esses tres numeros qual é o maior
        retornar o maior numero.


Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-31.php
*/

//Minha solução:
function whichIstheLargest1( num1, num2, num3 ){
    if( num1 > num2 && num1 > num3 )    return num1;
    else if( num2 > num1 && num2 > num3 )   return num2;
    else  return num3;
}

function whichIstheLargest2( num1, num2, num3 ){
    
    if( num1 > num2 ){
        if( num1 > num3 ){
            return num1;
        }else{
            return num3;
        }

        //sei que num2 é maior que num1
    }else if( num2 > num3 ){
        return num2;
        
    }else{
        return num3;
    }

    

}

//Minha Solução
function whichIstheLargest3( num1, num2, num3 ){
    
    if( num1 > num2 && num1 > num3 ){
        return num1;

    }else if( num2 > num1 && num2 > num3 ){
        return num2;
    
    }else{
        return num3;
    }

}

//Minha solução
var largest = ( num1, num2, num3 ) => {
    if( num1 > num2 && num1 > num3 )    return num1;
    else if( num2 > num1 && num2 > num3 )   return num2;
    else  return num3;
} 

console.log( whichIstheLargest1( 3, 6, 4 ) );
console.log( whichIstheLargest2( 5, 1 , 3 ) );
console.log( whichIstheLargest3( 4, 9, 15 ) );

console.log( largest( 3, 6, 4 ) );
console.log( largest( 5, 1 , 3 ) );
console.log( largest( 4, 9, 15 ) );

