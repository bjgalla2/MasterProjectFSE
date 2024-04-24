let colorSets = [
  { color: "Red", name: "red" },
  { color: "Blue", name: "blue" },
  { color: "Green", name: "green" },
  { color: "Yellow", name: "yellow" }
];

let shuffledColorNames;
let shuffledColorBoxes;
let resultText = "";
let matchedPairs = []; // Array to store matched pairs
let lineStart = null;
let lineEnd = null;
let currentColorIndex = 0;
let homeButton;

function setup() {
  createCanvas(400, 400); // Changed canvas size to 400x400
  shuffledColorNames = customShuffle(colorSets.slice()); // Make a copy and shuffle it
  shuffledColorBoxes = customShuffle(colorSets.slice()); // Make another copy and shuffle it
  
  homeButton = createButton('Home');
  homeButton.position(10, 10);
  homeButton.mousePressed(goToHome);
}

function draw() {
  background(204, 255, 204); // Set background color to light green
  
  textAlign(CENTER, CENTER);
  textSize(18);
  fill(0); // Set text color to black
  text("Colour Matching", width / 2, 30);
  text(resultText, width / 2, height - 30);
  
  // Display shuffled color names on the left side vertically
  textSize(14); // Adjusted textSize to make it smaller
  for (let i = 0; i < shuffledColorNames.length; i++) {
    let x = 100;
    let y = i * 50 + 100;
    
    fill(0); // Set text color to black
    text(shuffledColorNames[i].color, x, y);
  }
  
  // Display shuffled color boxes on the right side, jumbled from top to bottom
  for (let i = 0; i < shuffledColorBoxes.length; i++) {
    let x = 300; // Adjusted x position to fit within the new canvas size
    let y = i * 50 + 100;
    
    let colorBox = new ColorBox(x, y, 80, 30, shuffledColorBoxes[i].color); // Use color instead of name
    colorBox.display();
  }
  
  // Draw lines for matched pairs
  for (let pair of matchedPairs) {
    line(pair.color.x, pair.color.y, pair.box.x, pair.box.y);
  }
}

function mousePressed() {
  for (let i = 0; i < shuffledColorNames.length; i++) {
    let x = 100;
    let y = i * 50 + 100;
    
    if (mouseX > x - 20 && mouseX < x + 20 && mouseY > y - 10 && mouseY < y + 10) {
      lineStart = createVector(x + 20, y); // Adjusting start position to the right of the text
    }
  }
}

function mouseReleased() {
  if (lineStart) {
    for (let i = 0; i < shuffledColorBoxes.length; i++) {
      let x = 300; // Adjusted x position to fit within the new canvas size
      let y = i * 50 + 100;
      
      let colorBox = new ColorBox(x, y, 80, 30, shuffledColorBoxes[i].color);
      
      if (colorBox.contains(mouseX, mouseY)) {
        lineEnd = createVector(x, y); // Adjusting end position to the left edge of the color box
        
        let color = shuffledColorNames[currentColorIndex];
        
        if (colorBox.color.toLowerCase() === color.color.toLowerCase()) {
          matchedPairs.push({ color: lineStart, box: lineEnd });
          currentColorIndex++;
          if (currentColorIndex >= shuffledColorNames.length) {
            resultText = "All colors matched! Game over.";
          } else {
            resultText = "Correct! Match the next color.";
          }
        } else {
          resultText = "Incorrect. Try again.";
        }
        break;
      }
    }
  }
}

class ColorBox {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color; // Assign color to the color property
  }

  display() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  contains(x, y) {
    return (x > this.x - this.w / 2 && x < this.x + this.w / 2 && y > this.y - this.h / 2 && y < this.y + this.h / 2);
  }
}

function customShuffle(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function goToHome() {
  // Reset all variables and go to the home screen
  resultText = "";
  matchedPairs = [];
  currentColorIndex = 0;
  lineStart = null;
  lineEnd = null;
}