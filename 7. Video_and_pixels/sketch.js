

// decalre a variable to store the video feed in
var video;

// This is used to scale down the video from its full size to a  more manageable , more efficient size
var vScale=16;
// var particle;

//Various sliders for the properties
var alpha_slider;
var size_slider;
var jump_dist_slider;

//this is an array to store all the particles in
var particles=[];

//the number of particles
var n=20;

//This var is used to check if the video stream has loaded in the call back function
var loaded=false;

function setup(){
	//create a canvas of the normal display size 480p
	createCanvas(640,480);
	//This sets the pixel density to 1 . in high density displays there are often 4 pixels meshed
	// together. to turn off the default we use pixeldensity(1)
	pixelDensity(1);

	// We create a video capture like this , and we must specify the capture type
	// we also use a callback function to check if the video stream has loaded properly or not
	video=createCapture(VIDEO,check);

	// Create a new instance of the particle class
	// particle=new Particle(320,240);

	// Instead of just 1 particle we can generate n number of particles , we store all of them in an array and iterate through them
	for(var i=0;i<n;i++){
		particles[i]=new Particle(width/2+random(-20,20),height/2+random(-20,20));
	}

	// sliders for the particle properties
	alpha_slider=createSlider(100, 255, 200	, 10);
	jump_dist_slider=createSlider(10,200,20,10);
	size_slider=createSlider(5,100,20,5);

	// default background is black for us 
	background(0);
}


function draw(){
	//Before we start the draw loop we check if the stream is there 
	if(loaded){
		
		//This resizes the video frame 
		video.size(width/vScale,height/vScale);

		//we set loaded to false to avoid any further changes to the size of the video
		loaded=false;
	}


	//Since our aim ist ot paint , we dont need to clear the canvas by setting the background again and again
	// background(0);

	// Before we can play around with the video , we should first load the pixels from the video stream
	// That is done by the .loadPixels() function
	video.loadPixels();

	//Next we iterate thorough all the pixels, update their states and display them
	for(var i=0;i<n;i++){
		particles[i].update();
		particles[i].show();
	}
}

//Callback function
function check(){
	loaded=true;
}

//This is the class for the Particle, its constructor has an init x and y coordinate
class Particle{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}

	// Here we take the particle and then we randomly move it in the x and y , a distance depending on the jump_dist slider
	update(){
		this.x+=random(-1*jump_dist_slider.value(),jump_dist_slider.value());
		this.y+=random(-1*jump_dist_slider.value(),jump_dist_slider.value());

		//And to make sure it stays inside the canvas and doesnt go outside we use the constrain function
		this.x=constrain(this.x, 0, width);
		this.y=constrain(this.y,0,height);
	}


	//Displays the particle as a circle without any border
	show(){
		noStroke();

		//THIS IS VERY IMPORTANT AS WE NEED TO PROPERLY SCALE DOWN TO THE SIZE OF THE VIDEO TO GET THE PROPER COLORS
		var vx=floor(this.x/vScale);
		var vy=floor(this.y/vScale);
		// we then get the pixels ,which will be of the form of an array of R G B values ir [R ,G ,B]
		var colo=video.get(vx,vy);
		fill(colo[0],colo[1],colo[2],alpha_slider.value());
		circle(this.x,this.y,size_slider.value());
	}
}