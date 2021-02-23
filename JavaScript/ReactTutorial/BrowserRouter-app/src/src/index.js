import React from "react";
import ReactDOM from "react-dom";
// Aula primeiro componente
// import PrimeiroComponente from "./Componentes/PrimeiroComponente";

// Aula Multiplos Componentes
// import { Componente1 as Compo1, Componente2 as Compo2, Componente3 as Compo3 } from "./Componentes/MultiplosComponentes";
// import { Componente1, Componente2, Componente3 } from "./Componentes/MultiplosComponentes";

// Aula Multiplos Elementos
// import MultiplosElementos from "./Componentes/MultiplosElementos";

// Aula Import/Export:
// import ComponenteDefault, { Componente1, Componente2 } from "./Componentes/MultiplosComponentes";

// Aula Relação Componentes 1 ( HardCode )
// import FamiliaSilva from "./Componentes/FamiliaSilva";

// Aula Relação Componentes 2 ( Personalizado )
// import Familia from "./Componentes/Familia";
// import Membro from "./Componentes/Membro";

// Aula comunicação entre pai e filho ( passando props de pai para filho )
// import Familia from "./Componentes/Familia";
// import Membro from "./Componentes/Membro"

// Aula Componente Funcional com Função/Método
// import ComponenteFuncional from "./Componentes/ComponenteFuncao";

// Aula Comumincação indireta filho-pai ( evento-callback )
// import Pai from "./Componentes/Pai";

// Aula Componente no formato de Classe
// import ComponenteClasse from "./Componentes/ComponenteClasse";

// Aula Componente Classe com problema This
import Contador from "./Componentes/Contador";

// const mensagem = "Olá, mundo!";
// ReactDOM.render( mensagem, document.getElementById( "root" ) );

// ou
// const localizacaoDOM = document.getElementById( "root" );
// ReactDOM.render( <h1> Olá Mundo! </h1>, localizacaoDOM );

// Para o JSX compreender que mensagem é uma variavel e exibir o conteudo inserido nela colocar entre chaves { }
// ReactDOM.render( <h1> { mensagem } </h1>, localizacaoDOM );

// Aula PrimeiroComponente:
// ReactDOM.render(
//     <div> 
//         < PrimeiroComponente />
//         {/* Posso colocar outros componentes aqui dentro dessa div */}
//         {/* < PrimeiroComponente /> */}
//     </div>,
//     localizacaoDOM
// );

//ou
// ReactDOM.render(
//     <PrimeiroComponente />,
//     localizacaoDOM
// )

// /***********************************AULA PROPS***************************************/
// ReactDOM.render(
//     <PrimeiroComponente props1="Valor passado por props" vogais="aeiou" idade="24" />,
//     document.getElementById( "root" )
// );

/***********************************AULA MULTIPLOS COMPONENTES***************************************/
// ReactDOM.render(
//     <div>
//         <Compo1 ola="fala galera, beleza componente 1 aqui" />
//         <Compo2 ola="Diga ai rapa, o que tu manda, componente 2 na area" />
//         <Compo3 />
//     </div>
//     ,document.getElementById( "root" )
// );

// ReactDOM.render(
//     <div> 
//         <Componente1 ola="fala galera, beleza componente 1 aqui" />
//         <Componente2 ola="Diga ai rapa, o que tu manda, componente 2 na area" />
//         <Componente3 />
//     </div>,
//     document.getElementById( "root" )
// );

/***********************************AULA MULTIPLOS ELEMENTOS***************************************/
// ReactDOM.render(
//     <MultiplosElementos />
//     , document.getElementById( "root" )
// );

/***********************************AULA IMPORT/EXPORT***************************************/

// ReactDOM.render(
//     <div>   
//         <Componente1 ola="fala galera, beleza componente 1 aqui" />
//         <Componente2 ola="Diga ai rapa, o que tu manda, componente 2 na area"/>
//         <ComponenteDefault />
//     </div>
//     , document.getElementById( "root" )
// );

/***********************************AULA RELACAO ENTRE COMPONENTES 1 (HARDCODE)***************************************/
// ReactDOM.render(
//     <FamiliaSilva />
//     , document.getElementById( "root" )
// );

/***********************************AULA RELACAO ENTRE COMPONENTES 2 (PERSONALIZANDO)***************************************/
// ReactDOM.render(
//     <div> 
//         <Familia>
//             <Membro name="Luiz Fernando" lastName="Silva" />
//             <Membro name="Rodrigo" lastName="Silva" />
//             <Membro name="Renata" lastName="Silva" />
//             <Membro name="Thabata" lastName="Silva" />
//         </Familia>

//         <Familia>
//             <Membro name="Roberto" lastName="Andrade" />
//             <Membro name="Silvio" lastName="Andrade" />
//             <Membro name="Maria" lastName="Andrade" />
//             <Membro name="Carol" lastName="Andrade" />
//         </Familia>
//     </div>
//     , document.getElementById( "root" )
// );

/***********************************AULA COMUNICACAO ENTRE COMPONENTES ( Pai e Filho: Sol: 1/2 )***************************************/
// ReactDOM.render(
//     <div>
//         <Familia nomeFamilia="Silva" >
//             <Membro name="Luiz Fernando" />
//             <Membro name="Rodrigo" />
//             <Membro name="Renata" />
//             <Membro name="Thabata" />
//         </Familia>

//         <Familia nomeFamilia="Carvalho" >
//             <Membro name="Hugo" />
//             <Membro name="Carol" />
//             <Membro name="Amanda" />
//             <Membro name="Zidane" />

//         </Familia>

//     </div>
//     , document.getElementById( "root" )
// );

/***********************************AULA COMPONENTE FUNCIONAL COM FUNCAO/METODO***************************************/

// ReactDOM.render(
//     <div>
//         <ComponenteFuncional />
//         <ComponenteFuncional />
//     </div>
//     , document.getElementById( "root" )
// );

/***********************************AULA COMUNICACAO INDIRETA FILHO-PAI ( CALLBACK-EVENTS )***************************************/

// ReactDOM.render(
//     < Pai />
//     , document.getElementById( "root" )
// );


/***********************************AULA CLASSE COMPONENTE***************************************/
// ReactDOM.render(
//     // <ComponenteClasse valor="Eu sou um Componente no formato de Classe" />
//     <ComponenteClasse />
//     , document.getElementById( "root" )
// );

/***********************************AULA COMPONENTE CLASSE PROBLEMA THIS***************************************/
ReactDOM.render(
    <Contador numero={ 0 }/>
    , document.getElementById( "root" )
);