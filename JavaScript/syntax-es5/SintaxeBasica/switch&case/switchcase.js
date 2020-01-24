/****************SWITCH-CASE****************

*/
var nome = "Luiz";
var profissao = "desenvolvedor-web";
var idade = true;

switch ( profissao ){
    case "instrutor":
    case "professor":
        console.log( nome + " ensina alunos..." );
        break;

    case "motorista":
        console.log( nome + " dirige, levando pessoas ao seu destino..." );
        break;

    case "desenvolvedor-web":
    case "designer":
        console.log( nome + " projeta e estrutura lindos sites... " );
        break;

    default:
        console.log( nome + " Faz alguma coisa..." );

}

switch ( true ){
    case idade < 0:
        console.log( nome + " Tu ainda nem nasceu bonitão..." );
        break;
    
    case idade > 0 && idade <= 11:
        console.log( nome + " tu ainda é uma criança... " );
        break;

    case idade > 11 && idade <= 18:
        console.log( nome + " tu é um adolescente!" );
        break;
            
    case idade > 18 && idade <= 25:
        console.log( nome + " tu é um jovem adulto, estuda!" );
        break;

    case idade > 25 && idade <= 40:
        console.log( nome + " agora tu ja é adulto! vai trabalhar vagabundo!" );
        break;

    case idade > 40 && idade <= 55:
        console.log( nome + " agora tu é um coroa brabo!" );
        break;

    case idade > 55:
        console.log( nome + " agora tu ja está velinho e sem aposentadoria!" );
        break;

    default: 
        console.log( nome + " se tu tem 0 ano de idade tu é muito precoce!;\n agora se tu digitou algo diferente de um numero tu é muito zueiro mesmo!" );
}