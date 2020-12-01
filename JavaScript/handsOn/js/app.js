
/*
    UserInterfaceController()
        - exibir valor de receita total;
        - exibir valor de gasto total;
        - exibir porcentagem do custo / total
        - exibir lista de itens de receita 
            - adicionar item na lista de receita
            - adcionar item na lista de custo
            - remover item da lista de receita
            - remover item da lista de custo

        - captar valor e descrição do item novo.

        Classe UIController{
            - budget__value 
            - budget__income--value
            - budget__expenses--value
            - budget__expenses--percentage
            - item__value
            - item__percentage


            -> Métodos explicados acima.

        }

*/
//ES5
var UiController = ( function( ){

    var DOMinputs = {
        inputAddType: ".add__type",
        inputAddDescription: ".add__description",
        inputAddValue: ".add__value",
        inputBtn: ".add__btn"
    };

    var DOMBugets = {
        rendimentoGeral: ".budget__income--value",
        despesaGeral: ".budget__expenses--value",
        resultadoGeral: ".budget__value"
    }

    return {
        captaValoresFormulario: function(){
            var tipo = document.querySelector( DOMinputs.inputAddType ).value;
            var descricao = document.querySelector( DOMinputs.inputAddDescription ).value;
            var valor =  document.querySelector( DOMinputs.inputAddValue ).value;

            return {
                tipo, descricao, valor
            };

        },

        getDomInputs: function(){
            return DOMinputs;
        },

    }

})();

/*
    DataController()
        - calcular receita total ( somanto todos os elemntos da lista de receita )
        - calulcar custo total ( somando todos os elementos da lista de custo )
        - calcular porcentagem de custo / total 
        - calcular porcentagem de um item de custo / total

        Classe DataController{
            - budget__value 
            - budget__income--value
            - budget__expenses--value
            - budget__expenses--percentage
            - item__value
            - item__percentage

            -> Métodos explicados acima.
        }

*/
//ES5
var DataController = ( function() {

    //Classe de Rendimento
    var Rendimento = function( id, descricao, valor ){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;

    }

    //Classe de Despesa
    var Despesa = function( id, descricao, valor ){
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;

    }

    //Objeto para manipular todos os dados captados 
    var dados = {

        //Objeto que irá armazenar todos os dados captados
        todosDados: {
            despesas: [],
            rendimentos: []
        },
    
        //Objeto que irá armazenar a quantidade de cada tipo de dado
        quantidadeDados: {
            qtdDespesas: 0,
            qtdRendimentos: 0
        }
        
    }

    var rendimentoTotal = 0, despesaTotal = 0;
    var porcentagemDespesaGeral, porcentagemDespesa;

    return {
        adicionaItem: function( tipo, descricao, valor ){

            //Rendimento
            if( tipo === "rendimento" ){

                // Gerando ID do novo item ( rendimento )
                var id = dados.todosDados.rendimentos.length

                // Declarando um rendimento novo.
                var rendimentoNovo = new Rendimento( id, descricao, valor );

                //Inserindo o rendimento novo no array de todos os rendimentos
                dados.todosDados.rendimentos[ qtdRendimentos ] = rendimentoNovo;
                
                // ou
                // dados.todosDados.rendimentos.push( rendimentoNovo );
                
                // Atualizando a quantidade de rendimentos que tem no array.
                dados.quantidadeDados.qtdRendimentos++;
                return rendimentoNovo;

            }
            
            //Despesa
            else if ( tipo === "despesa" ){

                // Gerando ID do novo item ( despesa )
                var id = dados.todosDados.despesas.length;

                //declarando despesa nova.
                var despesaNova = new Despesa( id, descricao, valor );
                
                // Inserindo despesa nova no array de todas as despesas
                dados.todosDados.despesas[ qtdDespesas ] = despesaNova;
                // ou
                // dados.todosDados.despesas.push( despesaNova );

                //Atualizando a quantidade de despesas que tem no array.
                dados.quantidadeDados.qtdDespesas++;

                return despesaNova;

            }else{
                console.log( "Tipo Invalido! ");
                
            }


        },


        atualizaRendimentoTotal: function( novoRendimento ){
            rendimentoTotal += novoRendimento;

        },
        
        atualizaDespesaTotal: function( novaDespesa ){
            despesaTotal += novaDespesa;
        },

        atualizaPorcentagemDespesaGeral: function( ){
            porcentagemDespesaGeral = despesaTotal / rendimentoTotal;
        },

        calculaPorcentagemDespesa: function( despesaEspecifica ){
            return despesaEspecifica / rendimentoTotal;
        }

    }


}) ();

/*
    MainController()
        - Irá fazer a ponte de comunicação entre o DataController() e o UIController();
        - Conterá a lógica do evento.

        Classe MainController
            - add__btn
        }

*/
//ES5
var MainController = ( function( dtController, uiController ) {

    var domInputs = uiController.getDomInputs();

    var setUpEventsListeners = function(){

        //Função anonima de um evento ( nesse caso evento de clicar o butao para adicionar um novo item! )
        document.querySelector( domInputs.inputBtn ).addEventListener( "click", captaFormulario );
    
        
        /*Função anonima de um evento ( nesse caso evento de apertar o botão "enter" após completar o "formulário contendo informações necessárias " ).
            Lembrando que o usuário clica qualquer tecla na janela global da página web: vulgo "document". Então adicionamos eventListener nele.
        */
        document.addEventListener( "keypress", function( event ){

            if( event.keyCode === 13 || event.which === 13 ){
                captaFormulario();
                
            }

        });

    }

    var captaFormulario = function(){

        /*  1- captar do "formulário" o valor da classe ".add__type" que tem como opções: "option".value = "inc" || "option".value = "exp"
            2- captar do "formulário" o valor da descrição do item: através da classe: .add__description 
            3- captar do "formulário" o valor que acompanhará o item: através da classe: .add__value */
        var domValues = uiController.captaValoresFormulario();
               
        //4- enviar 1 e 3 para DataController(); -> para fazer os calculos para atualizar.  
        var novoItem = DataController.adicionaItem( domValues.tipo, domValues.descricao, domValues.valor );

        //5- envia 2 e resultado de 4 para UIController();

       
    }

    return {
        //Área pública, retornando essa função ( que é um objeto ) que será executada depois de entrar na MainController().
        init: function(){
            console.log("Aplicação Iniciada!");
            setUpEventsListeners();
        }
    };

}) ( DataController, UiController );

//Inicializando a Aplicação
MainController.init();