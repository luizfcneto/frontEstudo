/*
    Ajax - Fetch API utilizando async/await
    Mesmo exemplo de ajax-fetch-promise.js, explicado no Guia03

*/


// Busca realizada utilizando API metaweather
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

// let data;

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

// token da API climatempo advisor: 
// const chaveToken = "Insira sua chave aqui";


// // Busca Realizada utilizando a API climatempo advisor:

// async function getBrazilianCitysList( chaveToken ){
//     const response = await fetch( `http://apiadvisor.climatempo.com.br/api/v1/locale/city?country=BR&token=${ chaveToken }` );

//     const data = await response.json();
//     console.log( data );
// }


// async function buscaCidadePorId( id, chaveToken ){
//     const response = await fetch( `http://apiadvisor.climatempo.com.br/api/v1/locale/city/${ id }?token=${ chaveToken }` );

//     const data = await response.json();
//     console.log( data );
// }

// // lista de cidades no Brasil:
// getBrazilianCitysList( chaveToken );

// // id da Cidade do Estado do Rio de Janeiro = 5959
// buscaCidadePorId( 5959, chaveToken );

// token da API accuweather:
// const chaveToken = "Insira sua chave aqui"

// async function getTemperatureCityById( id, keyToken ){
//     const response = await fetch( `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${ keyToken }` );

//     const data = await response.json();
//     console.log( `Temperatura: ${ data[ 0 ].Temperature.Metric.Value } ${ data[ 0 ].Temperature.Metric.Unit } `  );

// }

// async function findCityByString( string, keyToken ){
//     const response = await fetch( `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ keyToken }&q=${ string }` );

//     const data = await response.json();
//     console.log( `Estado: ${ data[ 0 ].LocalizedName } \nID: ${ data[ 0 ].Key } \nLocalizada no País: ${ data[ 0 ].Country.LocalizedName } ` );
// }

// // procura id da cidade 
// findCityByString( "Minas Gerais", chaveToken );

// // id: 45449 é o ID do Estado do Rio de Janeiro
// // getTemperatureCityById( 45449, chaveToken );


// // id: 45881 é o ID do Estado de São Paulo
// // getTemperatureCityById( 45881, chaveToken );

// // id: 2728201 é o ID do Estado de Minas Gerais
// getTemperatureCityById( 2728201, chaveToken ); 
