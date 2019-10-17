
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
	
	//Códigos privados relacionados a class

	//Tudo dentro do return é público    
    return {
        captaValoresFormulario: function(){
            var tipo = document.querySelector( ".add__type" ).value;
            var descricao = document.querySelector( ".add__description" ).value;
            var valor =  document.querySelector( ".add__value" ).value;

            return {
                tipo, descricao, valor
            }

        }

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
var DataController = ( function(){



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

    var captaFormulario = function(){

        /*  	TODO List
			1- captar do "formulário" o valor da classe ".add__type" que tem como opções: "option".value = "inc" || "option".value = "exp"
            2- captar do "formulário" o valor da descrição do item: através da classe: .add__description 
            3- captar do "formulário" o valor que acompanhará o item: através da classe: .add__value */
        var domValues = uiController.captaValoresFormulario();
        console.log( domValues );
        
        //4- enviar 1 e 3 para DataController(); -> para fazer os calculos para atualizar.  
        
        //5- envia 2 e resultado de 4 para UIController();

       
    }

    //Função anonima de um evento ( nesse caso evento de clicar o butao para adicionar um novo item! )
    document.querySelector( ".add__btn" ).addEventListener( "click", captaFormulario );
 
    
    /*
		Função anonima de um evento ( nesse caso evento de apertar o botão "enter" -> código-chave = 13 após completar o "formulário contendo informações necessárias " ).
        Lembrando que o usuário clica qualquer tecla na janela global da página web: vulgo "document". Então adicionamos eventListener nele.
    */
    document.addEventListener( "keypress", function( event ){
        // console.log( event );

        if( event.keyCode === 13 || event.which === 13 ){
            captaFormulario();
            
        }


    });

}) ( DataController, UiController );
