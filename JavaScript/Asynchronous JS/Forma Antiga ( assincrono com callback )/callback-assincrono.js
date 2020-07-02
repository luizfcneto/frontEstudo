/*
    Forma antiga, javascript assincrono utilizando callbacks

    "callback hell". Explicado no GUIA01 na pasta Asynchronous JS
*/
// função setTimeOut() está simulando uma conexão com um servidor web

function getRecipe() {

    // Primeiro setTimeout() -> captando dados do servidor
    setTimeout( () => {
        const recipeID = [ 232, 1231232, 434, 43643 ];
        console.log( recipeID );


        // Segundo setTimeOut() -> captando a partir do id de dados do servidor par id, titulo
        setTimeout( ( id ) => {
            const recipe = {
                title: "Titulo 1",
                publisher: "Me"
            }

            console.log( `${ id }: ${ recipe.title }` );


            // Terceiro setTimeOut() -> Captando a partir do segundo setTimeOut ( dados ), recebendo objeto literal a que ele se referencia.
            setTimeout( ( publisher ) => {
                const recipe = {
                    title: "Titulo 2",
                    publisher: "Jonas"
                }

                console.log( recipe ); 

            }, 1500, recipe.publisher );

        }, 1500, recipeID[ 2 ] );


    }, 1500 );

}

getRecipe();
