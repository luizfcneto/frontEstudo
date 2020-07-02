/*
    Ajax -> fetch API consumindo uma API chamada metaweather ( https://www.metaweather.com/api/ )

*/

/* 
    conectando com o método location da API metaweather
    url de requisição da função: "https://www.metaweather.com/api/location/woeid/"
    // woeid => abreviação para Where on Earth id => id de localização no Planeta Terra.
    path param => "/api/location/woeid/"
    exemplo: "/api/location/455825"
    woeid: 455825 = Rio de Janeiro
*/
// fetch( "https://www.metaweather.com/api/location/455825/" );    // erro.

// utilizando o proxy crossorigin.me:
// fetch( "https://crossorigin.me/https://www.metaweather.com/api/location/455825/" ); // erro. crossorigin.me teve dominio expirado;

// utilizando outro proxy: https://cors-anywhere.herokuapp.com/
function buscaClima( woeid ){
    fetch( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${ woeid }/` )
    
    .then( ( response ) => { 

        // console.log( response );
    
        // convertendo ReadableStream para JSON ( retorna uma Promise );
        try{
            if( response.status === 200 ){
                return response.json();
            }else{
                throw new Error( "Erro, requisição mal sucedida");
            }
        }catch( erro ) {
            console.log( erro.name, erro.message );
        }
        
    } )
    
    .then( data => {
        // printando corpo de resposta completo
        // console.log( data );
    
        // printando propriedade titulo do corpo da resposta.
        console.log( `Nome da cidade: ${ data.title } ` );
    
        const hoje = data.consolidated_weather[0];
        console.log( `Temperaturas na cidade: ${ data.title } 
            \nTemperaturas entre: ${ hoje.min_temp } & ${ hoje.max_temp } 
            \nTemperatura atual: ${ hoje.the_temp } ` );
    } )
    
    .catch( error => {
        console.log( error );
    } ) 
}

// id RJ:
buscaClima( 455825 );

// id Londres:
buscaClima( 44418 )

// id São Francisco:
buscaClima( 2487956 );

// id Desconhecido ( para forçar erro );
buscaClima( 0 );