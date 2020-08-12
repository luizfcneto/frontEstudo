import { domElements } from "./base";

export const renderizaItem = ( item ) => {
    const template = 
    `
    <li class="shopping__item" data-itemid="${ item.id }">
        <div class="shopping__count">
            <input type="number" value="${ item.quantidade }" step="${ item.quantidade }" class="shopping__count-value">
            <p> ${ item.unidade } </p>
        </div>
        <p class="shopping__description">${ item.ingrediente }</p>
        <button class="shopping__delete btn-tiny">
            <svg class="delete-btn">
                <use class="delete-btn" href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    ` 

    domElements.shoppingList.insertAdjacentHTML( "beforeend", template );
}

export const deletaItem = ( id ) => {
    const item = document.querySelector( `[data-itemid="${ id }"]` );
    if( item ) {
        item.parentElement.removeChild( item );
    }

}