
// Remover paciente ao dar duplo click em um elemento da coluna do paciente
const tabela =  document.querySelector( "#tabela-pacientes" ).addEventListener      ("dblclick", function ( event ) {

    event.target.parentNode.classList.add("remove-animation");

    setTimeout( () => {
        event.target.parentNode.remove();
    }, 300 );
    
})