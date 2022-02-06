import { ajouteALaListe } from "./utils.js";

window.onload = init;

function init() {
    console.log("DOM ready, page chargée");

    // on ajoute un écouteur de touches
    document.onkeydown = (event) => {
        console.log(event.key);
        ajouteALaListe(event.key);
    }
}

function changeTitre() {
    let titre = document.querySelector("#leTitre");

    titre.innerHTML += " toto"; 
    
    titre.style.backgroundColor = "green";
}


