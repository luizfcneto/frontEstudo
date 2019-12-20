/*
    Descrição: 
        Escrever uma função que receba como parametros uma lista ( um vetor de objetos ) que contém strings
        formatar essa lista de strings em uma única string utilizando o padrão:
        'Nome1, Nome2, Nome3, ..., NomeN-1 & NomeN'

        Exemplo:
        Entrada: [ { name: Nome1 }, { name: Nome2 }, { name: Nome3 }, { name: Nome4 } ];
        Saida: 'Nome1, Nome2, Nome3 & Nome4';        

*/

//Minha Solução:
function list( names ){
    let aux = [];
    let finalString = '';
    let i = 0;
  
    for( const element of names ){
        aux[ i ] = element.name;
        console.log( aux[ i ] );
        i++;
    }
    
    if( i === 0 ){
        return finalString;
    }
  
    if( i === 1 ){
        finalString += aux[ 0 ] + '';
        return finalString;
    }
  
    if( i === 2 ){
        finalString += aux[ 0 ] + ' & ' + aux[ 1 ];
        return finalString;
    }
  
    if( i > 2 ){
        for( let i = 0; i < aux.length; i++ ){
            if( i === 0 ){
            finalString += aux[ i ] + ',';
      
        }else if( i < aux.length - 2 ){
            finalString += ' ' + aux[ i ] + ',' ;
        
        }else if( i < aux.length - 1 ){
            finalString += ' ' + aux[ i ];
           
        }else{
            finalString += ' & ' + aux[ i ];
    
        } 
    }
    return finalString;
  }
}

let exemplo1 = [ { name: "Nome 1" }, { name: "Nome 2" }, { name: "Nome 3" }, { name: "Nome 4" } ]; 
console.log( "Lista 1 Entrada: " + exemplo1 );

exemplo1 = list( exemplo1 );
console.log( "Saida: " + exemplo1 );

//Outras Soluções:
/*function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
}*/

/*
function list(names){
    return names.reduce(function(prev, current, index, array){
        if (index === 0){
            return current.name;
        }
        else if (index === array.length - 1){
            return prev + ' & ' + current.name;
        } 
        else {
            return prev + ', ' + current.name;
        }
    }, '');
}
*/