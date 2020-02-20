function setup(){
	//create a 700x700 pixel canvas to draw on
	createCanvas(700,700);
	background(0);
}


function draw(){
	//P5 has it own set of variables and functions for our use , the most common of them are the mouse varibles and functions
	//such as mouseX,mouseY ,movedX,movedY,pmouseX,pmouseY
	//mousex mouseY -------> contains the x and y coordinates of the cursor in the current framw
	//movedX,movedY -------> gives the horizantal and verticle distance the mouse has been moved from the previous frame to the current
	//pmouseX, pmouseY-----> gives the previous frames mouseX and mouseY
	background(0);
	//creates a circle at the mouse cursors x and y 
	circle(mouseX,mouseY,100);


	// sometimes we might need to change the range of the values we get inorder to fit inside another range
	// ie we need to map one range to another . for this we use the map function
	// map(variable,orginal start,original end, new start, new end)
	
	// Now we'll try to change the background color based on the x and y coordinates of the mouse cursor
	// Since we only have two dimensions to move in , we can change only two colors independently in the RGB scheme 
	// So as a better option we can use grayscale and the alpha as the two variables
	var gray;
	var alpha;

	// map mouseX values from 0 to the total height to 0 - 255, similarly for the alpha values
	gray=map(mouseX,0, width,0,255);
	alpha=map(mouseY,0,height,0,255);
	background(gray,alpha)

	// we can also find out where the mouse was in the previous frame using pmouseX and pmouseY
	// let us try to draw lines from the previous coordinate to the current coordinate
	stroke(255,0,0);
	strokeWeight(5);
	line(mouseX,mouseY,pmouseX,pmouseY);

	// we reset the properties to the original value so that it doesnt take affect in the next loop
	stroke(0);
	strokeWeight(1);


	// We can also add text to the screen using p5, using the handy text() function
	// text(string,x,y)
	// let us try to display the text based on the mouseX and mouseY
	textSize(100)
	text(mouseX,100,100);


	// if you run the above and check  even if you go out of the canvas the mouseX value still changes,
	// assume we do not want that to happen, we can thus constrain the value shown using the constrain function()
	// constrain(value,min,max)
	var mx=constrain(mouseX,0,width);
	text(mx,100,300)
}	