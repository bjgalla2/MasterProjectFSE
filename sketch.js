/****
 * FSE100: examples for how to link multiple exercises together
 *****/

let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button, game4Button;

/***** 
  * If you want to load images or sounds into your application,
  * try using preload()
  * https://p5js.org/reference/#/p5/preload
  *****/
function preload(){
  game1Preload();
  game2Preload();
  game3Preload();
  game4Preload();
}

function switchToMM(){
  background(181,215,168);
  currentActivity = 0;
  
  // Hide the home page button, show the activity buttons
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();
  game4Button.show();
  game5Button.show();
}

function setup() {
  createCanvas(400, 400);
  background(181,215,168);
  menuButton = createButton('Home');
  menuButton.position(310, 310);
  menuButton.mousePressed(switchToMM);
  menuButton.hide();
  
  game1Button = createButton('Math');
  game1Button.position(60, 250);
  game1Button.mousePressed(game1Setup);
  game1Button.show();
  
  game2Button = createButton('Tracing');
  game2Button.position(60, 300);
  game2Button.mousePressed(game2Setup);
  game2Button.show();
  
  game3Button = createButton('Typing');
  game3Button.position(250, 250);
  game3Button.mousePressed(game3Setup);
  game3Button.show();
  
  game4Button = createButton('Puzzle');
  game4Button.position(250, 300);
  game4Button.mousePressed(game4Setup);
  game4Button.show();

  game4Button = createButton('Color Matching');
  game4Button.position(130, 350);
  game4Button.mousePressed(game4Setup);
  game4Button.show();
}


function draw() {  
  switch(currentActivity){
    case 0: 
      mainMenu();
      break;
    case 1: 
      game1Draw();
      break;
    case 2: 
      game2Draw();
      break;
    case 3: 
      game3Draw();
      break;
    case 4: 
      game4Draw();
      break;
    case 5:
      game5Draw();
      break
  }
}

function mainMenu(){
  background(181,215,168);
  
  fill('black');
  textSize(30);
  text('Brain Game', 110, 90);
  
  
  
}

/*****
* mousePressed() is a reserved function that is called whenever
* the user presses the mouse button in the application.
*****/
function mousePressed(){
  // Only game 4 uses the mousePressed function, but the switch statement
  // makes it easy to add the mousePressed functionality for other games.
  switch(currentActivity){
    case 2: 
      game2MousePressed();
      break;
    case 4: 
      game4MousePressed();
      break;
  }
}