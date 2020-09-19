class Bob {
    constructor(x, y, radius) {
      this.body = Bodies.circle(x, y, radius );
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      ellipsmode(pos.x, pos.y, this.width, this.height);
      
    }
  };
  