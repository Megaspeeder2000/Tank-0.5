var grayTank_img, greenTank_img, back_img;
var database;
var player,form,game,players;
var player1, player2;
var gameState=0;
var playerCount=0;
var allPlayers;
var bullet,bullet1;
var count=5;
var bulletGroup,bullet1Group;

function preload(){
back_img = loadImage("images/Tank_background.png")
grayTank_img = loadImage("images/Tank_gray.png")
greenTank_img = loadImage("images/Tank_green.png")
bulletGroup=new Group()
bullet1Group=new Group() 



}

function setup() {

  createCanvas(1000,1000);
  database = firebase.database()
  game = new Game()
    game.getState()
    game.start()
}

function draw() {
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
  clear()
  game.play()
  }
  if(gameState === 2){
    game.end()
  }
  drawSprites();
}