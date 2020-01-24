/*
    Descrição:
        fazer uma função que receba como parametro um tipo de exame, string
        e uma nota de uma avaliação ( numero ). 
        Caso o aluno tire uma nota no exame final entre 89 e 100 inclusos ele tira A+
        Caso o aluno tire um rendimento de nota final acima de 90 incluso, ele fica com A+
    
Solução: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-38.php
*/
function isAnAPlus( isExam, grade ){
    if( isExam ){
        if( grade >= 90 ){
            return true;
        }else{
            return false;
        }

    }else{
        if( grade >= 89 && grade <= 100  ){
            return true;
        }

        return false;
    }
}

console.log( isAnAPlus( true, 45 ) );
console.log( isAnAPlus( false, 89 ) );
console.log( isAnAPlus( false, 100 ) );