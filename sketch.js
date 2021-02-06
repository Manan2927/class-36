var database;
var gameState=0;
var playerCount;
var player,form,game;
var canvas,backgroundImage;

function setup(){
  canvas=createCanvas(600,600);
database=firebase.database();

game=new Game();
 game.getState();
  game.start();

 
}

function draw(){
  


  
}


