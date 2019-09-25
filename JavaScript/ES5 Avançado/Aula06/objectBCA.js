/**************************** Objetos Metodos: Bind / Call / Apply ****************************
 * 
 */


//Objeto 1 = Luiz
var luiz = {
   nome: "Luiz",
   idade: 23,
   profissao: "estudante",

   apresentacao: function( estilo, tempoDoDia ){
       if( estilo === "formal" ){
           if( tempoDoDia === "dia" || tempoDoDia === "Dia "){
                console.log( "Bom " + tempoDoDia + ", senhoras e senhores, eu me chamo " + this.nome
                + " tenho " + this.idade + " anos e sou " + this.profissao );
          
            } else {
                console.log( "Boa " + tempoDoDia + ", senhoras e senhores, eu me chamo " + this.nome
                + " tenho " + this.idade + " anos e sou " + this.profissao );
            }
           
        
       } else if( estilo === "informal" ){
           if( tempoDoDia === "dia" || tempoDoDia === "Dia" ){
                console.log( "Diga ae! sou " + this.nome + ", tenho " + this.idade + ", sou " + this.profissao 
                + " tenha um bom " + tempoDoDia );
            
           } else {
                console.log( "Diga ae! sou " + this.nome + ", tenho " + this.idade + ", sou " + this.profissao 
                + " tenha um boa " + tempoDoDia );
           }
                    
       }

   },

};

luiz.apresentacao( "formal", "dia" );


//Objeto 2 = Renata
var renata = {
    nome: "Renata",
    idade: 26,
    profissao: "Estudante"

};

luiz.apresentacao.call(renata, "informal", "noite" );

