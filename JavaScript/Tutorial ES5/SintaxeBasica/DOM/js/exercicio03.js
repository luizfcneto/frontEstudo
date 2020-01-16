/*
    Descrição:
        Fazer uma função em js que altere a cor de plano de fundo do elemento HTML
        parafrafo.

HTML DOM elements
    https://www.w3schools.com/js/js_htmldom_elements.asp

HTML DOM Collection
    https://www.w3schools.com/js/js_htmldom_collections.asp

Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-3.php
*/

function setPBackGroundColor(){

    let color = prompt( "Informe o nome de uma cor válida" );

    console.log( "Parametro Fornecido: " + color );

    // let p = document.getElementById("p");            //-> Retorna apenas um único elemento que tenha o ID específico
    let allP = document.getElementsByClassName("p");    //-> Retorna uma colletcion HTML é possivel fazer dessa forma
    // let allP = document.querySelector(".p");         //-> Retorna o primeiro elemento encontrado 
    // let allP = document.querySelectorAll(".p");      //-> Retorna uma lista de nós 
    // let allP = document.getElementsByTagName("p");   //-> Retorna uma colletion HTML é possivel fazer dessa forma
    console.log( allP );

    for( let i = 0; i < allP.length; i++ ){
        allP[i].style.backgroundColor = color;
    }
    
}

/* OBS:
    Não podemos alterar o estilo de um elemento HTML, a propriedade style é inexistente em 
    elementos através de querySelectorAll

    Conseguimos fazer através do getElementByID(), porém como é por ID,
    somente um elemento html com aquele id único irá sofrer a alteração de estilo.

    Através do querySelector() temos o mesmo problema de getElementByID(), somente um elemento é 
    captado e poderá ter o seu estilo alterado.

    Caso o retorno dessas funções sejam uma collection de HTML, no caso os métodos:
        getElementsByTagName("p") e getElementsByClassName("p")
    então nós teremos um array de elementos html, nesse caso, "p", portanto precisamos
    iterar/percorre-los para setar a propriedade "style" em cada um deles.
    OBS: Collection de HTMl não é sinonmio de array de HTML, array e collections são diferentes
    ainda que possamos iterar pelos seus elementos, porém não podemos utilizar os métodos de array
    como push, pop, em uma collection

*/