class Paper{
constructor(x,y,r){
 var options={
      restitution:0.3,
     friction:0.5,
     density:1.2,
     isStatic:false
}	
this.r=r
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(CENTER);
    fill("brown");
    ellipse(0,0, this.r*2, this.r*2);
    pop();
}
}