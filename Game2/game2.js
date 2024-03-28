function game2Preload(){
  
}

function game2Setup(){
  background(181,215,168);
  currentActivity = 2;
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.hide();
  game3Button.show();
  game4Button.show();
}

function game2Draw(){
  background(181,215,168);
  
  fill('black');
  text('Activity 2 goes here', 200, 200);
}

function game2MousePressed(){
  
}