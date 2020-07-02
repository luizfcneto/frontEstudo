/*
    Promises
*/
// Recriando exemplo da Forma antiga. Produzindo Promises

// const getIds = new Promise( ( resolve, reject ) => {
    
//     setTimeout( () => {
//         // Caso a função setTimeOut() seja um sucesso ( por isso utilização da função "resolve" que recebe como parametro os valores que eu quero retornar dessa promise );
//         // resolve( "Teste" );
//         resolve( [ 232, 1231232, 434, 43643 ] );

//         // Forçando a função setTimeOut() a retornar um erro, utilizando a função reject("erro");
//         // reject( [ 232, 1231232, 434, 43643 ] );
        
//     }, 1500 );

// } );

// const getRecipe = ( recipeID ) => {
//     return new Promise( ( resolve, reject ) => { 

//         setTimeout( ( id ) => {
//             const recipe = {
//                 title: "Titulo 1",
//                 publisher: "Me"
//             }
//             resolve( `${ id }: ${ recipe.title } `);
    
//         }, 1500, recipeID );
        
//     } );
// }

// const getRelated = ( publisher ) => {
//     return new Promise( ( resolve, reject ) => {
//         setTimeout( ( publisher ) => {
//             const recipe = {
//                 title: "Titulo 2",
//                 publisher: "Jonas"
//             }
//             resolve( `${ publisher }: ${ recipe.title } ` );
        
//         }, 1500, publisher );
//     } )
// }

// // Manipula o retorno da promise getIds através do método ".then( parametro )", sendo "parametro" a variavel q contem o retorno da promise.
// getIds.then( ( qualquerCoisa ) => {

//     console.log( "Promise foi um sucesso" );
//     console.log( qualquerCoisa );

//     // Não é boa prática colocar then dentro de then
//     // getRecipe( qualquerCoisa[ 2 ] ).then( )
//     return getRecipe( qualquerCoisa[ 2 ] );
// } )
// .then( ( recipe ) => {
//     console.log( recipe );
//     return getRelated( "Jonas" );
// } )
// .then( ( recipe ) => {
//     console.log( recipe );
// } )

// .catch( ( erro ) => {
    
//     // Faz o tratamento de erro da promise getIds através do método ".catch( erro )"
//     console.log( "Promisse foi um fracasso 2", erro );
// })
// ______________________________________________________________________

// criando uma promise bem sucedida
const promise1 = new Promise( ( resolve, reject ) => {
    console.log( "Promise 1" );
    let varDePromise1 = "Variavel da promise 1";

    setTimeout( () => {
        resolve( varDePromise1 );    
    }, 5000 );

})

// consumindo a promise
promise1.then( ( variavelResultadoEsperado ) => {
    console.log( variavelResultadoEsperado );
} )


// criando uma promise mal sucedida
const promise2 = new Promise( ( resolve, reject ) => {
    console.log( "Promise 2" );

    let varDePromise2 = "Variavel da Promise 2";

    setTimeout( () => {
        reject( varDePromise2 );
    }, 2000 );

} )

// consumindo a promise
promise2.then( ( variavelResultadoEsperado ) => {
    console.log( variavelResultadoEsperado );
} )
// tratando erros da promise
.catch( ( erro ) => {
    console.log( "Erro, promise foi mal sucedida", erro );
} )

// função retornoDePromise que recebe como parametro uma variavel e retorna uma Promise
const retornoDePromise = ( variavel ) => {
    return new Promise ( ( resolve, reject ) => {
        
        setTimeout( ( variavel ) => {
            console.log( "função retorno de promise", variavel );
            // resolve( variavel );
            reject( variavel );

        }, 7000, variavel )

    } )
} 

// consumindo a promise
retornoDePromise( "Meu pastel é mais barato" ).then( ( variavelResultadoEsperado ) => {
    console.log( variavelResultadoEsperado );
} )

// tratando erro da promise
retornoDePromise( "Meu pastel é mais caro" ).catch( ( erro ) => {
    console.log( "Promise mal sucedida", erro );
} )