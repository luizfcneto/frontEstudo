/*
    Async & Await
*/

// Como async & await é para consumir uma Promise, iremos manter o código do arquivo promises.js na aula anterior
const getIds = new Promise( ( resolve, reject ) => {
    
    setTimeout( () => {
        // Caso a função setTimeOut() seja um sucesso ( por isso utilização da função "resolve" que recebe como parametro os valores que eu quero retornar dessa promise );
        // resolve( "Teste" );
        resolve( [ 232, 1231232, 434, 43643 ] );

        // Forçando a função setTimeOut() a retornar um erro, utilizando a função reject("erro");
        // reject( [ 232, 1231232, 434, 43643 ] );
        
    }, 1500 );
    
} );
    
const getRecipe = ( recipeID ) => {
    return new Promise( ( resolve, reject ) => { 

        setTimeout( ( id ) => {
            const recipe = {
                title: "Titulo 1",
                publisher: "Me"
            }
            resolve( `${ id }: ${ recipe.title } `);
    
        }, 1500, recipeID );
        
    } );
}

const getRelated = ( publisher ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( ( publisher ) => {
            const recipe = {
                title: "Titulo 2",
                publisher: "Jonas"
            }
            resolve( `${ publisher }: ${ recipe.title } ` );
        
        }, 1500, publisher );
    } )
}

// Refazendo o consumo da aula de promises no formato async & await
async function getRecipesAW( ) {

    // "await" consome a Promise getIDs, o await para a execução do código ( dentro da função assincrona ) para esperar o retorno da Promise para continuar a execução.
    const ids = await getIds;
    console.log( ids );

    // OBS: Devemos fazer o tratamento de erro caso ocorra algum problema com a promise. Importante que o try englobe sempre a tentativa do consumo de cada Promise ( utilizando await ).
    try{
        const recipe = await getRecipe( ids[1] );
    }catch( erro ){
        console.log( "Ocorreu algum problema com a Promise retornada por getRecipe");
    }

    const recipe = await getRecipe( ids[1] );
    console.log( recipe );

    const related = await getRelated( "Luiz Fernando" );
    console.log( related );
}

getRecipesAW();


// E se quisessemos pegar recipe e adicionar a uma variavel externa após a finalização da função "getRecipesAW()"?
// async function getRecipesAW( ) {

//     // "await" consome a Promise getIDs, o await para a execução do código ( dentro da função assincrona ) para esperar o retorno da Promise para continuar a execução.
//     const ids = await getIds;
//     console.log( ids );
    
//     const recipe = await getRecipe( ids[1] );
//     console.log( recipe );

//     const related = await getRelated( "Luiz Fernando" );
//     console.log( related );

//     return recipe;
// }

// const recipe = getRecipesAW();
// console.log( recipe )   // erro!! essa parte do código é sincrona, ainda não temos o resultado esperado da Promise.

// Forma correta de manipularmos dados de uma Promise para variaveis externas da função assíncrona. Lembrando que o retorno de uma função assíncrona é uma promise, devemos manipula-la utilizando métodos ".then()" e ".catch()"
// async function getRecipesAW( ) {

//     // "await" consome a Promise getIDs, o await para a execução do código ( dentro da função assincrona ) para esperar o retorno da Promise para continuar a execução.
//     const ids = await getIds;
//     console.log( ids );
    
//     const recipe = await getRecipe( ids[1] );
//     console.log( recipe );

//     const related = await getRelated( "Luiz Fernando" );
//     console.log( related );

//     return recipe;

// }

// getRecipesAW().then( variavelRetornada  => {
//     const recipe = variavelRetornada;
//     console.log( recipe );
// } )
