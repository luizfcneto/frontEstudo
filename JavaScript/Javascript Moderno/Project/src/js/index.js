import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { domElements, renderLoader, clearLoader } from "./views/base";

import Recipe from "./models/Recipe";

/* Estado Global da aplicação
    - objeto Search
    - objeto receita corrente
    - objeto de lista de compras
    - objeto de receitas "marcadas como gostei"
*/
const state = {};

// Controle de busca que irá ser executado quando submeterem o formulário de busca.
const controllerSearch = async () => {
    // pegar valor da query no formulário: uma função feita pelo searchView.js, pois não pertence a essa camada
    let query = searchView.getInput();
    console.log( query );

    if( query || query !== null || query !== undefined ){
        // Instanciando novo objeto da classe Search para realizar a requisição à API;
        state.busca = new Search( query );
        
        // Arrumando UI para resultado da busca
        searchView.clearInput();
        searchView.clearResults();
        renderLoader( domElements.results );

        try{
        // Executando a consulta à API e adicionando ao objeto de estado global state.
            await state.busca.getBusca();
            
            // Renderiza o resultado na UI ( implementado no arquivo searchView.js )
            // console.log( state.busca.receitas );
            clearLoader();
            searchView.renderResults( state.busca.receitas );
        } catch( error ){
            console.log( error, "Falhamos em renderizar a lista de receitas" );
        }
        
        
    }
}

// Criando evento de realização da busca no html:
domElements.searchForm.addEventListener("submit", ( eventObject ) => {
    eventObject.preventDefault();
    controllerSearch();

} );


// Evento de páginação ( botão next e prev ):
domElements.paginationLocation.addEventListener( "click", ( event ) => {

    const btn = event.target.closest(".btn-inline");
    if( btn ) {
        const goToPage = parseInt( btn.dataset.goto );

        searchView.clearResults();
        searchView.renderResults( state.busca.receitas, goToPage );
    }
} ) 

/*
    Controle de receitas, faz requisiçao de receita por id e renderiza as descrições dela.
*/
const controllerRecipe = async () => {
    // pega o hash na url da página -> #46956
    const id = window.location.hash.replace("#", "");

    if( id ){

        // Prepara a UI ( interface do usuario para adicionarmos a receita clicada )

        // Cria o novo objeto Receita:
        state.receita = new Recipe( id );

        try{
            // Pega os dados de receita e trata ingredientes;
            await state.receita.getRecipeById();
            state.receita.parseIngredientes();
            
            // calcula o tempo de cozimento e quantas pessoas servem
            state.receita.calculaTempoDeProducao();
            state.receita.calculaAlimentaPessoas();

            // renderiza os detalhes da receita clicada.
            console.log( state.receita );

        }catch( error ) {
            console.log( error, "Falhamos em renderizar a descrição das receitas" )
        }
        
    }

}

// // Evento para quando clicarmos em um elemento da lista de receitas, pegarmos o código hash em questão presenta na url.
// window.addEventListener("hashchange", controllerRecipe );

// // Evento para quando a página for carregada com a url+hashid carregar a descrição respectiva
// window.addEventListener("load", controllerRecipe );

// Uma forma de adicionarmos mais de um evento a um elemento do dom: 
[ "hashchange", "load" ].forEach( element => {
    window.addEventListener( element, controllerRecipe );
})