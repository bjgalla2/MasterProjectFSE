

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
  
  
  headCircle();
  rectangleOne();
  rectangleTwo();
  rectangleThree();
        
}

function headCircle()
{
  circle(200,67,100);
  textSize(70);
  textAlign(CENTER, CENTER); 
  fill("white");
  text("5", 200 , 70);
  fill("black");
}

function rectangleOne()
{
  rect(30, 200,55,60, 20 );
  textSize(50);
  textAlign(CENTER, CENTER); 
  fill("white");
  text("1", 55, 235);
  fill("black");
    
}

function rectangleTwo()
{
  
  rect(165,200,55 ,60 , 20);
  textSize(50);
  textAlign(CENTER, CENTER); 
  fill("white");
  text("2", 192, 235);
  fill("black");

}

function rectangleThree()
{
  rect(300,200, 55, 60,20 );
  textSize(50);
  textAlign(CENTER, CENTER);
  fill("white");
  text("3", 328, 235);
  fill("black");

}
