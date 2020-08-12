import axios from "axios";

/* 
    Dados que queremos dessa consulta de Receitas, por id:
    - image_url;
    - title
    - ingredients: [];
    - publisher;
    - source_url;
*/

export default class Recipe {
    constructor( id ) {
        this.id = id;
        this.url = "https://forkify-api.herokuapp.com/api/get?&rId=";
    }

    async getRecipeById(){
        
        try{
            const resp = await axios.get( `${this.url}${this.id}` );
            if( resp.status === 200 ) {
                const data = resp.data;

                // image_url:
                this.imageUrl = data.recipe.image_url;

                // title:
                this.titulo = data.recipe.title;

                // ingredients:
                this.ingredientes = data.recipe.ingredients;
                
                // publisher:
                this.autor = data.recipe.publisher;

                // source_url:
                this.sourceUrl = data.recipe.source_url;

            }else{
                console.log( "Status da requisição foi: " + resp.status );
            }
        }catch( error ){
            console.log( error );
        }

    }

    calculaTempoDeProducao(){
        const numIngredientes = this.ingredientes.length;
        const periodo = Math.ceil( numIngredientes / 2 );
        this.tempo = periodo * numIngredientes;
    }

    calculaAlimentaPessoas() {  
        this.serve = 2;
    }

    parseIngredientes() {
        const unitsLong = [ "tablespoons", "tablespoon", "ounces", "ounce", "teaspoon", "teaspoons", "cups", "pounds" ];
        const unitsShort = [ "tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound" ];
        const units = [ ...unitsShort, "kg", "g" ]

        const newIngredientes = this.ingredientes.map( element => {
            // Modelar unidades de medidas utilizadas nas receitas
            let ingrediente = element.toLowerCase();

            unitsLong.forEach( ( unit, current ) => {
                ingrediente = ingrediente.replace( unit, unitsShort[current] );
            } );

            // Remover parenteses
            // ingrediente = ingrediente.replace( "(", "" );
            // ingrediente = ingrediente.replace( ")", "" );

            // Ou com Regex:
            ingrediente = ingrediente.replace(/ *\([^)]*\) */g, "");

            // Separar ingredientes em contagem, unidades e texto
            const arrayIngredientes = ingrediente.split(" ");
            const indexUnidade = arrayIngredientes.findIndex( element2 => units.includes( element2 ) );
            let objIngrediente;
            let quantidade;

            if( indexUnidade > -1 ){
                const arrayCount = arrayIngredientes.slice( 0, indexUnidade );
                if( arrayCount.length === 1 ){
                    quantidade = eval( arrayCount[0].replace( "-", "+" ) );

                }else if( arrayCount.length === 0 ) {
                    quantidade = eval( arrayIngredientes( 0, indexUnidade ).join( "+" ));                    
                }

                objIngrediente = {
                    quantidade: quantidade,
                    //quantidade
                    unidade: arrayIngredientes[ indexUnidade ],
                    ingrediente: arrayIngredientes.slice( indexUnidade + 1 ).join(" ")
                }

            } else if( parseInt( arrayIngredientes[0], 10 ) ) {

                objIngrediente = {
                    quantidade: parseInt( arrayIngredientes[0], 10 ),
                    unidade: "",
                    ingrediente: arrayIngredientes.slice( 1 ).join(" ")
                }

            } else if( indexUnidade === -1 ) {
                
                objIngrediente = {
                    quantidade: 1,
                    unidade: "",
                    ingrediente
                    // ingrediente: ingrediente
                }
                
            } 

            return objIngrediente;

        } )
    
        this.ingredientes = newIngredientes;
    }

    atualizaAlimentaPessoas( tipo ){
        // Serve:
        const newServindo = tipo === "dec" ? this.serve - 1 : this.serve + 1;
        
        //ingredientes
        this.ingredientes.forEach( (current) => {
            current.quantidade *= ( newServindo / this.serve );
            
        })
        
        // Ingredientes 
        this.serve = newServindo;
    
    }

}