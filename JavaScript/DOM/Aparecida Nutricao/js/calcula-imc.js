const pesoValido = ( peso ) => {
    if ( peso > 500 || peso < 0 ) {
        return false;
    }else {
        return true;
    }
}

const alturaValida = ( altura ) => {
    if( altura < 0 || altura > 3 ){
        return false;
    }else {
        return true;
    }
}

const renderizaImcs = ( listaImcs ) => {
    let listaImcsTd = document.querySelectorAll( ".info-imc" );
    listaImcsTd = Array.from( listaImcsTd );

    listaImcsTd.forEach( ( elemento, index ) => {
        elemento.textContent = listaImcs[ index ]; 
    })
}

const calculaImcs = () => {
    const listaPesosTd = document.querySelectorAll( ".info-peso" );
    const listaAlturasTd = document.querySelectorAll( ".info-altura" );

    const listaPesos = Array.from( listaPesosTd );
    const listaAlturas = Array.from( listaAlturasTd );
    const listaImcs = [];

    for( let i = 0; i < listaPesos.length; i++ ){
        const peso = parseFloat( listaPesos[ i ].textContent );
        const altura = parseFloat( listaAlturas[ i ].textContent );

        if( !pesoValido( peso ) ) {
            document.querySelector(".paciente-" + i ).classList.add( "linha-invalida" );
            listaPesos[i].textContent += "  - Peso Inválido";
        } else if ( !alturaValida( altura ) ) {
            document.querySelector(".paciente-" + i ).classList.add( "linha-invalida" );
            listaAlturas[i].textContent += " - Altura Inválida"
        }

        if( pesoValido( peso ) && alturaValida( altura ) ) {
            listaImcs.push( ( peso / ( altura*altura ) ).toFixed(2) );
        }else {
            listaImcs.push( 0 );
        }
    }

    renderizaImcs( listaImcs );
}

calculaImcs();

