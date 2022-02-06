export { ajouteALaListe };

function ajouteALaListe(key) {
    let liste = document.querySelector("#liste");

    let li = document.createElement("li");
    if(key) {
        li.innerHTML = `<b>Touche enfoncée :${key}</b>`;
    } else {
        li.innerHTML = "<b>Une entrée</b>";
    }
    

    li.addEventListener("click", () => {
        console.log("li clické"); 
    });

    liste.append(li);

}
