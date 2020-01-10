/*
    Descrição:
        Fazer uma função em js que dispare um evento ao clicarem no botão "Add" do
        formulário, que capte o valor contendo do formulário, adicione em um array

        Fazer uma outra função em js que seja responsável por exibir esse array
        de elementos no HTML.

HTML:
    https://www.w3schools.com/tags/tag_button.asp
    https://www.w3schools.com/html/html_forms.asp


DOM:
    https://www.w3schools.com/jsref/prop_text_value.asp
    https://www.geeksforgeeks.org/how-to-get-the-value-of-text-input-field-using-javascript/

    https://www.w3schools.com/jsref/dom_obj_li.asp
    https://www.w3schools.com/jsref/met_document_createelement.asp
    https://www.w3schools.com/jsref/met_node_appendchild.asp

Event:
    https://www.w3schools.com/jsref/met_element_addeventlistener.asp

Array:
    https://www.w3schools.com/jsref/jsref_push.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Solução: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-13.php
*/

//Variavel de dados do array
const arrElement = [];

//Variaveis do DOM
const addButton = document.getElementById("add");
const displayButton = document.getElementById("display");
const inputElement = document.getElementById("element-input");
const nodeList = document.getElementById("ul-list");

//Função para adicionar o elemento contido no input em um array
function addElementFromFormToArray(){
    console.log( "Cliquei no botão de adicionar" );
    console.log( inputElement.value );
    arrElement.push( inputElement.value );
    console.log( arrElement );
}

//Função para exibir os elementos contidos no array no HTML
function displayElementsOfArray(){
    console.log( "Cliquei no botão de exibir ")
    console.log( arrElement );

    for( let i = 0; i < arrElement.length; i++ ){
        //Criando um elemento li HTML
        let newNode = document.createElement("LI");
                
        //Adicionando ao elemento li criado anteriormente o seu conteudo "string"
        let element = document.createTextNode( arrElement[i].toString() );
        
        //Adicionando o conteudo "element" no novo elemento li
        newNode.appendChild( element );
        
        //Adicionando o elemento li no elemento ul html
        nodeList.appendChild( newNode );
        
    }

}

//Eventos dos Botões
addButton.addEventListener( "click", addElementFromFormToArray );

displayButton.addEventListener( "click", displayElementsOfArray );