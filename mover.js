class Mover() {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0); 
        this.w = 20;
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    show() {
        elipse(this.pos.x,this.pos.y, this.w);
    }
}