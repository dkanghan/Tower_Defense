class Projectile{
    constructor({position = {x: 0, y: 0}}, target){
        this.position = position;
        this.velocity = {x: 0, y: 0};
        this.target = target;
        this.radius = 10;
        this.image = new Image();
        this.image.src = 'assets/Laser/01.png';
    }
    draw(){

        c.drawImage(this.image, this.position.x, this.position.y);
        // c.beginPath();
        // c.arc(this.position.x, this.position.y, this.radius,0,Math.PI * 2);
        // c.fillStyle = 'orange';
        // c.fill();


    }
    update(){
        
        if (!this.target){
            return;
        }
        this.draw()
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