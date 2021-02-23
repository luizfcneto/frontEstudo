
const pegaTodosOsNomesPacientes = () => {
    let pacientesDOM = document.querySelectorAll( ".info-nome" );
    let pacientesArray = []

    pacientesDOM.forEach( ( element ) => {
        pacientesArray.push( element.innerHTML );
    } )

    return pacientesArray;
}

const encontraPalavraNome = ( palavra, nomesPacientes ) => {
    let arrayIndexPacientes = [];

    nomesPacientes.forEach( ( element, index ) => {
        // if( element.toUpperCase().includes( palavra.toUpperCase() ) ){
        //     arrayIndexPacientes.push( index );
        // }
        // por REGEXP:
        let expressao = new RegExp( palavra, "i" );
        if( expressao.test( element ) ){
            arrayIndexPacientes.push( index );
        }   
    } )
    return arrayIndexPacientes;
}

const verificaNumeroNoArray = ( numero, array ) => {
    let presente = false;
    array.forEach( ( element ) => {
        if( element === numero ) {
            presente = true;
        }
    })
    return presente;
}

const renderizaNomes = ( arrayIndexPacientes, size ) => {
    for( let i = 0; i < size; i++ ){
        if( verificaNumeroNoArray( i, arrayIndexPacientes ) === true ){
            let row = document.querySelector( ".paciente-" + i );
            row.classList.remove( "esconde-tr" );

        }else {
            let row = document.querySelector( ".paciente-" + i );
            row.classList.remove( "esconde-tr" );
            row.classList.toggle( "esconde-tr" );
        }
    }
}

const restauraTabelaCompleta = ( size ) => {
    for( let i = 0; i < size; i++ ){
        let row = document.querySelector( ".paciente-" + i );
        row.classList.remove( "esconde-tr" );
    }
}   

let inputFiltro = document.querySelector( ".input-busca" );
inputFiltro.addEventListener( "input", function() {
    let palavra = inputFiltro.value;
    let nomesPacientes = pegaTodosOsNomesPacientes();

    if( palavra === "" || palavra === null ) {
        // console.log( "Restaurou", palavra );
        restauraTabelaCompleta( nomesPacientes.length );
    }

    let indexPacientesEncontrados = [];
    // console.log( nomesPacientes.length, nomesPacientes );
    
    // verificar se a palavra vinda do input está presente em cada nome de paciente
    indexPacientesEncontrados = encontraPalavraNome( palavra, nomesPacientes ); 
    // console.log( "Array de index encontrados:", indexPacientesEncontrados );

    // após retorno dos ids dos pacientes que contém a palavra, percorrer todos e adicionar a classe para deixar a tr do paciente invisível
    renderizaNomes( indexPacientesEncontrados, nomesPacientes.length );

} );
