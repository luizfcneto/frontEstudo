
/***********************************************************
    Classe UserInterfaceController
    Atributos e Métodos da UI:
    
    Atributos: 
        - Variaveis Input
        - Variaveis Budget
        - Variaveis Raiz de Lista de rendimentos e despesas
        
    Métodos Públicos:
        - getType()
        - getDescription()
        - getValue();


*/
let UserInterfaceController = ( function(){

    // Atributos / Propriedades:
    // Variaveis Input
    let addInputType;
    let addInputDescription;
    let addInputValue;
    let buttonAddValue = document.querySelector( ".add__btn" );
    

    // // Variaveis Budget
    let totalResultBugdet = document.getElementsByClassName( "budget__value" );
    let totalIncomeBudget = document.getElementsByClassName( "budget__income" );
    let totalExpensesBudget = document.getElementsByClassName( "budget__expenses" );

    // // Raiz da lista de rendimentos e despesas
    let divIncomesList = document.getElementsByClassName( "income__list" );
    let divExpensesList = document.getElementsByClassName( "expenses_list" );

    // Botão de remover um item de alguma das listas acima
    let buttonRemove = document.querySelector( ".item__delete--btn" ); 


    // function captaFormulario(){
    //     addInputType = document.querySelector( ".add__type" );
    //     addinputDescription = document.querySelector( ".add__description" );
    //     addInputValue = document.querySelector( ".add__value" );
     
    //     console.log( addInputType.value );
    //     console.log( addInputText.value );
    //     console.log( addInputValue.value );
    // }

    // Métodos Públicos
    return{

        // // Método para captar dados formulario:
        captaFormulario(){
            console.log( "Captou novos dados: " );
            this.addInputType = document.querySelector( ".add__type" ).value;
            this.addInputDescription = document.querySelector( ".add__description" ).value;
            this.addInputValue = document.querySelector( ".add__value" ).value;
        
            // console.log( this.addInputType );
            // console.log( this.addInputDescription );
            // console.log( this.addInputValue );
        },

        // TODO
        insereDivLista( classeName, obj ){
        
            // Criar um elemento html div 1 novo

            // Adicionar atributos nesse elemento html( class="item clearfix" id="income-0" )

            // Criar mais um elemento html div 2 novo

            // Adicionar atributos nesse elemento html( class="item__description" )
                // Atribuir valor dessa div com obj.descricao[ obj.descricao.length - 1 ]
            
            // Criar mais um elemento html div 3 novo

            // Adicionar atributos nesse elemenot html ( c)
        },

        getType(){
            return this.addInputType;
        },

        getDescription(){
            return this.addInputDescription;
        },

        getValue(){
            return this.addInputValue;
        },

    } 



})();



/***********************************************************
    Classe DataController
    Atributos e Métodos de Dados:

    - Atributos:
        - Objeto rendimentos:
            - descrição: array
            - valores: array
            - totalRendimentos

        - Objeto despesas: 
            - descrição: array
            - valores: array
            - totalDespesas

            - Métodos:
                - calculaPorcentagem( valor )

    - Métodos:
        Privados:
            - calculaSomaTotal( array )
            - 
            - 
            -

        Publicos:
            - insereNovoElemento ( elemento, array )
            - getRendimentos()
            - getDespesas()


*/
let DataController = ( function( ){

    let rendimentos = {
        descricao: [],
        valores: [],
        total: 0
    }

    let despesas = {
        descricao: [],
        valores: [],
        porcentagens: [],
        total: 0,
        totalPorcentagem: 0,
    }

    // Função que atualiza soma total do objeto : rendimentos ou despesas
    function atualizaSomaTotal( arrValor, obj ){
        return obj.total + parseFloat( arrValor[ arrValor.length - 1 ] );
    }

    function atualizaPorcentagem( elemento ){
        return ( elemento / rendimentos.total ).toFixed( 2 ) * 100;
    }

    // Métodos públicos de DataController
    return {
        
        // Método para inserir elemento novo na lista
        insereNovoElemento( elemento, arr ){
            arr.push( elemento );

            if( arr === rendimentos.valores ){
                rendimentos.total = atualizaSomaTotal( arr, rendimentos );
                
                // Atualiza todos os elementos de porcentagem das despesas.
                for( let i = 0; i < despesas.porcentagens.length; i++ ){
                    despesas.porcentagens[i] = atualizaPorcentagem( despesas.valores[i] );
                }

                // Atualizo a porcentagem da despesa total
                despesas.totalPorcentagem = atualizaPorcentagem( despesas.total ); 
                
                console.log( rendimentos, despesas );

            }else if( arr === despesas.valores ){  
                despesas.total = atualizaSomaTotal( arr, despesas );

                // Atualiza porcentagem do ultimo elemento inserido, e adiciona no vetor de porcentagens
                despesas.porcentagens.push( atualizaPorcentagem( elemento ) );
                
                // Atualiza porcentagem total de despesas
                despesas.totalPorcentagem = atualizaPorcentagem( despesas.total );

                console.log( rendimentos, despesas );

            }
            
        },

        getRendimentos(){
            return rendimentos;
        },

        getDespesas(){
            return despesas;
        }

    }

})();




/***********************************************************
    Classe InitController
    Métodos de Inicialização    
    
    Eventos:
        - clicar no botão de adicionar na lista
            - captar valores do formulário;
            - verificar tipo de lista;
            - adicionar na respectiva lista;


        - clicar no botão de remover um item de uma lista    
*/
let InitController = ( function(){

    // Botão de clicar
    let domAddButton = document.querySelector( ".add__btn" );
    let type;
    let description;
    let value;
    let domRemButton = document.querySelector( ".item__delete--btn" );

    // 1- Pegar valores do Formulário quando soltar o evento de clicar no botão ".add__btn"
    domAddButton.addEventListener( "click", function(){
        
        UserInterfaceController.captaFormulario();
        
        type = UserInterfaceController.getType();
        description = UserInterfaceController.getDescription();
        value = UserInterfaceController.getValue();
    
        console.log( "Tipo: " + type, "Descrição: " + description, "Valor: " + value );

        // 2- Pegar os valores do formulário e verificar se é rendimento, ou se é despesa.
        if( type === "rendimento" || type === "+" ){
            console.log( "Rendimento Novo: " + value );
            
            let rendimentos = DataController.getRendimentos();

            // 3- Pegar esses valores e adicionar no valor correspondente dos dados;
            // Adicionando valor no array de valores de rendimentos
            DataController.insereNovoElemento( value, rendimentos.valores );

            // Adicionando descrição no array de descrições de rendimentos
            DataController.insereNovoElemento( description, rendimentos.descricao );

            // Inserir elemento novo na lista de exibição de rendimentos
            UserInterfaceController.insereDivLista( "income__list", rendimentos );

        }else if( type === "despesa" || type === "-" ){
            console.log( "Despesa Nova: " + value );

            let despesas = DataController.getDespesas();

            // 3- Pegar esses valores e adicionar no valor correspondente dos dados;
            // Adicionando valor no array de valores de despesas
            DataController.insereNovoElemento( value, despesas.valores );
            
            // Adicionando descrição no array de descrições de despesas:
            DataController.insereNovoElemento( description, despesas.descricao );

            // Inserir elemento novo na lista de exibição de despesas
            UserInterfaceController.insereDivLista( "expenses__list", despesas );
        }

    });

    
})( UserInterfaceController, DataController );

// let button = document.querySelector( ".add__btn" );

// função de event listener de clique
// button.addEventListener( "click", captaFormulario );

