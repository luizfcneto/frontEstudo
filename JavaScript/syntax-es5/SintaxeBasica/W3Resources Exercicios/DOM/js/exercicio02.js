/*
    Descrição:
        Fazer uma função em js que ao acontecer o evento de clicarem no botão "Enviar" 
        do tipo "submit" do formulário, captar os valores contidos nos inputs
        de FirstName e LastName, ids "firstName" e "lastName" respectivamente.

Parar recarregamento da página HTML ao clicar no botão do tipo submit do formulário:
    https://www.codexpedia.com/javascript/submitting-html-form-without-reload-the-page/
    "acrescentar ";return false" após a execução da função do evento ao clicar no formulário
    ver arquivo html linha 27-28

HTML inputText value:
    https://www.w3schools.com/tags/att_input_value.asp

HTML DOM input Object:
    https://www.w3schools.com/jsref/dom_obj_text.asp

JS inputText HTML propiedade value:
    https://www.w3schools.com/jsref/prop_text_value.asp
    
JS form elements collection:
    https://www.w3schools.com/jsref/coll_form_elements.asp


Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-2.php
*/

//Minha solulção, específica para cada campo do formulário
function getFormValue(){
    

    // Elementos Input do DOM HTML do formulário
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");

    // Pegando o valor da variavel contida no elemento html do firstName
    console.log( firstName.value );

    // Pegando o valor da variavel contida no elemento html do firstName
    console.log( lastName.value );
    
}

//Solução para captar todos os valores dos elementos dentro de formulario
function getFormValue2(){

    // Elemento FORM do DOM HTML
    let inputsForm = document.getElementById("form");
    
    // Propriedade length do elemento FORM do HTML
    console.log( inputsForm.length );

    // for( let i = 0; i < inputsForm.elements.length; i ++ ){

    //     if( inputsForm.elements[i].value !== "Enviar" ){
    //         console.log( inputsForm.elements[i].value );
    //     }
    // }

    for( let i = 0; i < inputsForm.length - 1; i++ ){
        // Propriedade value de cada elemento contido dentro do elemento FORM 
        console.log( inputsForm.elements[i].value, ", Posição: " + i );
    }

}