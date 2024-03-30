class Building{
    constructor({position = {x: 0, y: 0}}){
        this.position = position;
        this.size = 32;
        this.width = this.size*2;
        this.height = this.size*2;
        this.center = {x: this.position.x + this.width/2, y: this.position.y + this.height/2};
        this.color = 'rgba(0, 0, 255, 0.2)'
        this.projectiles = [];
        this.radius = 250;
        this.target = null;
        this.frames = 0;
    }
    draw(){
        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.size*2, this.size*2);

        c.beginPath();
        c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(255, 255, 255, 0.1)';
        c.fill();
    }

    update(){
        this.draw();
        this.frames++;
        if(this.frames % 100 === 0){
            this.projectiles.push(new Projectile({position: {x: this.center.x, y: this.center.y}}, this.target));
        }
    }
}

class Projectile{
    constructor({position = {x: 0, y: 0}}, target){
        this.position = position;
        this.velocity = {x: 0, y: 0};
        this.target = target;
        this.radius = 10;
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius,0,Math.PI * 2);
        c.fillStyle = 'orange';
        c.fill();


    }
    update(){
        this.draw();
        if (!this.target){
            return;
        }
        const yDistance = this.target.center.y - this.position.y;
        const xDistance = this.target.center.x - this.position.x;
        const angle = Math.atan2(yDistance, xDistance);
        this.velocity.x = Math.cos(angle)*5 ;
        this.velocity.y = Math.sin(angle)*5 ;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // console.log(enemies)
    }
}