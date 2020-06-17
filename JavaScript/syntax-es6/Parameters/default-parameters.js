/*
    Default Parameters // Parametros Padrão
*/

// ES05:
function pessoa5( primeiroNome, anoNascimento, ultimoNome, nacionalidade ){
                    
    // Atribuindo valores padrões aos parametros para que nenhum campo seja undefined, nesse exemplo ultimoNome e nacionalidade
    if( ultimoNome === undefined ){
        ultimoNome = "Neto"
    }

    if( nacionalidade === undefined ){
        nacionalidade = "brasileiro"
    }

    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.anoNascimento = anoNascimento;
    this.nacionalidade = nacionalidade;
}


var luiz5 = new pessoa5( "Luiz", 1996 );
console.log( luiz5 );

// ES06:
function pessoa6( primeiroNome, anoNascimento, ultimoNome = "Neto", nacionalidade = "brasileiro"){
    this.primeiroNome = primeiroNome;
    this.anoNascimento = anoNascimento;
    this.ultimoNome = ultimoNome;
    this.nacionalidade = nacionalidade;
}

let luiz6 = new pessoa6( "Luiz", 1996 );
console.log( luiz6 );