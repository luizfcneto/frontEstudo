/*
    Descrição:
        Criar uma função que recebe como parametros: 
            h = altura, em m
            bounce = fator elastico ( quique ), sendo (  0 < bounce > 1)
            window = altura da janela, em m
        
        a função deve realizar um calculo de quantas vezes uma pessoa estando localizada na janela
        consegue ver a bola passar pela mesma. Quando uma criança/outra pessoa jogar a bola em queda livre
        de um mesmo prédio.
*/

//Minha Solução:    
function bouncingBall( h, bounce, window ){
    if( window >= h || bounce <= 0 || bounce >= 1 || h <= 0 ) {
        return -1;
    
    }else{
      
        let counter = 0;
        while( h > window ){
            //descida
            counter++;
            
            //subida
            h *= bounce;
            if( h > window ){
              counter++;
            }        
        }
        return counter;
    }
      
}

let h = 30;
let b = 0.45;
let w = 2.15;
console.log( "Altura: " + h, " Fator quique: " + b, " Altura janela: " + w );

let qtd = bouncingBall( h, b, w );
console.log( "Vezes que a pessoa da janela viu a bola: " + qtd );


//Outras Soluções:
/*
function bouncingBall(h, b, w) {
    if (h <= w || b >= 1) return -1;
    let r = Math.floor(Math.log(w/h)/Math.log(b)) * 2 + 1;
    if (Number.isNaN(r)) return -1;
    return r;
}
*/

//const bouncingBall = ( h, b, w ) => ( h <= 0 || b <= 0 || b >= 1 || w >= h ) ? -1 : 2 + bouncingBall( h * b , b, w );