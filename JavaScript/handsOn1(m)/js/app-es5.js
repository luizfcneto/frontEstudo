/*
        Referências:
    
    querySelector: 
        - https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector
        - https://www.w3schools.com/jsref/met_document_queryselector.asp

*/



console.log( "arquivo app-es5.js carregado" );

// Classe UiController
var UiController = ( function () {
    
    // Atributos e Métodos privados
    var DOMElements = {
        inputType: document.querySelector( ".add__type" ),
        inputDescription: document.querySelector( ".add__description" ),
        inputValue: document.querySelector( ".add__value" ),
        btn: document.querySelector( ".add__btn" )

    }

    // Métodos públicos
    return {
        getDOMElements: function (){
            return DOMElements;

        },

        inputListener: function(){
            var inputs = [];
            inputs.push( DOMElements.inputType.value );
            inputs.push( DOMElements.inputDescription.value );
            inputs.push( DOMElements.inputValue.value );
            return inputs; 

        }

    } 

} ) ();


// Classe DataController
var DataController = ( function() {
    
    // Construtor de Despesa
    var Despesa = function( type, description, value, percentage ){
        this.id = data.total.despesas
        this.type = type;
        this.description = description;
        this.value = value;
        this.percentage = percentage
        
    }

    // Construtor de Rendimento
    var Rendimento = function( type, description, value ) {
        this.id = data.total.rendimentos;
        this.type = type;
        this.description = description;
        this.value = value;
        
    }

    var data = {

        elementos: {
            listaDespesa: [],
            listaRendimento: []
        },

        total: {
            despesas: 0,
            rendimentos: 0
        }

    }

    return {
        getData: function(){
            return data;
        },

        addData: function( type, description, value ){
            
            // console.log( type, description, value );

            if( type === "rendimento" ){
                var elementoNovo = new Rendimento( type, description, value );
                
                // console.log( elementoNovo );
                data.elementos.listaRendimento.push( elementoNovo );
                data.total.rendimentos++ 

            } else if( type === "despesa" ){
                var elementoNovo = new Despesa( type, description, value );
                data.listaDespesa.push( elementoNovo );
                data.total.despesas++;
            }

        }
    }


} ) ();


// Classe MainController
var MainController = ( function( dtCtrl, uiCtrl ) {

    var inputs = uiCtrl.getDOMElements();

    // Função setAddEventHandler
    var setAddEventHandler = function() {
        
        inputs.btn.addEventListener( "click", function(){
            // console.log( uiCtrl.inputListener() );
            alert( "Entrada Adicionada" );
            var inputs = uiCtrl.inputListener();
            dtCtrl.addData( inputs[0], inputs[1], inputs[2] );
        });

    }

    return {

        init: function(){
            console.log( "Programa inicializado" );
            setAddEventHandler();
            
        },

        displayData: function(){
            console.log( dtCtrl.getData() );
        }
    }

} ) ( DataController, UiController );


MainController.init();
