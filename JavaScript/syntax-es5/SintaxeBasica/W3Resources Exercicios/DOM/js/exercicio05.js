/*
    Descrição:
        Escrever uma função em js que ao clicarem no botão adicione 
        uma linha na tabela

CSS - Bootstrap:
    https://getbootstrap.com/docs/4.4/content/tables/

HTML DOM create element:
    https://www.w3schools.com/jsref/met_document_createelement.asp

HTML DOM insertRow:
    https://www.w3schools.com/jsref/met_table_insertrow.asp

HTML DOM insertCell:
    https://www.w3schools.com/jsref/met_tablerow_insertcell.asp


Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-5.php
*/

function insertRow(){

    let table = document.getElementById("sampleTable");
    console.log( table );

    /* table.firstElementChild = <thead>, thead.firstElementChild = <tr>, 
     childElementCount = quantidade de elementos filhos que tr teria, no caso 2
     que é a quantidade de colunas */
    let colunas = table.firstElementChild.firstElementChild.childElementCount;
    console.log( "Tabela possui " + colunas + " colunas" ); 
    
    // ultimo elemento da table que é <tbody> e seu ultimo elemento que é <tr>
    console.log( table.lastElementChild.lastElementChild );

    // função que verifica se elemento tem nós filhos;
    console.log( table.hasChildNodes() );

    // propriedade que capta o nome da tag do elemento 
    console.log( table.lastElementChild.lastElementChild.tagName );

    // childElementCount retorna a quantidade de filhos que aquele nó/elemento possui
    console.log( table.lastElementChild.childElementCount );

    // Criando um elemento TR que é uma table row
    // let newRow = document.createElement("tr");
    // newRow.textContent = "conteudo da celula da tabela"

    // função noPai.appendChild(no), insere o nó "no" dentro do no pai "noPai" 
    // table.lasElementChild.appendChild( newRow );

    //Solução de inserir uma linha ( com a quantidade de células de acordo com coluna )
    if( colunas === 1 ){
        let newRow = document.createElement("tr");
        let celula = document.createElement("td");
        celula.textContent = " Linha " + table.lastElementChild.childElementCount 
            + " Celula " + table.lastElementChild.lastElementChild.childElementCount + 1;  
    
        table.lastElementChild.lastElementChild.appendChild( newRow );

    }else if( colunas > 1 ){
        let newRow = document.createElement("tr");
        
        for( let i = 0; i < colunas; i++ ){
            let celula = document.createElement("td");
            celula.textContent = " Linha " + table.lastElementChild.childElementCount
                + " - Celula " + ( i + 1 ); 
            
            newRow.appendChild( celula );
        }
        table.lastElementChild.appendChild( newRow );

    }

}

// Solução adicionando celulas no começo da Tabela
function insertRow2(){
    let table = document.getElementById("sampleTable").insertRow( 1 );
    let celula1 = table.insertCell(0);
    let celula2 = table.insertCell(1);
    celula1.innerHTML = "Nova celula 1";
    celula2.innerHTML = "Nova celula 2";
}