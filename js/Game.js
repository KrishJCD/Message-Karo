class Game{
  constructor()
  {
    this.message=createInput().attribute("placeholder", "Type Your Message Here!");
    this.send=createButton('Send');
    //this.messageArray = [];
    this.messageArray=new Array();
  }

  getState()
  { 
      var getstateRef=database.ref("status");
      getstateRef.on("value",(data)=>
      {
        stateCount=data.val();
      });
  }
  
  updateState(upVal)
  {
    database.ref('/').update({
      status:upVal
    });
  }

  async start()
  {
    if(stateCount === 0){
      player = new Player();
      var usercountRef = await database.ref('users').once("value");
      if(usercountRef.exists()){
        userCount = usercountRef.val();
        player.getUserCount();
      }
      form = new Form()
      form.display();
    }
  }

  

  

  chat()
  {

    form.hide();
    text("Chat with Random Member Now!",wei/2,(hei/2)-30);
    Player.getPlayerInfo();
    this.exDesign();
    this.showWindowText();
      //if(player.messageArray!=undefined)
         //console.log(player.messageArray);
            for(var i=0;i<this.messageArray.length;i++)
            {
              if(i%2==0){
                xPos=((windowWidth/2)-105);
                fill(120,15,23);
                strokeWeight(0);
                rect(xPos,yPos,400,20);
                fill("white");
                textSize(14);
                text(this.messageArray[i],xPos,yPos+15);
              }
              else{
                xPos=xPos=((windowWidth/2)-105);
                strokeWeight(0);
                fill(15,15,23);
                rect(xPos,yPos,400,20);
                fill("white");
                textSize(14);
                text(this.messageArray[i],xPos,yPos+15);
              }
              
              yPos+=20;
            }
          }

  exDesign()
  {
    this.message.position((wei/4)+300,hei-150);
    this.send.position(wei/4+500,hei-150);
    xPos=(windowWidth/2)-105;
    yPos=(windowHeight/2)-140;
    this.send.mousePressed(()=>{

      lengthSub=this.message.value().length;
      player.updateMessage(this.message.value());
      player.fetchUser0Messsage();
    });

  }

  showWindowText()
  {
    push()
    fill("cyan");
    strokeWeight(4);
    stroke("red");
    rect((windowWidth/2)-150,(windowHeight/2)-180,500,500);


    /////////////////////////////////
    textSize(20);
    fill("Black");
    strokeWeight(2);
    stroke("White");
    text("Welcome to MESSAGE KARO! ",(windowWidth/2)-50,(windowHeight/2)-150)


    //////////////////////////////
    fill(165,132,54)
    rect((windowWidth/2)-105,(windowHeight/2)-140,400,400)
    pop();
  }

  
}