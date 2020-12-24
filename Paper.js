class Paper{
    constructor(x,y,r){
    
    this.body=Bodies.circle(x,y,r/2,{isStatic:true});
    this.r=r;
    this.x=x;
    this.y=y;
    
  
    World.add(world, this.body);
    
    
    
    }
    
    display(){

    var pos=this.body.position;
push ();
translate (pos.x,pos.y);
   ellipseMode(CENTER);
   strokeWeight(4);
    fill (255,0,255);
   ellipse(pos.x,pos.y,this.r,this.r);
    pop ();
    }
    
    
    
    
    
    
    }