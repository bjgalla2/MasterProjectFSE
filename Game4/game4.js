function game4Preload(){
  
}

function game4Setup(){
  background(181,215,168);
  currentActivity = 4;
  
  // Hide the Activity 4 button, show all the other buttons
  menuButton.show();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.hide();
}

function game4Draw(){
  background(181,215,168);
  
  
  rect(10, 10, 100, 25);
  
  text("Home Page", 25, 25);
  
  
  text('Puzzle', 200, 200);
}

/*****
* Instead of using buttons like other games, this example draws 
* rectangles and circles. The mousePressed function determines if the
* user clicked on one of the shapes.
*****/
function game4MousePressed(){
  
}