export const domElements = {
    searchForm: document.querySelector( ".search" ),
    searchField: document.querySelector( ".search__field" ),

    likesList: document.querySelector( ".likes__list" ),
    resultList: document.querySelector( ".results__list" ),
    results: document.querySelector( ".results" ),

    recipe: document.querySelector( ".recipe" ),
     
    shoppingList: document.querySelector( ".shopping__list" ),

    paginationLocation: document.querySelector( ".results__pages" )
}

export const elementStrings = {
    loader: "loader",
    pagNext: "btn-inline results__btn--next",
    pagPrev: "btn-inline results__btn--prev"
}


export const renderLoader = ( parentElement ) => {
    const loader = `
        <div class="${ elementStrings.loader }">
            <svg>
                <use href="img/icons.svg#icon-cw"> </use>
            </svg>
        </div>
    `;

    parentElement.insertAdjacentHTML( "afterbegin", loader );
}

export const clearLoader = () => {
    const loader = document.querySelector( `.${ elementStrings.loader }` );
    if( loader ){
        loader.parentElement.removeChild( loader );
    }
}

