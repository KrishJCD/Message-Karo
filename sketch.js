
var xPos,yPos;
var showTextBool=false;
var form,game;
var database;
var msgIndex=0;
var player

var database;
var wei,hei;
var index=0;
var count=0;
var player;
var bool=false;
var lengthSub=0;
var allPlayers;
var posIndex=0;
var messageUser;

var displayMessage="";

var userCount=0,stateCount=0;

function setup()
{
  createCanvas(displayWidth,displayHeight);
  database=firebase.database();
  /*form=new Form();
  form.display();*/


  wei=displayWidth;
  hei=displayHeight;

  game=new Game();
  game.getState();
  game.start();

 // game.designMessage();
}

function draw()
{
  background(255);

  if(userCount==2)
  {
    game.updateState(1)
    game.chat();
  }
}