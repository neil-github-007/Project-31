class Drops {
    constructor(x, y) {
        var options = {
            'restitution':1,
            'friction':0.1,
            'density':0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);

        this.drops = [];
        
        this.radius = 5;
    }

    display() {
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

        if(this.body.position.y > 700) {
            Matter.Body.setPosition(this.body, {x: random(0, 400), y:random(0, 40)});
        }
    }
}

