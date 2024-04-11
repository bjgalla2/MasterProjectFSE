let path = [];
let drawing = false;
let timer = 120; // 2 minutes in seconds
let gameStarted = false;
let gameEnded = false;

function game2Setup(){
  background(181,215,168);
  currentActivity = 2;
  setInterval(decrementTimer, 1000);
  
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
}

function game2Draw(){
  background(181,215,168);
  
  if (drawing) {
    let point = createVector(mouseX, mouseY);
    path.push(point);
  }
  
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
  ellipse(50, 300, 20);
  fill(255, 0, 0); // Red for end
  ellipse(350, 300, 20);

  // Check if the game has started or ended
  if (!gameStarted && dist(mouseX, mouseY, 50, 300) < 25) {
    gameStarted = true;
  }
  if (gameStarted && !gameEnded && dist(mouseX, mouseY, 750, 300) < 25) {
    gameEnded = true;
    alert("You've reached the end!");
  }
}

function mousePressed() {
  if (gameStarted && !gameEnded) {
    drawing = true;
    path = []; // Clear the path
  }
}

function mouseReleased() {
  drawing = false;
}

function decrementTimer() {
  if (timer > 0) {
    timer--;
  } else {
    // Time's up, stop the game
    noLoop();
    alert("Time's up!");
  }
}