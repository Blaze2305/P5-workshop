// Declaring a global variable to set the button to
let button;
let button2;

// Declaring a global variable to set to the slider
let slider;
let slider2;

// Declaring a global variable to set the input box to
let inp;` `

function setup(){
	createCanvas(600, 600);
	background(0);

	// ALL DOM ELEMENTS HAVE THE PROPERTIES OF .size(), .position(), etc..

	// We can create a button using the createButton DOM function
	// createBUtton(label,value)
	button = createButton('click me to change color');
	button2 = createButton('This resets the canvas to the presets')
	// we can then tie the button to a function using the .mousePressed function of the button 
	// ie button.mousePressed(function here)
	button.mousePressed(change);
	button2.mousePressed(reset);

	// We can also use other DOM elements such as 
	// (a).slider
	// createSlider(min,max,initial value, step size)
	slider=createSlider(0, width, 100, 1);
	slider2=createSlider(0, height, 100, 1);

	// (b).input
	// createInput();
	// to update stuff if the value changes we use the .changed function ,	
	// similarly to do stuff when we input ,we use the input function
	inp=createInput();
	inp.changed(type);

}


function draw(){

	// In order to use the slider we'll create a circle whose X and Y values are controlled using sliders
	stroke(255);
	circle(slider.value(),slider2.value(),50);


}

function type(){
	// Once we set a function to a input box we can access the value of the input box using the this.value() function
	textSize(10);
	text(this.value(),200,200);
}

function reset(){
	background(0);
}

function change(){
	let bg=random(0,255);
	background(bg);
	//We use this so that anytime the background changes the color of the circle changes too .
	fill(255-bg);
	stroke(255-bg);
}