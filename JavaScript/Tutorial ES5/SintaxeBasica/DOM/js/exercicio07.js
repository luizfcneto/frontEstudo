/*
    Descrição:
        Criar uma função em js que seja disparada ao evento clicar no botão
        "Criar Tabela"  



Solução: https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-7.php
*/

// Minha solução:
function createTable1(){
    let table = document.getElementById("myTable");

    if( table.childElementCount === 0 ){
        console.log( "Criar tabela" );

        let rows = prompt( "Informe a quantidade de linhas da tabela" );
        let cells = prompt( "informe a quantidade de células/colunas dessa tabela" );

        console.log( "Linhas: " + rows, "Colunas:" + cells );

        // Criando a tabela, já existe o elemento table com id = "myTable"
        let table = document.getElementById( "myTable" );
        console.log( table );

        // 1- Criar o elemento TH.
        let thead = document.createElement( "thead" );
        // console.log( "Elemento thead criado: " );
        
        // 1.1 -> Adicionando no elemento table o elemento thead
        table.appendChild( thead );
        // console.log( "Tabela com thead adicionado: " );
        
        // 2- Criar o elemento tbody.
        let tbody = document.createElement( "tbody" ); 
        // console.log( "Elemento tbody criado: " );

        // 2.1 -> Adicionando no elemento table, o elemento tbody
        table.appendChild( tbody );
        // console.log( "Tabela com tbody adicionando: " );


        // 3- Criar o elemento tr
        let tr = document.createElement( "tr" );
        // console.log( "Elemento tr criado para adicionar no th: " );

        // 3.1 - Adicionando elemento tr dentro do elemento thead
        thead.appendChild( tr );
        // console.log( "Tabela com tr adicionando no th: " );

        // 4.1 -> Criando e adicionando celulas (th) no elemento tr
        for( let i = 0; i < cells; i++ ){
            
            // 4- Criar o elemento th -> table header
            let th = document.createElement( "th" );

            th.innerText = "Coluna " + i;
            tr.appendChild( th );
        }

        for( let r = 0; r < rows - 1; r++ ){

            // criando linha nova
            let tr = document.createElement( "tr" );
            
            // Adicionando linha nova
            table.lastElementChild.appendChild( tr );

            for( let c = 0; c < cells; c++ ){
                
                // Criando elemento td
                let td = document.createElement( "td" );
                
                // Adicionando conteudo no elemento td
                td.innerText = "Linha" + ( r + 1 ) + " Celula " + c;
            
                // Adicionando o elemento td no elemento tr
                tr.appendChild( td );    
            }
            
        }
        console.log( "Tabela Criada com sucesso!" );
        // Alterando valor do botão de "Criar tabela", para "Remover Tabela"
        let button = document.getElementById("button").value = "Remover Tabela";
        
    }else{
        console.log( table );
        table.removeChild( table.firstElementChild );
        table.removeChild( table.firstElementChild );
        console.log( table );
        if( table.childElementCount === 0 ){
            console.log( "Tabela Removida com sucesso! " );
        }
        
        // Alterando valor do botão de "Remover Tabela", para "Criar Tabela";
        let button = document.getElementById("button").value = "Criar Tabela";
        
    }
    
}

// Outra solução:
function createTable2(){
    let rows = window.prompt( "Informe o numero de linhas", "1" );
    let cells = window.prompt( "Informe o numero de colunas", "1" );

    for( let r = 0; r < parseInt( rows, 10 ); r++ ){
        let newRow = document.getElementById( "myTable" ).insertRow( r );

        for( let c = 0; c < parseInt( cells, 10 ); c++ ){
            let newCell = newRow.insertCell( c );
            newCell.innerHTML = "Linha " + r + " Coluna " + c; 

        }

    }
}