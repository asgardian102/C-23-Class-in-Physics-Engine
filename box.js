class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        World.add(world, this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();//set new drawing environment
        translate(pos.x, pos.y)
        rotate(angle);
        
        fill(255)
        rectMode(CENTER)
        rect(0,0, this.width,this.height)
        pop();
    }
}