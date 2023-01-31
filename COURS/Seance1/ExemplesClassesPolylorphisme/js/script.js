
/**
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
*/
class Personne {
    constructor(id, nom, age) {
        this.id = id;
        this.nom = nom;
        this.age = age;
    }
    decrisToi() {
         return this.nom + " est une Personne, age: " + this.age + " id : " + this.id;
    }
    get_age() {
        return this.age;
    }
};

class Manager extends Personne {
    constructor(id, nom, age, salaire) {
        super(id, nom, age);
        this.salaire = salaire;
    }
    decrisToi() {
        console.log(this.nom + " est un Manager ET une Personne");
        return super.decrisToi() + ", salaire: " + this.salaire;
    }
    get_salaire() {
        //console.log("salaire: " + this.salaire);
        return this.salaire;
    }
    set_salaire(montant) {
        this.salaire = montant;
    }
}

console.log("1 - Exemple affichage classe : \n\n " + Manager);

let tableauDePersonnes = [];
tableauDePersonnes[0] = new Personne(1, "Suzie Sue", 23);
//tableauDePersonnes[1] = new Manager(2, "BillyBob Manager", 26, "50.000");

function affichePersonnes(tableau) {
    console.log("### Main - on itere sur le tableau des personnes");
    tableau.forEach(p => {
        console.log(p.decrisToi())
    });

    /*
    Object.keys(array).forEach(function (key) {
        let val = array[key];
        //logic :-) 
        console.log("< - - - - - - - - - - - - - - - >");
        console.log("key: " + key + "  val: " + val);
        console.dir(val);
        val.decrisToi();
        console.log("nom: " + val.nom); // there is no encapsulation here, we have direct access to the variables!
        console.log("nom: " + val.nom, "  age: " + val.get_age());
        try {
            console.log("nom: " + val.nom, "salaire: " + val.get_salaire());
        } catch (e) {
            console.error("val.__proto__.constructor.name: " +
                val.__proto__.constructor.name +
                " experienced an error in main(array): " + e);
        }
        

    });
    */
}


// run the script
affichePersonnes(tableauDePersonnes);
