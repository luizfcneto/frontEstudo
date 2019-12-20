/*
    Aula01: Diferença entre var, const e let
*/

//Testando variaveis do tipo var
// erro
// console.log( testeVar );
function funcaoTesteVar(){
    var testeVar;

    //undefined
    console.log( testeVar );

    testeVar = 5;
    console.log( testeVar );

    for( var i = 0; i < 6; i++ ){
        testeVar++;
        // testeVar += i;
        console.log( testeVar );
    }

    testeVar = 6;

    if( testeVar > 10 ){
        testeVar = 3;
        console.log( testeVar );
    
    }else{
        console.log( testeVar );
    }

}
// funcaoTesteVar();
//erro
// console.log( testeVar );     


//Testando variaveis do tipo let
//erro, testeLet não definido
// console.log( testeLet );

function funcaoTesteLet(){
    let testeLet;

    //undefined
    console.log( testeLet );

    testeLet = 7;
    console.log( testeLet );

    for( let i = 0; i < 3; i++ ){
        testeLet++;
        // testeLet += i;
        console.log( testeLet );
    }

    //erro: i não está contido nesse escopo de bloco.
    // console.log( i );

    if( testeLet > 10 ){
        let testeLet2 = 1;
        testeLet = 3;
        console.log( testeLet + " teste2: " + testeLet2 );
    
    }else{
        //erro: teste2, não estpa contido nesse escopo de bloco.
        // console.log( testeLet + " teste2: " + testeLet2 );
    }

}
// funcaoTesteLet();
//erro, testeLet não definido
// console.log( testeLet );

//Testando variaveis do tipo const:
//erro, não podemos acessar testConst antes de sua inicialização
// console.log( testeConst );

const testeConst = 13;

function funcaoTesteConst(){
    console.log( testeConst );

    const testeConst2 = 5;

    //Erro, não podemos alterar o valor de uma constante já inicializada
    // testeConst = 10;
    // testeConst2 = testeConst + testeConst2;

    if( testeConst === testeConst2 ){
        console.log( "Entrou no if" );
    
    }else{
        console.log( "teste1: " +  testeConst + " teste2: " + testeConst2 );  
    }
}
//erro, testeConst2 não está definido 
// console.log( testeConst2 );
// console.log( testeConst );

// funcaoTesteConst();