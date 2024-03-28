

function game3Preload(){
  
}

function game3Setup(){
  background(181,215,168);
  currentActivity = 3;
  
  // Hide the Activity 3 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.hide();
  game4Button.show();
  game5Button.show();
  
  
}

function game3Draw(){
  text('Typing', 200, 200);
 
}