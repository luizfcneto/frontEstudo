import express from "express";

const app = express();
const port = 3333;
/*
    Métodos HTTP mais utilizados em uma API
    GET => Busca 
    POST => Salva
    PUT => Altera
    DELETE => Deleta
    PATCH => Alteração específica
*/


app.get( "/olamundo01", ( request, response ) => {
    return response.send( "Olá Mundo - NLW #04" );
} )

app.get( "/olamundo02", ( request, response ) => {
    return response.json( {
        mensagem: "Olá Mundo - NLW #04"
    } )
})

// parametro 1: rota ( do recurso API ),
// parametro 2: função com parametros request, response da comunicação http
app.post( "/", ( request, response ) => {

    // Recebeu dados para salvar
    return response.json( {
        mensagem: "Os dados foram salvos com sucesso!"
    })
} )

// Cria servidor: parametros, porta e função ser executada
app.listen( port, () => console.log( `Server is running on port: ${ port }` ) );

