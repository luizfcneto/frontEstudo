/*
    Descrição:
        Criar uma função que receba como parametro ( lutador1, lutador2, primeiroAtacante )
        que retorne o nome do vencedor na luta entre eles.
        
    Regras: 
        Cada lutador utiliza o ataque no seu turno, quando um ataca o outro espera seu turno
        ganha quem tiver vida ( health > 0 ).

        Cada lutador é um objeto

        function Figther( name, health, damagePerAttack ){
            this.name = name;
            this.health = health;
            this.damagePerAttack = damagePerAttack;
            this.toString = function() { return this.name; }
        }

        health e damagePerAttack serão inteiros maiores que 0.

*/

//Minha Solução:
function declareWinner( Figther1, Figther2, firstAttacker ){
    let winner;
    while( Figther1.health > 0 || Figther2.health > 0 ){
        
        //Turno do Lutador 1
        if( firstAttacker === Figther1.name ){
            Figther2.health = Figther2.health - Figther1.damagePerAttack;
            
            if( Figther2.health <= 0 ){
                winner = Figther1.toString();
                break;
            }

            firstAttacker = Figther2.name;
        }
        //Turno do Lutador 2
        else{
            Figther1.health = Figther1.health - Figther2.damagePerAttack;
            
            if( Figther1.health <= 0 ){
                winner = Figther2.toString();
                break;
            }

            firstAttacker = Figther1.name;
        }
    }
    return winner;
}

function Figther( name, health, damagePerAttack ){
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

let lutador1 = new Figther( "Luiz", 100, 25 );
let lutador2 = new Figther( "Thiago", 100, 25 );

console.log( declareWinner( lutador1, lutador2, "Luiz" ) );

//Outra Solução:
/*
function declareWinner( fighter1, fighter2, firstAttacker ) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    
    if( fac1 < fac2 ) {
    return fighter2.name;
  
    } else if( fac2 < fac1 ) {
        return fighter1.name;
    } else {
        return firstAttacker;
    }
}
*/