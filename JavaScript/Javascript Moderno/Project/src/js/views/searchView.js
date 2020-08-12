// variaveis do DOM:
import { domElements, elementStrings } from "./base";

// Mostrar elemento selecionado, quando clicado
export const selecionaDestaque = ( id ) => {
    const arrayResultados = Array.from( document.querySelectorAll( ".results__link" ) );

    arrayResultados.forEach( element => {
        element.classList.remove("results__link--active");
    } ) 

    // Buscar elemento dentro de results_list que tenha o id que foi clicado
    // inserir a classe "results__link--active" nesse elemento com id
    document.querySelector( `.results__link[href="#${id}"]` ).classList.add( "results__link--active" );
    
    
    
}

export const getInput = () => {
    return domElements.searchField.value;
}

export const clearInput = () => {
    domElements.searchField.value = ""
}

// Função que trunca o titulo da receita até 17 caracteres ou na ultima palavra que completa 17 caracteres
export const tituloLimiteReceita = ( recipeTitle, limit = 17 ) => {
    
    // if( recipeTitle.length > limit ){
    //     let temp = recipeTitle.split(" ");
    //     let acumulador = 0;

    //     recipeTitle = "";
    //     for( let i = 0; i < temp.length; i++ ){
    //         if( acumulador + temp[ i ].length < limit ){
                
    //             recipeTitle += temp[ i ] + " ";
    //         }
    //         acumulador += temp[ i ].length;
    //     }
    // }   
    // recipeTitle = recipeTitle + "..."
    // return recipeTitle;

    // ou
    if( recipeTitle.length >= limit ) {
        let ans = "";
        recipeTitle.split( " " ).reduce( ( acc, cur ) => {
            if( acc + cur.length <= limit ){
                ans += cur;
            }

        }, 0 ); 
        ans += "...";
        recipeTitle = ans;
    } 

    return recipeTitle;
}

// Define formato de exibição dos elementos da lista de receitas.
const templateElements = async ( element ) => {
    let template = `<li>
                        <a class="results__link" href="#${ element.recipe_id }" target="_self">
                            <figure class="results__fig">
                                <img src="${ element.image_url }" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name"> ${ tituloLimiteReceita( element.title ) } </h4>
                                <p class="results__author"> ${ element.publisher } </p>
                            </div>
                        </a>
                    </li>`
    
    domElements.resultList.insertAdjacentHTML( "beforeend", template );
}


// Função privada genérica para criação de botão da paginação.
const createButton = ( page, type ) => {
    const button = `<button class="${ type === "prev" ? elementStrings.pagPrev : elementStrings.pagNext }" data-goto=${ page }>
                        <span>Página ${ page }</span>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-${ type === "prev" ? "left" : "right" }"></use>
                        </svg>
                    </button>`
    domElements.paginationLocation.insertAdjacentHTML( `${ type === "prev" ? "afterbegin" : "beforeend" }`, button );
    
}


// Função privada desse arquivo que renderiza os botões da paginação de receitas ( renderResults ).
const renderButtons = ( page, limit, size ) => {

    let button;

    if( page === 1 && size > page * limit ){
        button = createButton( page + 1, "next" );

    }else if( page !== 1 && size > page * limit ) {
        button = `
        ${ createButton( page - 1, "prev" ) }
        ${ createButton( page + 1, "next" ) }`;

    }else if( page !== 1 && size < page * limit ){
        button = createButton( page - 1, "prev" );
    }
}

// recebe array de receitas e renderiza na lista de receitas. ( PAGINAÇÃO )
export const renderResults = ( recipes, pagina = 1, limitPorPag = 10 ) => {
    const inicioPaginacao = ( pagina - 1 ) * limitPorPag;
    const fimPaginacao = pagina * limitPorPag;

    recipes.slice( inicioPaginacao, fimPaginacao ).forEach( templateElements );
    renderButtons( pagina, limitPorPag, recipes.length );
}

// Limpa exibição de resultados da pesquisa já feita.
export const clearResults = () => {
    domElements.resultList.innerHTML = "";
    domElements.paginationLocation.innerHTML = "";
}