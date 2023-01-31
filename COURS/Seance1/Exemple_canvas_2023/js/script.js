window.onload = init;

let canvas, ctx, w, h;

function init() {
    // On va chercher le canvas
    canvas = document.querySelector('#myCanvas');
    ctx = canvas.getContext('2d');

    w = canvas.width;
    h = canvas.height;

    anime();
}


function drawMonstre(x, y, angle) {

}
/**
 * Classe ObjetGraphique qui représente un objet graphique
 * Propriétés :
 * - x : position en x
 * - y : position en y
 * - angle : angle de rotation
 * - vitesseX : vitesse en x
 * - vitesseY : vitesse en y
 */
class ObjetGraphique {
    x = 0;
    y = 0;
    angle = 0;
    vitesseX = 0;
    vitesseY = 0;

    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    draw() {
        // bonne pratique
        ctx.save(); // sauvegarde de toutes les valeurs du contexte
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle)

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 100, 100);

        ctx.fillStyle = "yellow";
        ctx.fillRect(20, 20, 10, 10);
        ctx.fillRect(70, 20, 10, 10);

        // on remet les valeurs initiales
        ctx.restore();
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}
/*
let monstre = {
    x: 10,
    y: 10,
    angle: 0,
    draw: function () {

    },
    move: function () {
        this.x += 10;
    }
}
*/
let monstre = new ObjetGraphique(10, 10, 0);

function anime() {
    // 1 on efface le contenu du canvas
    ctx.clearRect(0, 0, w, h);

    // 2 - On dessine
    monstre.draw();

    // 3 - on déplace les objets
    monstre.move();
    // 3 - On rappelle la fonction d'animation tous les 1/60 de seconde
    requestAnimationFrame(anime)
}