import axios from "axios";

export default class Search {
    constructor( query ){
        this.url = "https://forkify-api.herokuapp.com/api/search?q="
        this.query = query;
    }

    async getBusca(){

        try {
            let resp = await axios.get( this.url + this.query );
            if( resp.status === 200 ){
                this.data = resp.data;
                // console.log( resp.data.recipes );
                this.receitas = resp.data.recipes;
                
            }else{
                console.log( "Status da resposta da requisição", resp.status )
            }
            
        } catch( error ){
            console.log( error );
        }
    }


}