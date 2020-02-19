// there can be only 1 setup and 1 draw in the p5 code

function setup(){
	// this is the setup loop;
	// it runs once , at the first time the code is executed so put all your initialisations here
	// stuff like setting canvas size , background etc can be put here

	// Create a canvas for the p5 to be rendered using the below command in setup
	// createCanvas(w, h, [renderer])  [renderer] is optional , if not given it renders in 2D , if we want 3D we use WEBGL
	// w---> width in pixels
	// h---> height in pixels
	createCanvas(500, 500);

	//set the background color\image using background()
	// args can be either color , (colorstring,[alpha]), (v1,v2,v3,[alpha]), (image,[alpha])
	background(255,0,0);
}


function draw(){
	// this is the looping function of P5, it runs once per frame
	// so at 60fps it runs 60 times per second , the fps can be set by the user using framerate(<integer>) but default is 60
	
	//P5 can draw basic shapes such as arcs,ellipses,circles,rectangles etc
	//eg for rectangle rect(x,y,width,height)  
	// more arguments are available for rect
	rect(0,0,100,100);
	// default fill color is white and the default line color is black
	//we can fill the shape with a color we want using fill();
	// the arguments are the same as in background
	fill('green');
	rect(100,100,100,100);
	
	// we can also remove fill using noFIll();
	noFill();
	rect(200,200,100,100);
	
	// we can also change the line properties using stroke() and strokeWeight()
	stroke(0,0,255);
	fill(255,100,0)
	circle(400,400,200);
	
	//the color can also be given as hex codes with  a # prefix and preceded by 3 octal values ie (0-9A-F)
	stroke('black');
	fill("#ff2")
	strokeWeight(10);
	rect(400,400,100,100)
	
	//noStroke() removes the border for the shape
	noStroke();
	fill(255,255,255);
	circle(300,400,150);
	
	//This resets the stroke color to black and the weight to 1. 
	//this wsas done because otherwise as the draw loop continues the same stroke and strokeWeight will persists untill overwritten
	stroke(0,0,0);
	strokeWeight(1);
	
	//once  a property is changed it keeps the changed value untill it is changed again
	//we can fix this issue by using push() and pop() functions as shown below
	
	push(); //this saves the current state of the code 
	
	// any changes made after the push () are undone after the pop() function is called , this essential acts as a save point to reset back to
	fill("#FF22FF");
	rect(350,10,20,20)
	
	pop(); // this returns the state of the code to the previously saved state
	
	//the previous fill of FF22FF does not affect this as the pop is called and the changes state is removed and
	// the previously saved is set 
	rect(400,100,100,100);
	
	//Points can be drawn using the point() function
	// ie point(x,y)
	strokeWeight(10);
	point(300,40)


	strokeWeight(1);
	
	
}