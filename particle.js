class Particle 
{
    constructor(x,y)
    {  
        var option={restitution:0.8,friction:1,density:1,isStatic:false}
        this.body=Bodies.circle(x,y,10)
        World.add(world, this.body);
    }

        display()
        {
            fill(random(0,255),random(0,255),random(0,255))
            ellipseMode(RADIUS)
            push()
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            ellipse(0,0,10,10)
         pop()
        }

}