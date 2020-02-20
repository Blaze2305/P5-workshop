//Global var to control the total angle of rotation
var angle=0;

function setup(){
	// To do 3D rendering we require WebGL to be used as a rendering engine by p5
	// this is done by specifying WebGL in createCanvas func
	var v=createCanvas(600, 600, WEBGL);
	background(0);
}


function draw(){
	//Before every frame we clear the screen
	background(0)

	//In 3D the Y is the axis pointing up, the X to the sides and the Z is the axis pointing out of the screen towards us
	// In 2D the origin is the top left corner , but in 3D the origin is the center of the screen
	//There are many shapes for us to use in p5 such as cubes,boxes, spheres, toroids etc
	//eg for a box;
	// box(side length)
	
	//But we cannot see the box as its lying parallel to the plane we're viewing , So we apply transformations to change it
	// Comment the below code and check if you can see the entire cube
	//Some simply well known transformations are translate ,rotate/roatate[X,Y,Z], shear,scale etc
	
	//Let us rotate the box on the Y axis to show us the cube;
	angle+=1;
	rotateX(angle*0.01)


	//We can also shear the box in the x direction using the shearX function
	// Comment and uncomment the below line to see the difference
	// Similarly you can also shear the Y axis
	// shearX(PI/4)
	

	//Another classic transformation is the translate, which moves the axes such that your origin is elsewhere
	translate(100, 0, 0) //Translate the origin to 100,0,0

	//But if the above was enclosed in a push() and pop() ,the transformation would not effect the entire block of code
	//eg

	push(); // save the current state
	translate(0,100,0); // translate to 0,100,0 relative to the origin  (which we changed before to be 100,0,0)
	noFill();
	stroke(0,255,0)
	box(60); //create a box there of side 200
	pop(); // restore the most recent saved state

	// All the fill,stroke,etc functions work on 3D figures as well;
	stroke(255,0,0);
	strokeWeight(2);
	box(100);
	

	push();
	noFill()
	stroke(random(0, 255),random(0, 255),random(0, 255))
	translate(-250,0,0);
	rotateX(angle*0.01);
	rotateY(angle*0.01);
	torus(60,40);
	pop();
}