const botaoBuscarPacientes = document.querySelector( "#btn-buscar-pacientes" );

const renderizaPacientesBusca = ( listaPacientes ) => {

    for( let i = 0; i < listaPacientes.length; i++ ) {
        templateDomTable( listaPacientes[ i ] );
    }

}

botaoBuscarPacientes.addEventListener( "click", function () {

    let xhr = new XMLHttpRequest();
    console.log( xhr );

    // estabelece conexção com protocolo GET com o servidor
    xhr.open( "GET", "http://api-pacientes.herokuapp.com/pacientes" );
    // console.log( xhr );

    // Função assincrona para o xhr após ser completamente carregado para captar dados
    xhr.addEventListener( "load", function() {
        
        if( xhr.status === 200 ) {
            const responseJson = JSON.parse( xhr.response );
            // console.log( responseJson );
            renderizaPacientesBusca( responseJson );
        }else {
            console.log( "Não foi possível estabelecer comunicação com API Erro: " + xhr.status + xhr.responseText );
        }
    } );
    
    // Envia a requisição
    xhr.send();

});

