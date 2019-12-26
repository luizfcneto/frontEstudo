/*
    Descrição:
        Fazer uma função que receba como parametro um nome de um arquivo
        a nomeação do arquivo segue as seguintes regras:
            sempre começa com um long number 
            seguido de um underscore "_"
            após isso o nome do arquivo com a extensão
            seguido por uma extensão extra no final
    
    exemplo: 
        entrada: 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION
        saida: FILE_NAME.EXTENSION

        entrada: 1231231223123131_myFile.tar.gz2
        saida: myFile.tar

*/

//Minha solução:
class FileNameExtractor{
    static extractFileName( dirtyFileName ){
        console.log( "Nome fornecido: " + dirtyFileName );
        return dirtyFileName.slice( dirtyFileName.indexOf( "_" ) + 1 , dirtyFileName.lastIndexOf( "." ) );
    }

}

console.log( FileNameExtractor.extractFileName( "1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34" ) );
console.log( FileNameExtractor.extractFileName( "1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION" ) );


//Outras Soluções:
// class FileNameExtractor {
//     static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];
// }

// class FileNameExtractor {
//     static extractFileName (s) {
//         return s.replace(/^\d*_(.*)\..*$/,'$1');
//     }
// }