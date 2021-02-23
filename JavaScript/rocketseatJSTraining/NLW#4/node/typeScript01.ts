// Tenho a função abaixo: Anterior
// function showUserInfo( user ) {
//     return `Bem vindo, ${ user.nome } - ${ user.idade }.`
// }

// Se tivessemos que acrescentar na mensagem de retorno a cidade onde o usuário mora?
// Teriamos dificuldade em descobrir os atributos contidos no objeto user.
// Para isso definimos o tipo User, formatando os tipos de cada propriedade do objeto User:
type User = {
    nome: string;
    idade: number;
    endereco: {
        cidade: string;
        uf: string;
    }
}

// Função nova:
function showUserInfo( user: User ) {
    return `Bem vindo, ${ user.nome } - ${ user.idade }. 
                Cidade: ${ user.endereco.cidade }. Uf: ${ user.endereco.uf } }`;
}
