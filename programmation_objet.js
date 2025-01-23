// creation d'un objet Voiture

// let voiture = {
//     // propriété
//     couleur : "Rose",
//     forme : "arrondie",
//     taille : "petite",

//     // methode 
//     demarrer : function(){
//         console.log("Voiture en action !");
//     }
// }

// console.log("Voici une voiture " + voiture.couleur + ", " + voiture.forme + " et " + voiture.taille);
// voiture.demarrer();

// Creation de modèle de voiture

function Voiture (c, f, t) {
    // Propriété
    this.couleur = c;
    this.forme = f;
    this.taille = t;

    // Methode
    this.demarrer = () => {
        console.log("Demarage !");
    };

    this.avancer = () => {
        console.log("Voiture avance");
    }

    this.reculer = () => {
        console.log("Voiture recule");
    }

}

// Initialisation des 3 objets voiture

let voiture1 = new Voiture("Bleu", "rond", "grande");
voiture1.demarrer();

let voiture2 = new Voiture("Rouge", "carré", "moyenne");
voiture2.demarrer();

let voiture3 = new Voiture("Vert", "rectangle", "petite");
voiture3.demarrer();


function age(annee) {
   return (new Date().getUTCFullYear()) - annee; 
}

// Creation de modèle utilisateur

function Utilisateur(n, p, date, res) {

    // Propriété de Utilisateur
    this.nom = n;
    this.prenom = p;
    this.dateNaissance = date;
    this.villeResidence = res;
    this.age = age(date);

    // Methode de utilisateur
    this.courrir = () => {
        console.log(this.nom + " " + this.prenom + " est train de courrir.");
    }

    this.marcher = () => {
        console.log(this.nom + " " + this.prenom + " est train de marcher.");
    }

    this.sauter = () => {
        console.log(this.nom + " " + this.prenom + " est train de sauter.");
    }

    this.lire = () => {
        console.log(this.nom + " " + this.prenom + " est train de lire.");
    }

    this.ecrire = () => {
        console.log(this.nom + " " + this.prenom + " est train de ecrire.");
    }

    this.reciter = () => {
        console.log(this.nom + " " + this.prenom + " est train de reciter.");
    }
}

let utilisateur1 = new Utilisateur("Ali", "Baco", 1996, "Mamoudzou");

console.log(utilisateur1.prenom + " est agé de " + utilisateur1.age + " ans");

utilisateur1.courrir();
utilisateur1.marcher();
utilisateur1.sauter();
utilisateur1.lire();
utilisateur1.lire();
utilisateur1.reciter();


let utilisateur2 = new Utilisateur("King", "Kong", 2005, "Kaweni");
let utilisateur3 = new Utilisateur("Mary", "jane", 1986, "Mamoudzou");
let utilisateur4 = new Utilisateur("leo", "pold", 1496, "Mamoudzou");
let utilisateur5 = new Utilisateur("Ane", "tel", 1214, "Mamoudzou");
