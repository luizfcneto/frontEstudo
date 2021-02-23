console.log( "Arquivo mesa.js carregado com sucesso" );

// Inserindo classe .table-responsive na classe table quando tamanho da janela for menor que 575.98 pixel

const toggleTableResponsiveClass = () => {

    let tela = document.querySelector( "body" ).clientWidth;
    if( tela < 576 ){
        let tabela = document.querySelector( ".table" );
        tabela.classList.add( "table-responsive" );

    } else if ( tela >= 576 ){
        
        let tabela = document.querySelector( ".table" );
        tabela.classList.remove( "table-responsive" );
    }
    
}

window.addEventListener( "resize", toggleTableResponsiveClass );
window.addEventListener( "load", toggleTableResponsiveClass );

console.log( document.querySelector("body").clientWidth );


// Modificando display da mão

const toggleHandCards = () => {

    let areaMao = document.querySelector( ".area-mao" )
    let areaMaoArray = Array.from( areaMao );

    if( areaMaoArray.findIndex( ( elemento ) => elemento === "display-none" ) ){
        areaMao.classList.toggle( "display-none" );
        let table = document.querySelector( ".table" );
        table.classList.toggle( "table-collapse" );


    }else {
        areaMao.classList.add( "display-none" );
        let table = document.querySelector( ".table" );
        table.classList.add( "table-collapse" ); 
    }   
}

let handBtn = document.querySelector( ".btn-hand" );
handBtn.addEventListener( "click", toggleHandCards );