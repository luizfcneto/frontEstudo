// UUID => Universally unique identifier

// Sem tipagem: da erro
// const enviarEmail = ( to, id, subject, description ) => {
//     console.log( to, id, subject, description );
// } 

// Alternativa 
interface DadosDeEnvioEmail {
    to: string;
    id: string;
    subject: string;
    description: string
}

// Com tipagem: alternativa 1:
// const enviarEmail = ( to: string, id: string, subject: string, description: string ) => {
//     console.log( to, id, subject, description );
// }

// Com tipagem e interface alternativa 2:
// const enviarEmail = ( data: DadosDeEnvioEmail ) => {
//     console.log( data.to, data.id, data.subject, data.description );
// }


// Com tipagem, interface utilizando desestruração no parametro: alternativa 3:
const enviarEmail = ( { to, id, subject, description }: DadosDeEnvioEmail ) => {
    console.log( to, id, subject, description );
}

class EnviarEmailParaUsuario {

    send() {
        enviarEmail( { 
            to: "devluizfcneto@gmail.com", 
            id: "9991", 
            subject: "Teste", 
            description: "Aula 01, NLW#4" 
        } );
    }
}