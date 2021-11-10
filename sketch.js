
var player, player_running;

var path, path_image;

function preload(){
  //imagens pré-carregadas
  player_running = loadAnimation("Runner-1.png", "Runner-2.png")

 path_image = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path = createSprite(200,200,400,280)
 
  path.addImage("path",path_image)

  player = createSprite(180,360,10,10)
  
  player.addAnimation("running", player_running);
  player.scale = 0.05

 



}

function draw() {
  background(55);












 drawSprites ()

}
