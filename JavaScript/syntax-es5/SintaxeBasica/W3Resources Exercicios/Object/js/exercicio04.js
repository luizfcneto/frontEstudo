/*
    Descrição:
        Fazer uma função em js que recebe como parametro um vetor de objetos. 
        Fazer com que a função exiba as propriedades desse objeto, sendo
        uma das propriedades um boolean. 
        Caso esse booleano seja verdadeiro, exibir a mensagem:
        "Status de Leitura: Lendo"
        Caso esse booleano seja falso, exibir a mensagem:
        "Status de Leitura: Ainda precisa ler"
        
        
Solução: https://www.w3resource.com/javascript-exercises/javascript-object-exercise-4.php
*/
function exibeStatusLeitura( arrObjs ){
    console.log( "Parametro: ");
    console.log( arrObjects );

    // Forma 1: For para percorrer o Array de Objetos 
    for( let i = 0; i < arrObjects.length; i++ ){
        console.log( "Autor: " + arrObjects[i].autor, "e Titulo: " + arrObjects[i].titulo );

        if( arrObjects[i].statusLeitura === true ){
            console.log( "Status de Leitura: Lendo" );

        }else if( arrObjects[i].statusLeitura === false ){
            console.log( "Status de Leitura: Ainda precisa ler " );

        }
    }

}

let arrObjects = [
    {
        autor: "Bill Gates",
        titulo: "The Road Ahead",
        statusLeitura: true
    },
    {
        autor: "Steve Jobs",
        titulo: "Walter Isaacson",
        statusLeitura: true
    },
    {
        autor: "Suzan Collins",
        titulo: "Mockingjay: The Final Book of The Hunger Games",
        statusLeitura: false
    }
];

exibeStatusLeitura( arrObjects );