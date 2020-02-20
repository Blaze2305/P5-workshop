let birb;
let init_wall;
let wall_speed=2;
let walls=[];
let n;
let score=0;
let reset_button;

function setup(){
    createCanvas(600, 600 );
    birb=new bird(random(0, height));
    init_wall= new wall(50,floor(random(180,240)),floor(random(2,6))*100,(width-50)/2,wall_speed);
    walls.push(init_wall);
    reset_button=createButton('PRESS TO RESET');
    reset_button.mousePressed(reset);
    for( n=1;n<4;n++){
        walls[n]=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(0,7))*100,walls[n-1].x+300,wall_speed);
    }
}

function draw(){
    birb.fall();
    background(0);
    birb.show();
    textSize(50)
    stroke(255)
    text(score, 10, 60);

    
    if(walls[0].x<0){
        walls.shift();
        let a=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(1,6))*100,walls[walls.length-1].x+250,wall_speed);
        walls.push(a);
    }

    for(let i=0;i<walls.length;i++){
        walls[i].show();
        walls[i].move();

    }

    let a=walls[0].check(birb);
    if(a){
        alert("YOU LOST")
        alert("You travelled "+score +"m");
        console.log("YOU LOST!");
        noLoop();
    }
    if(keyIsDown(32)){
        birb.jump();
    }


    if(frameCount%60==0){
        score+=1;
    }

    // if uncommented would increase the init_wall speed by 2 pix/frame every 20 seconds
    // if(frameCount%(60*20)==0){
    //     wall_speed+=2;
    // }
}


function reset(){
    score=0;
    birb=new bird(random(0, height));
    init_wall= new wall(floor(random(20,50)),floor(random(180,280)),floor(random(3,6))*100,(width-50)/2,wall_speed);
    walls=[]
    walls.push(init_wall);
    for( n=1;n<4;n++){
        walls[n]=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(0,6))*100,wl[n-1].x+300,wall_speed);
    }
    console.clear()
    loop();
}
