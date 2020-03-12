
let drops = [];
let howManyDrops = 10000;
let whichDrop = 0;

function setup(){
	createCanvas(1000, 1000, WEBGL);
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
		drops[i].move();
		drops[i].display();
	}
}


class Drops {
	constructor(){
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(-5000, 5000);
		this.xspeed = (0,1);
		this.yspeed = (0,1);
		this.zspeed = (0,5);
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
	move(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		this.z = this.z + this.zspeed;

		if((this.x > width) || this.x < 0){
			this.xspeed = this.xspeed * -1;
		}

		if((this.y > height) || this.y < 0){
			this.yspeed = this.yspeed * -1;
		}

		if((this.z > 5000) || this.z < 0){
			this.zspeed = this.zspeed * -1;
		}
	}
	makeDropsVisible(){
		this.visible = true;
	}
}
