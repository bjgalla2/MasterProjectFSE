let path = [];
let drawing = false;
let timer = 10; // 1 minutes in seconds
let gameStarted = false;
let gameEnded = false;
let timerInterval; // Declare timerInterval globally
let gameOver;
let game2CurrentLevel;
let game2Level2Button;

function game2Setup(){
  background(181,215,168);
  currentActivity = 2;
  timerInterval = setInterval(decrementTimer, 1000); 
  
  // Hide the Activity 2 button, show all the other buttons
  menuButton.show();
  // game1Button.show();
  // game2Button.hide();
  // game3Button.show();
  // game4Button.show();

  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();
  game5Button.hide();

  game2CurrentLevel = 1;

  game2Level2Button = createButton('Level 2');
  game2Level2Button.position(60, 250);
  game2Level2Button.mousePressed(setupGame2Level2);
  game2Level2Button.hide();
}

function setupGame2Level2(){
  menuButton.show();
  game2Level2Button.hide();
  game2CurrentLevel = 2;
  timer = 10; // 1 minutes in seconds
  gameStarted = false;
  gameEnded = false;
}

function game2Draw(){
  switch(game2CurrentLevel){
    case 1: 
      game2Level1();
      break;
    case 2:
      game2Level2();
      break;
  }
}
function game2Level1(){
  background(181,215,168);
  
  if (drawing) {
    let point = createVector(mouseX, mouseY);
    path.push(point);
  }
  
  fill(255, 0, 0);
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  // Display the timer
  textSize(32);
  text("Time remaining: " + timer, 10, 50);

  // Draw the start and end points
  fill(0, 255, 0); // Green for start
  ellipse(50, 100, 20);
  fill(255, 0, 0); // Red for end
  ellipse(350, 300, 20);

  // Check if the game has started or ended
  if (!gameStarted && dist(mouseX, mouseY, 50, 100) < 25) {
    gameStarted = true;
  }
  if (gameStarted && !gameEnded && dist(mouseX, mouseY, 750, 300) < 25) {
    gameEnded = true;
  }
  if (gameStarted && !gameEnded) {
    strokeWeight(2);
    stroke(0); // Black color for the dotted line
    let distance = dist(50, 100, 350, 300);
    let segments = distance / 10; // Adjust segment length as needed
    let dx = (350 - 50) / segments;
    let dy = (300 - 100) / segments;
    for (let i = 0; i < segments; i += 2) {
      let x1 = 50 + i * dx;
      let y1 = 100 + i * dy;
      let x2 = 50 + (i + 1) * dx;
      let y2 = 100 + (i + 1) * dy;
      line(x1, y1, x2, y2);
    }
  }
  if (gameEnded) {
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(0, 255, 0); 
    text("Congratulations! You've reached the end!", 200, 350);
    game2Level2Button.show();
  } else if (timer == 0) {
    // Time's up, stop the game
    gameEnded = true;
    clearInterval(timerInterval);
    //noLoop();
    fill(255, 0, 0);
    text("Time's up!", 150, 150);
  }
}

function game2Level2(){
  background(181,215,168);

}

function mousePressed() {
  if (gameStarted && !gameEnded) {
    drawing = true;
    path = []; // Clear the path
  }
}

function mouseReleased() {
  drawing = false;

  switch(game2CurrentLevel){
    case 1: 
      if (gameStarted && !gameEnded) {
        drawing = false;
        // Check if the mouse cursor reached the end point
        let distanceToEnd = dist(mouseX, mouseY, 350, 300);
        if (distanceToEnd < 25) {
          gameEnded = true;
          clearInterval(timerInterval); // Stop the timer
          //noLoop();
        }
      }
      break;
    case 2:
      
      break;
  }
}

function decrementTimer() {
  if (timer > 0) {
    timer--;
  } else  {
    // Time's up, stop the game
    gameEnded = true;
    clearInterval(timerInterval);
    //noLoop();
    fill(255, 0, 0);
    text("Time's up!", 150, 150);
  }
}

