class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png");
    }

   display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height+100);
        pop ();
    }



}