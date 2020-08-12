export default class Likes {
    constructor(){
        this.likes = [];
    }

    adicionaElementoLike( id, titulo, autor, imagem  ){
        const like = {
            id,
            titulo,
            autor,
            imagem
        }

        this.likes.push( like );
        // persistir no localStorage
        this.persistirDado();
        return like;
    }

    removeElementoLike( id ){
        const index = this.likes.findIndex( elemento => elemento.id === id );
        // persistir no localStorage
        this.persistirDado();
        this.likes.splice( index, 1 );
    }

    isLiked( id ){
        return this.likes.findIndex( elemento => elemento.id === id ) !== -1;
    }

    getNumLikes(){
        return this.likes.length;
    }

    persistirDado(){
        localStorage.setItem( "likes", JSON.stringify( this.likes ) );
    }
    
    carregarDadosLocalStorage(){
        const storage = JSON.parse( localStorage.getItem( "likes" ) );
        
        if( storage ){
            this.likes = storage;
        }
    }
}