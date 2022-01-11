import Cookie from "./cookie.js";
import { create2DArray } from "./utils.js";

/* Classe principale du jeu, c'est une grille de cookies. Le jeu se joue comme
Candy Crush Saga etc... c'est un match-3 game... */
export default class Grille {
  cookiesSelectionnees = [];

  constructor(l, c) {
    this.colonnes = c;
    this.lignes = l;
    // le tableau des cookies
    this.cookies = create2DArray(l);

    this.remplirTableauDeCookies(6)
  }

  /**
   * parcours la liste des divs de la grille et affiche les images des cookies
   * correspondant à chaque case. Au passage, à chaque image on va ajouter des
   * écouteurs de click et de drag'n'drop pour pouvoir interagir avec elles
   * et implémenter la logique du jeu.
   */
  showCookies() {
    let caseDivs = document.querySelectorAll("#grille div");

    caseDivs.forEach((div, index) => {
       let ligne = Math.floor(index/this.lignes);
       let colonne = index % this.colonnes;

       let cookie = this.cookies[ligne][colonne];
       let img = cookie.htmlImage;

       // On met un écouteur de click sur l'image
       img.onclick = (event) => {
         // on a besoin de récupérer l'objet Cookie
         // ou du moins la ligne et la colonne
         // On commence par récupérer l'image sur
         // laquelle on a cliqué
         const i = event.target;
         let ligneCookie = i.dataset.ligne;
         let colonneCookie = i.dataset.colonne;
         //console.log("Image clickée l = " + ligneCookie + " c = " + colonneCookie)
        let cookieClickee = this.cookies[ligneCookie][colonneCookie];

        if(this.cookiesSelectionnees.length === 0) {
          cookieClickee.selectionnee();
          this.cookiesSelectionnees.push(cookieClickee);
        } else if(this.cookiesSelectionnees.length === 1) {
          cookieClickee.selectionnee();
          console.log("On essaie de swapper !")
          this.cookiesSelectionnees.push(cookieClickee);
          // on essaie de swapper
          Cookie.swapCookies(this.cookiesSelectionnees[0], 
                            this.cookiesSelectionnees[1]);
          // on remet le tableau des cookies selectionnées à 0
          this.cookiesSelectionnees = [];
        } else {
          console.log("Deux cookies sont déjà sélectionnées...")
        }
      }
       div.appendChild(img);
    });
  }

  
  /**
   * Initialisation du niveau de départ. Le paramètre est le nombre de cookies différents
   * dans la grille. 4 types (4 couleurs) = facile de trouver des possibilités de faire
   * des groupes de 3. 5 = niveau moyen, 6 = niveau difficile
   *
   * Améliorations : 1) s'assurer que dans la grille générée il n'y a pas déjà de groupes
   * de trois. 2) S'assurer qu'il y a au moins 1 possibilité de faire un groupe de 3 sinon
   * on a perdu d'entrée. 3) réfléchir à des stratégies pour générer des niveaux plus ou moins
   * difficiles.
   *
   * On verra plus tard pour les améliorations...
   */
  remplirTableauDeCookies(nbDeCookiesDifferents) {
    for(let l = 0; l < this.lignes; l++) {
      for(let c = 0; c < this.colonnes; c++) {
        //console.log("ligne = " + l + " colonne = " + c);
        const type = Math.round(Math.random()*(nbDeCookiesDifferents-1))
        this.cookies[l][c] = new Cookie(type, l, c);
      }
    }
  }
}
