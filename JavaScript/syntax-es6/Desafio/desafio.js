/*
    Desafio:
        Suponha que voce trabalha na administração de uma cidade pequena, e você está no comando de dois elementos na cidade:
        1. Parques
        2. Ruas

        É uma cidade muito pequena, então atualmente só temos 3 parques e 4 ruas. Todos os parques e ruas tem nome e ano de construção.

        No encontro do final do ano, o nosso chefe quer um relatório final com as seguintes informações:

        1. Densidade de arvores de cada parque da cidade. ( numero de arvores / area do parque );

        2. Idade média de todos os parques da cidade ( soma de todas as idades dos parques / quantidade de parques existentes )

        3. O nome do parque que tem mais de 1000 arvores

        4. Comprimento total de distancia de ruas da cidade e a média de comprimento de rua. 

        5. Classificação de tamanho da rua:
        muito pequena;
        pequena;
        normal;
        grande;
        gigante
        Se o tamanho é desconhecido o padrão é normal.

        Todos os dados devem ser printados no console.

*/

console.log( "Arquivo desafio.js carregado com sucesso" );

// classe Construção:
class Construcao {

    constructor( nome, anoConstrucao ){
        this.nome = nome;
        this.anoConstrucao = anoConstrucao;
    }

    // Método para calcular idade.
    calculaIdade(){
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoConstrucao;
    }
}

// classe Parque:
class Parque extends Construcao {

    constructor( nome, anoConstrucao, numeroDeArvores, area ){
        super( nome, anoConstrucao );
        this.numeroDeArvores = numeroDeArvores;
        this.area = area;
    }

    calculaDensidade(){
        this.densidade = parseFloat( ( this.numeroDeArvores / this.area ).toFixed( 2 ) ); 
    }

    getDensidade() {
        return this.densidade;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.calculaIdade();
    }

}

// classe Rua:
class Rua extends Construcao {

    constructor( nome, anoConstrucao, comprimento, classificacao = "normal" ){
        super( nome, anoConstrucao );
        this.comprimento = comprimento;
        this.classificacao = classificacao;
    }

    getComprimento(){
        return this.comprimento;
    }

    getClassificacao() {
        return this.classificacao;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.calculaIdade();
    }

}

// Classe Relatório:
class Relatorio{
    constructor( arrayObjRuas, arrayObjParques ){
        this.templateRelatorio = ` Relatório Cidade - ${ new Date().getFullYear() } `;
        this.templateParques1 = `_____________________________Parques_____________________________ \nDensidade de arvores cada parque: `;
        this.templateMediaParques = `Idade média parques:`;
        this.templateParquesMaisArvores = `Parques com mais de 1000 arvores: `;

        this.templateRuas1 = `_____________________________Ruas_____________________________` ;
        this.templateRuasComprimentoTotal = `Comprimento total de ruas:`;
        this.templateRuasComprimentoMedio = `Comprimento médio das ruas:`;
        this.templateClassificacaoRuas = `Classificação das ruas:`;
    
        this.arrayObjRuas = arrayObjRuas;
        this.arrayObjParques = arrayObjParques; 
    }
   
    
    // Método que constroi Mapa de densidade de Parques
    buildDensidadesParquesMap(){
        let tempMap = new Map();
        let tempArrayObjParques = this.arrayObjParques;
        
        // Forma 1: for padrão
        // for( let i = 0; i < tempArrayObjParques.length; i++ ){
        //     tempArrayObjParques[i].calculaDensidade();
        //     tempMap.set( tempArrayObjParques[i], tempArrayObjParques[i].getDensidade() );
        // }

        // Forma 2: forEach()
        tempArrayObjParques.forEach( ( element ) => {
            element.calculaDensidade();
            tempMap.set( element, element.getDensidade() );
        } );

        this.mapDensidadesParques = tempMap;
    }

    // Método que constroi Mapa de idades de Parques
    buildIdadesParquesMap(){
        let tempMap = new Map();
        let tempArrayObjParques = this.arrayObjParques;

        tempArrayObjParques.forEach( ( element ) => {
            element.calculaIdade();
            tempMap.set( element, element.getIdade() );
        } )

        this.mapIdadesParques = tempMap;
    }

    // Método que constroi mapa de comprimentos de ruas
    buildComprimentosRuasMap(){
        let tempMap = new Map();
        let tempArrayObjRuas = this.arrayObjRuas;

        tempArrayObjRuas.forEach( ( element ) => {
            tempMap.set( element, element.getComprimento() );
        })

        this.mapComprimentosRuas = tempMap;
    }
    
    // Método que constroi mapa de classificacoes de ruas
    buildClassificacoesRuasMap(){
        let tempMap = new Map();
        let tempArrayObjRuas = this.arrayObjRuas;

        tempArrayObjRuas.forEach( ( element ) => {
            tempMap.set( element, element.getClassificacao() );
        } );

        this.mapClassificacoesRuas = tempMap;
    }

    // calcula Idade Média Parques
    calculaIdadeMediaParques(){
        let idadeMediaParques = 0;
        // let tempMapIdadesParques = Array.from( this.mapIdadesParques );
        
        // Forma 1: iterando mapas convertidos em array
        // for( let [ chave, valor ] of tempMapIdadesParques ){
        //     idadeMediaParques = idadeMediaParques + valor;
        // }

        let tempMapIdadesParques = this.mapIdadesParques;
        // Forma 2: iterando maps com forEach
        tempMapIdadesParques.forEach( ( valor ) => {
            idadeMediaParques = idadeMediaParques + valor;
        }, tempMapIdadesParques )
        
        idadeMediaParques = idadeMediaParques / this.mapIdadesParques.size;

        this.idadeMediaParques = idadeMediaParques;
    }

    // verificaQtdArvores
    verificaQuantidadeArvores( criterio ){
        let tempArrayObjParques = this.arrayObjParques;
        let resposta = [];

        // percorrer array tempArrayObjParques forma 1: for of
        // for( let elemento of tempArrayObjParques ){
            
        //     // verificar se elemento obj parque possui mais de criterio arvores
        //     if( elemento.numeroDeArvores >= criterio ){
                
        //         // caso verdadeiro adicionar propriedade nome de objeto parque em resposta
        //         resposta.push( elemento.nome );
        //     }
        // }
    
        // this.arrayParqueCriterio = resposta;
        
        // forma2: for each.
        tempArrayObjParques.forEach( ( elemento ) => {
            if( elemento.numeroDeArvores >= criterio ) {
                resposta.push( elemento.nome );
            }  
        } )

        this.arrayParqueCriterio = resposta;

    }

    // calcula Comprimento total Ruas
    calculaComprimentoTotalRuas(){
        let comprimentoTotalRuas = 0;
        let tempMapComprimentosRuas = this.mapComprimentosRuas;

        tempMapComprimentosRuas.forEach( ( valor ) => {
            comprimentoTotalRuas += valor;
        } );

        this.comprimentoTotalRuas = comprimentoTotalRuas;
    }


    // calcula Comprimento Médio Ruas
    calculaComprimentoMedioRuas(){
        let tempComprimentoTotalRuas = this.comprimentoTotalRuas;
        let tempMapComprimentosRuas = this.mapComprimentosRuas;
        let comprimentoMedioRuas = tempComprimentoTotalRuas / tempMapComprimentosRuas.size;
        this.comprimentoMedioRuas = comprimentoMedioRuas;
    }

    // Printa Relatório completo no console:
    displayRelatorio(){
        console.log( this.templateRelatorio );
        console.log( this.templateParques1 );

        // printando nome parques : densidade
        this.mapDensidadesParques.forEach( ( valor, chave ) => {
            console.log( `Nome: ${ chave.nome } -> Densidade: ${ valor } ` );
        }, this.mapDensidadesParques );

        // idade média:
        console.log( `${ this.templateMediaParques } ${ this.idadeMediaParques } ` );
    
        // Nome dos parques que tem mais que critério arvores
        console.log( this.templateParquesMaisArvores );
        this.arrayParqueCriterio.forEach( ( element ) => { 
            console.log( `Parque: ${ element } ` );
        } )

        // Ruas:
        console.log( this.templateRuas1 );

        // Comprimento total de ruas:
        console.log( this.templateRuasComprimentoTotal, this.comprimentoTotalRuas );

        // Comprimento Médio de ruas:
        console.log( this.templateRuasComprimentoMedio, this.comprimentoMedioRuas );

        // Classificação de ruas:
        console.log( this.templateClassificacaoRuas );

        // Printando todas as ruas e suas classificaçoes
        this.arrayObjRuas.forEach( ( element ) => {
            console.log( `Rua: ${ element.nome } -> Classificação: ${ element.getClassificacao() } `  )
        } ) 

    }

}

// Entrada dos dados
let rua0 = new Rua( "nome rua 0", 1990, 8000, "pequena" );
let rua1 = new Rua( "nome rua 1", 1850, 150000, "gigante" );
let rua2 = new Rua( "nome rua 2", 1950, 74500, "grande" );
let rua3 = new Rua( "nome rua 3", 1980, 10000 );

let parque0 = new Parque( "nome Parque 0", 1996, 5000, 8000 );
let parque1 = new Parque( "nome Parque 1", 1955, 45000, 745000 );
let parque2 = new Parque( "nome Parque 2", 1920, 895000, 1000000 );

// Array de ruas:
let arrayRuas = [ rua0, rua1, rua2, rua3 ];

// Array de parques:
let arrayParques = [ parque0, parque1, parque2 ];
// console.log( "array de parques", arrayParques );
// console.log( "array de ruas", arrayRuas );

// testando relatorio:
let relatorio2020 = new Relatorio( arrayRuas, arrayParques );

// função que gera mapeamento.
function initRelatorio() {
    relatorio2020.buildDensidadesParquesMap();
    relatorio2020.buildIdadesParquesMap();
    relatorio2020.buildComprimentosRuasMap();
    relatorio2020.buildClassificacoesRuasMap();

    relatorio2020.calculaIdadeMediaParques();
    relatorio2020.calculaComprimentoTotalRuas();
    relatorio2020.calculaComprimentoMedioRuas();

    relatorio2020.verificaQuantidadeArvores( 1000 );
}

initRelatorio();
relatorio2020.displayRelatorio();



