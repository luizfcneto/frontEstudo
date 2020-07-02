/*
    Ajax - Fetch API utilizando async/await
    Mesmo exemplo de ajax-fetch-promise.js, explicado no Guia03

*/


async function buscaClimaAW( woeid ){
    
    // faz tratamento de um erro de requisição.
    try { 
        const response = await fetch( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${ woeid }/ ` );
        
        if( response.status === 200 ){
            const data = await response.json();
            const hoje = data.consolidated_weather[0];
            console.log( `Temperaturas na cidade: ${ data.title } 
            \nTemperaturas entre: ${ hoje.min_temp } & ${ hoje.max_temp } 
            \nTemperatura atual: ${ hoje.the_temp } ` );

            const amanha = data.consolidated_weather[1];
            console.log( `Temperaturas na cidade: ${ data.title } 
            \nTemperaturas entre: ${ amanha.min_temp } & ${ amanha.max_temp } 
            \nTemperatura atual: ${ amanha.the_temp } ` );
            
            return data;
        
        }else{
            throw new Error( "Erro, requisição mal sucedida" );
        }
        
    }catch( error ){
        console.log( error.message );
    }

}

let data;

// id RJ:
buscaClimaAW( 455825 ).then( ( response ) => {
    data = response;
    console.log( data );
} )

// id Londres:
buscaClimaAW( 44418 ).then( ( response ) => {
    data = response;
    console.log( data );
} )

// id São Francisco:
buscaClimaAW( 2487956 ).then( response => {
    data = response;
    console.log( data );
})

// id Desconhecido ( para forçar erro );
buscaClimaAW( 0 ).then( response => {
    data = response;
    console.log( data );
} )