

function game1Preload(){
  
}

function game1Setup(){
  background('#fae');
  currentActivity = 1;
  
  // Hide the Game 1 button, show all the other navigation buttons
  menuButton.show();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
  game5Button.hide();
  
  
  // Set the size of the owl image
  
}

/*function game1Draw(){
  background('#fae');
  
  fill('black');
  text('Activity 1 goes here', 200, 200);
  
}*/

function game1Draw()
{
 
    background(181,215,168);
    circle(180, 50, 30);
    rect(30, 200,20,20,20 );
    rect(180, 200, 20,20, 20);
    rect(300,200, 20, 20, 20);
  
    
    textSize(10);
    textAlign(CENTER, CENTER); 
    text("5", 930, 300);
  
  
    textSize(10);
    textAlign(CENTER, CENTER); 
    text("1", 1450, 800);
  
    textSize(10);
    textAlign(CENTER, CENTER); 
    text("2", 850, 800);
  
    textSize(10);
    textAlign(CENTER, CENTER); 
    text("3", 25, 80);
  
  
}
