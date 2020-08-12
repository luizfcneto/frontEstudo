import { domElements } from "./base";

export const toggleLikeButton = ( isLiked ) => {

    const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
    document.querySelector( ".recipe__love use" ).setAttribute("href", `img/icons.svg#${ iconString }`);
    // icons.svg#icon-heart-outlined
}


export const modificaMenuLike = numLikes => {
    domElements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
}

export const renderizaLike = like => {
    const template = 
    `
    <li>
        <a class="likes__link" href="#${ like.id }">
            <figure class="likes__fig">
                <img src="${ like.imagem }" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${ like.titulo }</h4>
                <p class="likes__author">${ like.autor }</p>
            </div>
        </a>
    </li>
    `

    domElements.likesList.insertAdjacentHTML( "beforeend", template );
}

export const deletaLike = ( id ) => {
    const elemento = document.querySelector( `.liked__link[href*="#${ id }"]` ).parentElement;
    if( elemento ){
        elemento.parentElement.removeChild( elemento );
    }
}