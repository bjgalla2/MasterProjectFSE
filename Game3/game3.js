let input;

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
  text('Type the given sentence', 39, 50);
  text('A B C D E F G H I J K L M N ',10,150);

  input = createInput();
  input.position(100, 200);

  let button = createButton('Submit');
  button.position(input.x + input.width + 1, 250);
  button.mousePressed(processInput);
  
  textAlign(LEFT);
 
}
