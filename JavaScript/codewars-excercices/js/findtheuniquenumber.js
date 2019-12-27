/*  
    Descrição: 
        Fazer um método que recebe um array de numeros
        esse array é composto apenas por dois numeros distintos, 
        um deles se repete pelo array todo, apenas um é unico
        verificar o conteudo do array e retornar o numero único;
        OBS: é garantido que o array tenha pelo menos 3 elementos.

    Exemplo:
        entrada: [ 1, 1, 1, 1, 1, 2 ]
        saida: 2

        entrada: [ 2, 1, 1, 1, 1, 1, 1 ]
        saida: 2

        entrada: [ 3, 3, 3, 3, 5, 3, 3 ]
        saida: 5

*/

//Minha Solução:
function findUniq( arr ){
    let unique;

    if( arr[0] === arr[1] ){
        for( let i = 2; i < arr.length; i++ ){
            unique = arr[i];
            if( unique !== arr[0] ){
                break;
            }
        }
        return unique;

    }else if( arr[0] === arr[2] ){
        return arr[1];

    }else{
        return arr[0];
    }
}


console.log( findUniq( [ 1, 1, 1, 1, 1, 2 ] ) ); 
console.log( findUniq( [ 2, 1, 1, 1, 1, 1, 1 ] ) );
console.log( findUniq( [ 3, 3, 3, 3, 5, 3, 3 ] ) );


// Outras Soluções:
/*
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

function findUniq(arr) {
  let newArr=[...new Set(arr)];
  let [a,b]=newArr;
  if(arr.indexOf(a)===arr.lastIndexOf(a)){
    return a
  }else{
    return b
  }
}

*/