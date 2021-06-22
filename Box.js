class Box{
    constructor(x,y,width,height,color) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;

      
        World.add(world,this.body);
        Matter.Body.translate(packageBody,{x:-20,y:0})	

    }


    display() {
        rectMode(CENTER);
        fill(this.color);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}