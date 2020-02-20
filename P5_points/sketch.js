function setup(){
	createCanvas(600,600);
	background(0);
}

function draw(){
	//We want to generate lots of points on the canvas
	// to store the points we use an array
	var points_x=[];
	var points_y=[];
	// To generate random set of values we use the random function
	for(var i=0;i<100;i++){
		points_x.push(random(0,width));
		points_y.push(random(0,height));
	}

	stroke(255);
	strokeWeight(5);
	
	for(var i=0;i<100;i++){
		point(points_x[i],points_y[i]);
	}

	var max_x=max(points_x);
	var max_y=max(points_y);
	var min_x=min(points_x);
	var min_y=min(points_y);
	stroke('red');
	point(max_x,max_y);
	stroke('blue');
	point(min_x,min_y);


	// we need to stop the function from looping as this would cause multiple points to be generated
	noLoop();
}