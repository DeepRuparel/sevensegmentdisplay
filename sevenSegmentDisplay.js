let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f,0x7b];
let index = 0;
function setup() {
  frameRate(1);
  createCanvas(400, 400);
}

function draw() {
  background(220);
  sevenSegment(nums[index]);
  index = (index + 1) % nums.length;
}
function getColor(val, shift) {
  let r = 255;
  let g = 0;
  let b = 0;
  let a = 255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}
function sevenSegment(val){
  push();
  noStroke();
  noFill();
  
  //a
  fill(getColor(val, 6));
  rect(60,20,78,18);
  //b
  fill(getColor(val,5));
  rect(140,40,18,98);
  //c
  fill(getColor(val,4));
  rect(140,160,18,98);
  //d
  fill(getColor(val,3));
  rect(60,260,78,18);
  //e
  fill(getColor(val,2));
  rect(40,160,18,98);
  //f
  fill(getColor(val,1));
  rect(40,40,18,98);
  //g
  fill(getColor(val, 0));
  rect(60, 140, 78, 18, 10, 10);
  pop();
}
