var weight = [35,38,42,45,43,34,36,41,48,32];
var sum=0

function setup() {
  createCanvas(400,400);

  for(var i=0;i<weight.length;i++){
    console.log("before adding weight: "+sum)
    console.log("weight: "+weight[i])
    
    sum=sum+weight[i]
    console.log("after adding weight: "+sum)
  }
var average=sum/weight.length
console.log(average)
}

function draw() 
{
  background(30);
}

 

