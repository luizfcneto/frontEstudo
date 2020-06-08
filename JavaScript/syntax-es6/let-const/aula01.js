/*
    Aula01: Diferença entre var, const e let
*/

// console.log( testeVarES5 );
// var testeVarES5;
// console.log( "testeVarES5 ",  testeVarES5 );

// console.log( testeLetES6 );
// let testeLetES6;
// console.log( "testeLetES6 ", testeLetES6 );

// const testeConstES6;
// // Erro de sintaxe, faltando atribuição ao declarar uma variavel constante.
// console.log( "testeConstES6 ", testeConstES6 );


// Testando variaveis do tipo var

// erro variável não declarada.
// console.log( testeVar );


function funcaoTesteVar(){
    if( true ){
        // Não dá erro, se a variável não foi declarada 
        // console.log( testeVar2 );
        var testeVar2 = "variavel de escopo de função, var";

    }
    
    // Funciona porque testeVar2 é uma variavel de escopo de função, logo ela está acessível por toda a função funcaoTesteVar2
    console.log( testeVar2 );

    var i = 25;
    console.log( i );

    for( var i = 0; i < 10; i++ ){
        console.log( i );
    }

    // A variavel i se sobrepõe, logo o resultado esperado abaixo é 10. e não 25, pois ambas representam a mesma variável, porquê estão no mesmo escopo de função.
    console.log( i );

}
// funcaoTesteVar();



//Testando variaveis do tipo let

function funcaoTesteLet(){
    if( true ){

        // erro, não podemos manipular a variavel tipo let, antes de declará-la e atribui-la algum valor.
        // console.log( testeLet2 );
        let testeLet2 = "Variavel de escopo de bloco de instrução";
        
        //  Bloco de instrução if acessível para a variavel testeLet2
        // console.log( testeLet2 );

    }

    // Erro, bloco de instrução inacessível para testeLet2, variável não definida nesse bloco de instrução
    // console.log( testeLet2 );

    // escopo desse bloco de instrução esse i = 20
    let i = 20;

    for( let i = 0; i < 5; i++ ){
        // i = 0, 1, 2, 3, 4; escopo desse bloco de instrução esse i varia de 0 até 4
        console.log( i );
    }

    // volta pro bloco de instrução anterior que i = 20, cada escopo de instrução i representa uma variavel diferente, mantendo assim o seu valor de acordo com seu escopo, mesmo que o nome da variavel seja a mesma.
    console.log( i );
}

// funcaoTesteLet();

//Testando variaveis do tipo const:
//erro, não podemos acessar testConst antes de sua inicialização
// console.log( testeConst );

const testeConst = 13;

function funcaoTesteConst(){

    // console.log( testeConst2 );
    const testeConst2 = "Variavel const2";

    if( true ){
        const testeConst3 = "Variavel const3";
    }
    
    // erro, variavel testeConst3 inacessível nesse bloco de instrução. 
    // console.log( "testeConst3 ", testeConst3 );
}

// Erro, variável testeConst2 inacessível neste bloco de instrução.
// console.log( "testeConst2 ", testeConst2 );

funcaoTesteConst();