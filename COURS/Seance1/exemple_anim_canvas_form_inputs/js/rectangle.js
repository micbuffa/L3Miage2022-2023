export default class Rectangle {
    vx = 1;

    constructor(x, y, l, h, couleur) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.h = h;
        this.couleur = couleur;
    }

    draw(ctx) {
        // en rouge
        ctx.fillStyle = this.couleur; // couleur CSS, on aurait pu utiliser rgb(255, 0, 0)
        // x, y, l, h, x et y = coordonnées du coin en haut à g
        ctx.fillRect(this.x, this.y, this.l, this.h);
    }

    setVitesseX(v) {
        this.vx = v;
    }
    
    move() {
        this.x += this.vx;
    }
}