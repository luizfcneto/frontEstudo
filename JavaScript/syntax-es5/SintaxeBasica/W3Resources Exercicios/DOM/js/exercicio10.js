/*
    Descrição:
        Fazer uma função que ao disparar o evento de clicar no botão "Calcular Volume"
        ela capte o valor do campo de raio, calcular o volume da esfera e colocar resultado
        no campo de volume.

    
HTML DOM method getElementsByName:
    https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp

HTML DOM method getElementById:
    https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById

HTML DOM property value:
    https://www.w3schools.com/jsref/prop_select_value.asp

MATH.PI:
    https://www.w3schools.com/jsref/jsref_pi.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

MATH.toFixed:
    https://www.w3schools.com/jsref/jsref_tofixed.asp
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

    
Solução:
*/

function calculaVolume(){
    
    // Elemento HTML form:
    // let form = document.getElementById( "myForm" );

    // Fazendo pelo id
    let campoRaio = document.getElementById( "raio" );
    // let campoRaio = document.getElementsByName( "raio" );
    console.log( campoRaio );

    let raio = campoRaio.value;
    console.log( "Raio: " + campoRaio.value );
    
    // Calculando volume 
    let volume = calculateVolume( raio );
    console.log( "Volume: " + volume );

    // Alterando o valor do campo pelo campoVolume ( captado pelo atributo nome );
    // let campoVolume = document.getElementsByName( "volume" );
    // campoVolume[0].value = volume;

    let campoVolume = document.getElementById( "volume" );
    campoVolume.value = volume;


}

function calculateVolume( radius ){
    return ( 4/3 * Math.PI * Math.pow( radius, 3 ) ).toFixed( 3 );    
}