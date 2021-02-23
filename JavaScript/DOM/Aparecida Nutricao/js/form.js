const  calculaImc = ( peso, altura ) => {
    return ( parseFloat( peso ) / ( parseFloat( altura ) * parseFloat( altura ) ) ).toFixed( 2 );
}

// remove Erro
const removeErroMensagem = () => {
    const listaErro = document.querySelector( ".erro-validacao" );
    listaErro.innerHTML = "";
}

// renderiza erro
const renderizaErro = ( mensagem ) => {
    const listaErro = document.querySelector( ".erro-validacao" );
    const templateErro = `<li class="erro-mensagem">${ mensagem }</li>`
    listaErro.insertAdjacentHTML( "beforeend", templateErro );
} 

const verificaErroAtivo = () => {
    const ulErro = document.querySelector( ".erro-validacao" );
    if( ulErro === null ) {
        return false;
    }else {
        return true;
    }
}

// Cria elemento dom
const templateDomTable = ( paciente ) => {
    let ultimoPaciente = document.querySelector( "#tabela-pacientes" );
    if( ultimoPaciente.children.length === 0 ){
        ultimoPaciente = "paciente-0";
    }else {
        ultimoPaciente = ultimoPaciente.lastElementChild.classList.value;
    }
    const numeroPaciente = ultimoPaciente.split( "-" );
    const erros = validaPaciente( paciente );
    
    // const template = `<tr class="paciente-${ parseInt( numeroPaciente[1] ) + 1 } ${ pesoValido( paciente.peso ) === false || alturaValida( paciente.altura ) === false ? "linha-invalida" : "" }">
    //     <td class="info-nome"> ${ paciente.nome } </td>
    //     <td class="info-peso"> ${ paciente.peso } </td>
    //     <td class="info-altura"> ${ paciente.altura } </td>
    //     <td class="info-gordura"> ${ paciente.gordura } </td>
    //     <td class="info-imc">${ paciente.imc }</td>
    // </tr>`;

    if( verificaErroAtivo() ){
        removeErroMensagem();
    }

    if( erros.length === 0 ){   
        const template = `<tr class="paciente-${ parseInt( numeroPaciente[1] ) + 1 }">
            <td class="info-nome"> ${ paciente.nome } </td>
            <td class="info-peso"> ${ paciente.peso } </td>
            <td class="info-altura"> ${ paciente.altura } </td>
            <td class="info-gordura"> ${ paciente.gordura } </td>
            <td class="info-imc">${ paciente.imc }</td>
        </tr>`;

        // tabela:
        const tabela = document.querySelector( "#tabela-pacientes" );
        tabela.insertAdjacentHTML( "beforeend", template );
        
    } else {

        const listaErro = `<ul class="erro-validacao"> </ul>`
        const irmaoListaErro = document.querySelector( ".sub-titulo-cadastro" );
        irmaoListaErro.insertAdjacentHTML( "afterend", listaErro );

        for( let i = 0; i < erros.length; i++ ) {
            renderizaErro( erros[ i ] );
        }   
    }
    
}

const validaPaciente = ( paciente ) => {
    let erros = [];
    if( !pesoValido( paciente.peso ) ) {
        erros.push( "Peso Inválido" );
    }

    if( !alturaValida( paciente.altura ) ) {
        erros.push( "Altura Inválida" );
    }
    return erros;
}

// Pega dados do formulário:
const pegaInputs = ( event => {
    event.preventDefault();

    const form = document.querySelector( "form" );
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gorduraCorporal.value,
        imc: calculaImc( form.peso.value, form.altura.value )
    }    
    templateDomTable( paciente );

    form.reset();
} );

const input = document.querySelector(".btn-adicionar").addEventListener("click", pegaInputs);
