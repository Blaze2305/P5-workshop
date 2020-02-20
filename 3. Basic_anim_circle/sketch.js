//We create our own variable called circle x which holds the x coordinate of the circles center 
var circx=0;

function setup(){
//	Create a 600x600 pixel canvas and give it a black background

	createCanvas(600,600);
	background(0);
}


function draw(){
	//after every circle we reset the background
	// this prevents the afterburn and we can see the circle moving 
	//try commenting the below line and seeing what happens
	background(0);

	//Setting it to no fill as we want only the border to show
	noFill();
	stroke(255)
	//width is a predefined variable in p5 which give the width of the canvas in pixels , similarly we also have height
	circle(circx,300,200);
	if(circx<width){
		circx+=5;
	}

	//The draw loop runs infinitely , untill the server is down , so if we wanted it to stop looping we'd need to close it 
	//We can also achieve the same using the noLoop() function
	// noLoop()

}