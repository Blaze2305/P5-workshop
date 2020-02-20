//LOOPS
console.log("FOR LOOPS");
for(var i=0;i<10;i++){
	console.log(i)
}

console.log("WHILE LOOPS");
var j=0;
while(j<10){
	console.log(j);
	j+=1;
}

//CONDITIONALS 
console.log("IF");
var pr=prompt("ENTER THE VALUE");
if(isNaN(pr)){
	console.log(pr,"NOT A NUMBER")
}
else{
	console.log(pr,"THIS IS A NUMBER")
}

var resp=confirm("ARE YOU SURE??")
if(resp){
	console.log("YES")
}
else{
	console.log("NO")
}

console.clear()

//Functions
function say(){
	let s=prompt("ENTER A NUMBER TO BE SQUARED");
	if(isNaN(s)){
		return("NOT A NUMBER")
	}
	return(s*s)
}

let value=say()
console.log(value)


//Classes and objects
class First{
	constructor(x,y,z){
		this.x=x;
		this.y=y;
		this.z=z;
	}

	show(){
		console.log(this.x,this.y,this.z);
	}

	change(a,b,c){
		this.x=a;
		this.y=b;
		this.z=c;
	}
}


var first=new First(1,2,4);
first.show()
first.change(1000,10001,100301)
first.show()