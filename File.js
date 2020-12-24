
    
    
    
    
    class File{
        constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        
        this.height=height;
        World.add(world, this.body);
        
        
        
        }
        
        display(){
          push ();
       // var pos=this.body.position;
       //translate (580,470);
        rectMode(CENTER);
        fill (255);
        rect(0,0,this.width,this.height);
        pop ();
        }
        
        
        
        
        
        
        }