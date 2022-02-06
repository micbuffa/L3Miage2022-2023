import Rectangle from "./rectangle.js";

window.onload = init;

let canvas;
let width, height;
let ctx;
let r1, r2;

let sliderVitesse;

function init() {
    canvas = document.querySelector("#myCanvas");
    width = canvas.width;
    height = canvas.height;
    
    // pour dessiner on utilise un "contexte"
    ctx = canvas.getContext("2d");

    r1 = new Rectangle(10, 10, 100, 100, "red");
    r1.setVitesseX(5);
    r2 = new Rectangle(150, 200, 50, 50, "green")

    sliderVitesse = document.querySelector("#sliderVitesse");
    sliderVitesse.oninput = (event) => {
        if(r1.vx < 0)
            r1.vx = - parseInt(event.target.value);
        else
            r1.vx = parseInt(event.target.value);

    }

    requestAnimationFrame(animationLoop);

}

function animationLoop(time) {
    // 1 - on efface le contenu du canvas
    ctx.clearRect(0, 0, width, height);

    // 2 - On dessine les objets
    r1.draw(ctx);
    r2.draw(ctx);

    // 3 - on déplace les objets, on détecte les collisions
    // on regarde les touches, la souris, etc.
    r1.move()
    r2.move();

    traiteCollisionsAvecBords();

    // 4 - on demande au navigateur de rappeler la boucle
    // d'animation dans 1/60ème de secondes
    requestAnimationFrame(animationLoop);
}

function traiteCollisionsAvecBords() {
    if((r1.x+r1.l) >= width) {
        r1.vx = -r1.vx;
        // on se remet au point de collision
        r1.x = width-r1.l;
    }

    if(r1.x <= 0) {
        r1.vx = -r1.vx;
        r1.x = 0;
    }
}