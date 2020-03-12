
let drops = [];
let howManyDrops = 10000;


function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	for(i = 0; i < howManyDrops; i ++){
		drops[i] = new Drops();
	}
}	

function draw(){
	background(108, 111, 101);
    directionalLight(250, 250, 250, 0, 0, -1);
	orbitControl(3, 3, 3);
	for(i = 0; i < howManyDrops; i ++){
		drops[i].makeDropsVisible();
		drops[i].display();
	}
}


class Drops {
	constructor(){
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(-5000, 5000);
		this.visible = false;
	}
	display(){
		if(this.visible){
			push();
			translate(this.x, this.y, this.z);
			fill(209, 156, 42);
			sphere(10, 2, 2);
			pop();
		}
	}
	makeDropsVisible(){
		this.visible = true;
	}
}
