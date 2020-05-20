/*
        Referências:
    
    querySelector: 
        - https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector
        - https://www.w3schools.com/jsref/met_document_queryselector.asp


    forEach:
        - https://www.w3schools.com/jsref/jsref_foreach.asp
        - https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_foreach
        - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


    Array.shift():
        - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
        
*/



console.log( "arquivo app-es5.js carregado" );

// Classe UiController
var UiController = ( function () {
    
    // Atributos e Métodos privados
    var DOMElements = {
        inputType: document.querySelector( ".add__type" ),
        inputDescription: document.querySelector( ".add__description" ),
        inputValue: document.querySelector( ".add__value" ),
        btn: document.querySelector( ".add__btn" ),

        rendimentoList: document.querySelector( ".income__list" ),
        despesaList: document.querySelector( ".expenses__list" ),

        rendimentoTotal: document.querySelector( ".budget__income--value" ),
        despesaTotal: document.querySelector( ".budget__expenses--value" ),
        porcentagemDespesaTotal: document.querySelector( ".budget__expenses--percentage" )

    }

    var despesaDOMElement = '<div class="item clearfix" id="expense-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value"> %value% </div> <div class="item__percentage"> %percentage% </div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"> </i> </button> </div> </div> </div>';
    var rendimentoDOMElement = '<div class="item clearfix" id="income-%id%"> <div class="item__description"> %description% </div> <div class="right clearfix"> <div class="item__value"> %value%</div> <div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"> </i> </button> <div> </div> </div>';

    var refreshDisplayBudget = function( economiaTotal, despesaTotal, porcentagemDespesaTotal ) {
        DOMElements.rendimentoTotal.textContent = formatData( economiaTotal.toString() );
        DOMElements.despesaTotal.textContent = formatData( despesaTotal.toString(), "despesa" );
        DOMElements.porcentagemDespesaTotal.textContent = formatPercentage( porcentagemDespesaTotal );
    }


    var clearInput = function() {
        DOMElements.inputType.value = "rendimento";
        DOMElements.inputDescription.value = "";
        DOMElements.inputValue.value = "";

    }

    var updateDisplayDespesasPercentages = function( despesas ) {
        // console.log( DOMElements.despesaList );
        var listaDespesas = document.querySelectorAll( ".item__percentage" );

        for( var i = 0; i < despesas.length; i++ ){
            listaDespesas[ i ].textContent = formatPercentage( despesas[ i ].percentage.toString() );
        }
    }

    var putFrontSign = function ( string, sign ) {
        return sign + " " + string;
    }

    

    var decimalManipulation = function ( number ) {
        if( isNaN( number ) || number === undefined ){
            return ".00";
        }

        number = number.toString();
        if( number.length ===  1 ){
            return "." + number + "0";
        
        }else if( number.length >= 2 ) {
            return "." + number[ 0 ] + number[ 1 ]; 
        
        }else{
            console.log( "deu erro na função decimalManipulation() " );
        }

    }

    var verifySign = function( arrayString ){
        if( arrayString[ 0 ] === "-" ){
            return "despesa"
        }else{
            return "rendimento";
        }
    }

    var formatData = function( element, type ) {
        
        // 1- Separando parte inteira de parte decimal.
        element = element.split( "." );

        // Verificando sinal de economia geral
        if( type === undefined ){
            type = verifySign( element[ 0 ].split( "" ) );
            
            if( type === "despesa" ){
                var temp = element[ 0 ].split( "" );
                temp.shift();
                element[ 0 ] = temp.join("" );
            }
        }

        
        // 2 - Adicionando duas casas decimais caso elemento apenas possua parte inteira ( "00" );
        element[ 1 ] = decimalManipulation( element[ 1 ] );        
        
        
        // 3 - Colocar virgulas para separar a parte inteira a cada 3 posições
        var answer = [];
        var arrayNumber = element[ 0 ].split( "" ).reverse();

        for( var i = 0; i < arrayNumber.length; i++  ){
            answer.push( arrayNumber[ i ] );
            if( ( i + 1 ) % 3 === 0 && i !== arrayNumber.length - 1 ){
                answer.push( "," );
            }

        }

        answer =  answer.reverse().join( "" );
        
        if( type === "rendimento" ){
            return putFrontSign( answer, "+" ) + element[ 1 ];
        
        } 
        
        if( type === "despesa" ){
            return putFrontSign( answer, "-" ) + element[ 1 ];
        
        } else {
            console.log( "tipo:", type, "Tipo não fornecido" );
        }

    }

    var formatPercentage = function ( element ) {
        return element + "%";
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
            
        },

        addUiData: function( data, total, type ){
            var elementoNovo;


            
            if( type === "rendimento" ){
                elementoNovo = rendimentoDOMElement;

                // Renomeando id:
                elementoNovo = elementoNovo.replace( "%id%", total.rendimentos );

                // Renomeando descrição:
                elementoNovo = elementoNovo.replace( "%description%", data.listaRendimento[ data.listaRendimento.length - 1 ].description );

                // Renomeando Valor:
                elementoNovo = elementoNovo.replace( "%value%", formatData( data.listaRendimento[ data.listaRendimento.length - 1 ].value, "rendimento" ) );

                DOMElements.rendimentoList.insertAdjacentHTML( "beforeEnd", elementoNovo );

                clearInput();

            }else if( type === "despesa" ){
                elementoNovo = despesaDOMElement;
                
                // Renomeando Id:
                elementoNovo = elementoNovo.replace( "%id%", total.despesas );
                
                // Renomeando descrição:
                elementoNovo = elementoNovo.replace( "%description%", data.listaDespesa[ data.listaDespesa.length - 1 ].description );

                // Renomeando Valor:
                elementoNovo = elementoNovo.replace( "%value%", formatData( data.listaDespesa[ data.listaDespesa.length - 1 ].value, "despesa" ) );

                // Renomeando Porcentagem:
                elementoNovo = elementoNovo.replace( "%percentage%", formatPercentage( data.listaDespesa[ data.listaDespesa.length - 1 ].percentage.toString() ) );
                
                DOMElements.despesaList.insertAdjacentHTML( "beforeEnd", elementoNovo );
                
                clearInput();
            }

        },

        refreshDisplayData: function( data ){
            
            refreshDisplayBudget( data.economiaTotal, data.totalDespesa, data.totalPorcentagemDespesa );
            
            if( data.listaDespesa.length !== 0 ){
                updateDisplayDespesasPercentages( data.listaDespesa );
            }

        }

    } 

} ) ();


// Classe DataController
var DataController = ( function() {
    
    // Construtor de Despesa
    var Despesa = function( type, description, value ){
        this.id = data.total.despesas
        this.description = description;
        this.value = value;
        this.type = type;
        
    }

    // Método específico de Despesa para calcular porcentagem
    Despesa.prototype.calculatePercentage = function( totalRendimento ){
        this.percentage = Math.round( ( parseFloat( this.value ) / parseFloat( totalRendimento ) ).toFixed( 2 ) * 100 );
    }

    // Construtor de Rendimento
    var Rendimento = function( type, description, value ) {
        this.id = data.total.rendimentos;
        this.description = description;
        this.value = value;
        this.type = type;
        
    }

    var data = {

        elementos: {
            listaDespesa: [],
            listaRendimento: [],
            economiaTotal: 0,
            totalRendimento: 0,
            totalDespesa: 0,
            totalPorcentagemDespesa: -1
        },

        // Rendimento: [ 2, 4, 5, 7, 9 ]
        total: {
            despesas: 0,
            rendimentos: 0
        }

    }

    return {
        getData: function(){
            return data;
        },

        getTotal: function(){
            return data.total;
        },

        addData: function( type, description, value ){


            if( type === "rendimento" ){
                var elementoNovo = new Rendimento( type, description, value );
                
                // console.log( elementoNovo );
                data.elementos.listaRendimento.push( elementoNovo );
                data.total.rendimentos++                 

            } else if( type === "despesa" ){
                var elementoNovo = new Despesa( type, description, value );
                data.elementos.listaDespesa.push( elementoNovo );
                data.total.despesas++;
            }

        },

        validateData: function( arrayInputs ){
            
            // Descrição vazia
            if( arrayInputs[1] === null || arrayInputs[1] === "" ){
                return false;
            
            // Valor não existente, ou valor menor ou igual a zero
            }else if( isNaN( parseInt( arrayInputs[2] ) || parseInt( arrayInputs[2] === undefined ) ) === true || parseInt( arrayInputs[2] <= 0 ) ) {
                return false;

            }else {
                return true;
            }
        },

        // Melhorar isso aqui!
        calculateTotal: function(){
            var rendimentoTotal = 0;
            var despesaTotal = 0;

            // // Calcula total de despesa usando Lista de Despesas.
            // for( var i = 0; i < data.elementos.listaDespesa.length; i++ ){
            //     despesaTotal += parseFloat( data.elementos.listaDespesa[ i ].value );
            // }
            data.elementos.listaDespesa.forEach( function( element ) {
                despesaTotal = despesaTotal + parseFloat( element.value ); 
            } )
           
            //Atualiza o Objeto com o total de despesa
            data.elementos.totalDespesa = despesaTotal;

            // Calcula total de rendimento usando Lista de Rendimentos.
            // for( var i = 0; i < data.elementos.listaRendimento.length; i++ ){
            //     rendimentoTotal += parseFloat( data.elementos.listaRendimento[ i ].value );
            // }
            data.elementos.listaRendimento.forEach( function( element ){
                rendimentoTotal = rendimentoTotal + parseFloat( element.value );
            } );

            // Atualiza o Objeto com o total de rendimento
            data.elementos.totalRendimento = rendimentoTotal;
            

            // Atualizando economia total = rendimento total - despesa total;
            data.elementos.economiaTotal = rendimentoTotal - despesaTotal;
            
            // Calcula porcentagem de cada elemento da lista de despesa.
            // for( var i = 0; i < data.elementos.listaDespesa.length; i++ ){
            //     data.elementos.listaDespesa[ i ].calculatePercentage( data.elementos.totalRendimento );
            // }
            
            data.elementos.listaDespesa.forEach( function( element ){
                element.calculatePercentage( data.elementos.totalRendimento );
            } )

            // Atualiza porcentagem de despesa total
            if( rendimentoTotal === 0 ){
                data.elementos.totalPorcentagemDespesa = -1;
            } else {
                data.elementos.totalPorcentagemDespesa = ( parseFloat( data.elementos.totalDespesa ) / rendimentoTotal ).toFixed( 2 ) * 100;
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
                       
            var inputs = uiCtrl.inputListener();
            
            if( dtCtrl.validateData( inputs ) === true ){
                var totalData, data;
                dtCtrl.addData( inputs[0], inputs[1], inputs[2] );
                console.log( "Adicionado com sucesso!" );
                

                dtCtrl.calculateTotal();
                
                totalData = dtCtrl.getTotal();
                data = dtCtrl.getData();

                uiCtrl.addUiData( data.elementos, totalData, inputs[0] );

                uiCtrl.refreshDisplayData( data.elementos );

            }else {
                console.log( "Elemento novo não adicionado! Campos obrigatórios não válidos" );
            }
            
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
