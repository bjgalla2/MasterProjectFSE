let circleNumber;
let rectOneValue;
let rectTwoValue;
let rectThreeValue;
let rectOneButton;
let rectTwoButton;
let rectThreeButton;
let submitButton;
let selectedNumber1 = null;
let selectedNumber2 ;
let tryAgainButton;


function game1Setup() {
  //createCanvas(400, 400);
  background(181, 215, 168);
  currentActivity = 1;
  menuButton.hide();
  game1Button.hide();
  game2Button.hide();
  game3Button.hide();
  game4Button.hide();

  circleNumber = floor(random(2, 11));
  rectOneValue = circleNumber - floor(random(1, 2));
  rectTwoValue = floor(random(1, 11));
  rectThreeValue = abs(circleNumber - rectOneValue);

  rectOneButton = createButton("Select");
  
  rectTwoButton = createButton("Select");
  rectThreeButton = createButton("Select");
  submitButton = createButton("Submit");

  rectOneButton.position(30, 280);
  rectTwoButton.position(165, 280);
  rectThreeButton.position(300, 280);
  submitButton.position(200, 350);

  tryAgainButton = createButton("Try Again");
  tryAgainButton.position(200, 400);
  tryAgainButton.mousePressed(tryAgain);

  rectOneButton.mousePressed(rectangleOneMousePress);
  
  rectTwoButton.mousePressed(rectangleTwoMousePress);
  
  rectThreeButton.mousePressed(rectangleThreeMousePress);

  submitButton.mousePressed(checkMath);

}

function game1Draw() {

  headCircle();
  rectangleOne();
  rectangleTwo();
  rectangleThree();
}

function headCircle() {
  fill("white");
  ellipse(200, 67, 100);
  fill("black");
  textSize(70);
  textAlign(CENTER, CENTER);
  text(circleNumber, 200, 70);
}

function rectangleOne() {
  fill("white");
  rect(30, 200, 55, 60, 20);
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(rectOneValue, 55, 235);
}

function rectangleTwo() {
  fill("white");
  rect(165, 200, 55, 60, 20);
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(rectTwoValue, 192, 235);
}

function rectangleThree() {
  fill("white");
  rect(300, 200, 55, 60, 20);
  fill("black");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(rectThreeValue, 328, 235);
}



function checkMath() {

  if (selectedNumber1 + selectedNumber2 == circleNumber) {
    fill("green");
    ellipse(200, 67, 100);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    //text("Correct!", 200, 67);
    alert("Correct");
  } else {
    fill("red");
    ellipse(200, 67, 100);
    fill("white");
    textSize(20);
    textAlign(CENTER, CENTER);
    //text("Incorrect!", 200, 67);
    alert("incorrect");
  }
}


function rectangleOneMousePress()
{
  rectOneButton.attribute("disabled", true);
  
  if(selectedNumber1 == null)
    {
      selectedNumber1 = rectOneValue;
    }
    else
    {
      selectedNumber2 = rectOneValue;
    } 
}
function rectangleTwoMousePress()
{
  rectTwoButton.attribute("disabled", true);
  
  if(selectedNumber1 == null)
  {
    selectedNumber1 = rectTwoValue;
  }
  else
  {
    selectedNumber2 = rectTwoValue;
  } 

}

function rectangleThreeMousePress()
{
  rectThreeButton.attribute("disabled", true);
  
    if(selectedNumber1 == null)
    {
      selectedNumber1 = rectThreeValue;
    }
    else
    {
      selectedNumber2 = rectThreeValue;
    } 
}

function tryAgain() {
  
  selectedNumber1 = null;
  selectedNumber2 = null;
  
  // refresh the numbers and reset the button states
  circleNumber = floor(random(2, 11));
  rectOneValue = circleNumber - floor(random(1, 2));
  rectTwoValue = floor(random(1, 11));
  rectThreeValue = abs(circleNumber - rectOneValue);
  
  rectOneButton.removeAttribute('disabled');
  rectTwoButton.removeAttribute('disabled');
  rectThreeButton.removeAttribute('disabled');


  // redraw the canvas to show the new numbers
  redraw();
}
