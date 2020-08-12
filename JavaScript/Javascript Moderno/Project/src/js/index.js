import Search from "./models/Search";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
import List from "./models/List";
import { domElements, renderLoader, clearLoader } from "./views/base";
import Likes from "./models/Likes";
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
        renderLoader( domElements.recipe );

        // Cria o novo objeto Receita:
        state.receita = new Recipe( id );

        if( state.busca ){
            // console.log( document.querySelectorAll( ".results__link" ) );
            searchView.selecionaDestaque( id );
        }

        try{
            // Pega os dados de receita e trata ingredientes;
            await state.receita.getRecipeById();
            state.receita.parseIngredientes();
            
            // calcula o tempo de cozimento e quantas pessoas servem
            state.receita.calculaTempoDeProducao();
            state.receita.calculaAlimentaPessoas();

            // renderiza os detalhes da receita clicada.
            // console.log( state.receita );
            clearLoader();
            recipeView.clearRecipe();
            recipeView.renderizaReceita( state.receita, state.likes.isLiked( id ) );

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

// Controller List:
const controllerList = () => {
    // Criar nova lista caso ainda não exista
    if( !state.list ) {
        state.list = new List();
    }

    // Adiciona cada ingrediente da receita na lista e na Interface do usuário ( UI )
    state.receita.ingredientes.forEach( elemento => {
        const item = state.list.adicionaItem( elemento.quantidade, elemento.unidade, elemento.ingrediente );
        listView.renderizaItem( item );

    })
    
}

// Manipulando eventos de remoção e atualização de itens na lista
domElements.shoppingList.addEventListener( "click", event => {
    const id = event.target.closest(".shopping__item").dataset.itemid;

    // Manipulação de remoção
    if( event.target.matches( ".delete-btn, .shopping__delete", ".shopping__delete *" ) ){
        // Deleta do state
        state.list.removeItem( id );
        
        // Deleta da UI
        listView.deletaItem( id );

    // Manipulação de atualização da quantidade
    }else if( event.target.matches( ".shopping__count-value" ) ){
        const inputValue =  parseFloat( event.target.value );
        state.list.atualizaQuantidade( id, inputValue );
 
    }

} )

// Testando: 


const controllerLike = () => {
    if( !state.likes ) {
        state.likes = new Likes();
    }
    const currentId = state.receita.id;
    
    // Usuario ainda não deu like na receita
    if( !state.likes.isLiked( currentId ) ){
        
        // Adiciona like para o state
        const novoLike = state.likes.adicionaElementoLike( 
            currentId, 
            state.receita.titulo, 
            state.receita.autor,
            state.receita.imageUrl 
        );

        // Altera o botão de like
        likesView.toggleLikeButton( true );

        // Adiciona o like para a lista de likes na interface do usuario UI 
        likesView.renderizaLike( novoLike );
        console.log( state.likes );
    
    // Usuario já deu like nessa receita
    }else {

        // remove like do state
        state.likes.removeElementoLike( currentId );

        // altera o botão do like
        likesView.toggleLikeButton( false );

        // remove o like da lista de likes na interface do usuario UI
        likesView.deletaLike( currentId );
        console.log( state.likes )
    }

    likesView.modificaMenuLike( state.likes.getNumLikes() );
}

// Botoes de incrementar ou decrementar "servindo";
domElements.recipe.addEventListener( "click", event => {

    if( event.target.matches( ".btn-decrease, .btn-decrease *" ) ){
        // botao de redução foi clicado
        if( state.receita.serve > 1 ){
            state.receita.atualizaAlimentaPessoas( "dec" );
            recipeView.atualizaIngredientesServindo( state.receita );
        }
         
    }else if ( event.target.matches ( ".btn-increase, .btn-increase *" ) ){

        // botao que aumenta serve foi clicado
        if( state.receita.serve >= 1 ){
            state.receita.atualizaAlimentaPessoas( "inc" );
            recipeView.atualizaIngredientesServindo( state.receita );

        }
        
        // Adiciona lista de ingredientes ao carrinho:
    } else if( event.target.matches(".recipe__btn--add", ".recipe__btn--add*" ) ){
        controllerList();

    } else if( event.target.matches( ".recipe__love, .recipe__love *" ) ){
        // Like Controller
        controllerLike();
    }

})

window.list = new List();

// Recarrega likes de receitas quando carregar a página:
window.addEventListener( "load", () => {
    state.likes = new Likes();

    state.likes.carregarDadosLocalStorage();

    likesView.modificaMenuLike( state.likes.getNumLikes() );

    state.likes.likes.forEach( like => likesView.renderizaLike( like ) );
})

console.log( 1 == true );
console.log( 1 === true );