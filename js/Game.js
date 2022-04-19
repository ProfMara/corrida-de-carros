class Game {
  constructor() {}

  pegarEstado(){
    var estadoJogoRef = database.ref("gameState");
    estadoJogoRef.on("value",function(data){
      estadoJogo = data.val();
    })
  }

  start() {
    //código para criar o formulário da Classe Form
   
    //Código para exibir o objeto form

    
    player = new Player();
  }
}
