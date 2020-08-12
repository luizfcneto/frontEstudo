import { domElements } from "./base";
import { Fraction } from "fractional";
import { isLiked } from "./likesView";

export const clearRecipe = () => {
    domElements.recipe.innerHTML = "";
}

const formataQuantidadeFracao = ( quantidade ) => {
    if( quantidade ) {
        // 2.5 -> 5/2 -> 2 1/2
        const [ inteiro, decimal ] = quantidade.toString().split(".").map( element => parseInt( element, 10 ) );
        const novaQuantidade = Math.round( quantidade  * 10000 ) / 10000;
        if( !decimal ){
            return novaQuantidade;
        
        }

        if( inteiro === 0 ){
            const temp = new Fraction( novaQuantidade );
            return `${temp.numerator}/${temp.denominator}`;
        } else {
            const temp = new Fraction( novaQuantidade - inteiro )
            return `${ inteiro } ${ temp.numerator }/${ temp.denominator }`;
        }

    }
    return "?";
}

const criaIngrediente = ingrediente => `<li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count"> ${ formataQuantidadeFracao( ingrediente.quantidade ) } </div>
        <div class="recipe__ingredient">
            <span class="recipe__unit"> ${ ingrediente.unidade } </span>
            ${ ingrediente.ingrediente }
        </div>
    </li>`

export const renderizaReceita = ( receita, isLiked ) => {
    const template = `
    <figure class="recipe__fig">
        <img src=${receita.imageUrl} alt="" class="recipe__img">
        <h1 class="recipe__title">
            <span>${ receita.titulo }</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes"> ${ receita.tempo }</span>
            <span class="recipe__info-text"> minutos </span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-text"> serve: &nbsp; </span>
            <span class="recipe__info-data recipe__info-data--people"> ${ receita.serve }</span>
            

            <div class="recipe__info-buttons">
                <button class="btn-tiny btn-decrease">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="btn-tiny btn-increase">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="img/icons.svg#icon-heart${ isLiked ? "" : "-outlined" }"></use>
            </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            ${ receita.ingredientes.map( element => criaIngrediente( element ) ).join("") }
        </ul>

        <button class="btn-small recipe__btn recipe__btn--add">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Adiciona a lista de compras</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">Como cozinhar</h2>
        <p class="recipe__directions-text">
            Esta receita foi cuidadosamente planejada e testada por
            <span class="recipe__by"> ${ receita.autor } </span>. Por favor cheque as instruções em seu site.
        </p>
        <a class="btn-small recipe__btn" href="${ receita.sourceUrl }" target="_blank">
            <span>Direções</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>`;

    domElements.recipe.insertAdjacentHTML( "afterbegin", template );
} 

export const atualizaIngredientesServindo = receita => {
    // atualiza servindo
    document.querySelector( ".recipe__info-data--people" ).textContent = receita.serve;

    // atualiza quantidades
    const quantidadeElementos = Array.from( document.querySelectorAll( ".recipe__count" ) );
    quantidadeElementos.forEach( ( elemento, i ) => {
        elemento.textContent = formataQuantidadeFracao( receita.ingredientes[ i ].quantidade );
    } )
}