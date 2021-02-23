// carousel.js slide-show/carousel
let imageIds = [ "photo-1", "photo-2", "photo-3"];

function startSlideShow( idAtual ){
    
    setTimeout( () => {
        changeSlideShowPhoto( idAtual );
    }, 5000 );

}

function changeSlideShowPhoto( idAtual ){
    const imagemAtual = document.querySelector( `#${ idAtual }` );
    imagemAtual.parentElement.classList.toggle( "active" );

    let proximo;
    if( idAtual === imageIds[ 0 ] ){
        proximo = imageIds[ 1 ];
    }else if ( idAtual === imageIds[ 1 ] ){
        proximo = imageIds[ 2 ];
    }else if ( idAtual === imageIds[ 2 ] ){
        proximo = imageIds[ 0 ];
    }

    const imagemProxima = document.querySelector( `#${ proximo }` );
    imagemProxima.parentElement.classList.add( "active" );
    
    startSlideShow( imagemProxima.id );
}

startSlideShow( imageIds[0] );