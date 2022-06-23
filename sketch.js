function setup() {
	createCanvas(windowWidth, 40);
}

var i = 50;

function draw() {
	background(100,100,200);
	
	fill(255);
	textSize(30);
	text("Mission Accomplished!", i, 30);
	
	if (i >= windowWidth) {
	i = -300;
	} else {
		i += 3;
	}
	
}
