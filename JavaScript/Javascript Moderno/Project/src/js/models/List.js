import uniqid from "uniqid";

export default class List {
    constructor(){
        this.itens = [];
    }

    // método que adicinona itens na lista
    adicionaItem( quantidade, unidade, ingrediente ){
        const item = {
            id: uniqid(),
            quantidade,
            unidade,
            ingrediente
        }

        this.itens.push( item );
        return item;
    }

    removeItem( id ){
        
        const index = this.itens.findIndex( elemento => {
            if( elemento.id === id ){
                return elemento;
            }
        } );

        // [ 2, 5, 8, 10 ] splice( 1, 2 ) -> retorna [ 5, 8 ],  array se torna: [ 2, 10 ]
        // [ 2, 5, 8, 10 ] slice( 1, 2 ) -> retorna 5, array fica intacto: [ 2, 5, 8, 10 ]
        this.itens.splice( index, 1 );
    }

    atualizaQuantidade( id, novaQuantidade ){
        if( novaQuantidade > 0 ){
            this.itens.find( elemento => {
                if( elemento.id === id ){
                    return elemento;
                }
            }).quantidade = novaQuantidade;
        }
    }

}