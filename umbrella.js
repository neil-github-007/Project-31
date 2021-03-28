class Umbrella {
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(200, 550, 50, options);
        World.add(world, this.body);
    }

    display() {
       
        ellipse(200, 550, 100);
    }
}