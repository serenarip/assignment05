// VARIABLES
var mySong;
var myImg;
var analyzer;
var on;
myList = ['#F76161', '#F76161', '#ffffff', '#ffffff', '#000000'];

// PRELOAD
function preload() {
   mySong = loadSound('assets/UF.mp3');
   myImg = loadImage("assets/ruotapsiche.jpg");
}

// SETUP
function setup() {
   createCanvas(windowWidth, windowHeight);
   angleMode(DEGREES);
   
   playSong();
   
   /* ANALYZER */
   analyzer = new p5.Amplitude();
   analyzer.setInput(mySong);
   
}

// DRAW
function draw() {
   background('black');
   
   push();
   translate(width/2, height/2);
   rotate(frameCount*30);
   image(myImg, -width/2*1.5, -height/2*1.5, width*1.5, height*1.5);
   pop();
   
   // CERCHI CONCENTRICI LINEE
   push();
   translate(width/2, height/2);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve2(rotation, 0.3);
   }
   pop(); 
  
   push();
   translate(width/2, height/2);
   scale(0.1, 0.1);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve2(rotation, 0.3);
   }
   pop(); 
   
   push();
   translate(width/2, height/2);
   scale(0.5, 0.5);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve2(rotation, 0.3);
   }
   pop();
   
   push();
   translate(width/2, height/2);
   scale(1, 1);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve2(rotation, 0.3);
   }
   pop();
   

   push();
   translate(width/2, height/2);
   scale(1.5, 1.5);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve2(rotation, 0.3);
   }
   pop();

   

  // CORONA STELLINE COLORATE

   push();
   translate(width/2, height/2);
   scale(0.05, 0.05);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve(rotation, 0.3);
   }
   pop(); 
  
   push();
   translate(width/2, height/2);
   scale(0.2, 0.2);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve(rotation, 0.3);
   }
   pop(); 
   
   push();
   translate(width/2, height/2);
   scale(0.5, 0.5);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve(rotation, 0.3);
   }
   pop();
   
   push();
   translate(width/2, height/2);
   scale(1, 1);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve(rotation, 0.3);
   }
   pop();
   

   push();
   translate(width/2, height/2);
   scale(1.5, 1.5);
   for (rotation = 0; rotation < 360; rotation++) {
   drawCurve(rotation, 0.3);
   }
   pop();
   
   // ALTRO

   var volume = analyzer.getLevel();
   fill('white');
   

}

// MUSIC
function playSong() {
   mySong.play();
}


// STELLINE COLORATE 1A VERSIONE
   function drawCurve(rotation, myScale) {
   var volume = analyzer.getLevel();
   aumento = random()*400;
   myColor = random(myList);
   var x = myScale;
   
   push();
   translate(windowWidth/4, windowHeight/4);
   scale(x,x);
   rotate(frameCount*3);
   rotate(rotation);
   stroke(myColor);
   fill(myColor);
   beginShape();
   curveVertex(-2.8,  0);
   curveVertex(-1.8,  0);
   curveVertex(0.8,  -volume*aumento);
   curveVertex(1.8,  -volume*aumento);
   curveVertex(2.8,  0);
   curveVertex(3.8,  0);
   endShape();
   pop();
   rotate(frameCount/1.5);}
   
// FUNZIONE STELLINE COLORATE 2A VERSIONE

   function drawCurve2(rotation, myScale) {
   var volume = analyzer.getLevel();
   aumento = random()*300;
   myColor = random(myList);
   var x = myScale;
   
   push();
   translate(windowWidth/4, windowHeight/4);
   scale(x,x);
   rotate(frameCount*3);
   rotate(rotation);
   stroke(myColor);
   fill(myColor);
   beginShape();
   curveVertex(-2.8,  0);
   curveVertex(-1.8,  0);
   curveVertex(0.8,  -volume*aumento);
   curveVertex(1.8,  -volume*aumento);
   curveVertex(2.8,  0);
   curveVertex(3.8,  0);
   endShape();
   pop();
   rotate(frameCount/2);
   

}

// WINDOWRESIZE 
function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}
