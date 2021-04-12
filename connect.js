class connect
{
    constructor(bodyA)
    {
        var options={
            bodyA: bodyA,
            bobyB: this.bodyB,
            stiffness: 0.04,
            length:10
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display()
    {

        var pointA = this.bodyA.position;
        var pointB = this.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}