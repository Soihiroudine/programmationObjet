// class. Crée la classe Document grâce au mot-clé class
class Document {

    // Définissons le constructeur de la classe grâce au mot-clé constructor
    constructor(titre, nombrePage, auteur) {
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.auteur = auteur;
    }
    // Méthode description de la classe Document
    description() {
        console.log("Le titre du document est ", this.titre);
        console.log("L'auteur est ", this.auteur);
        console.log("Le document contient ", this.nombrePage, " pages");
    }
}
// crée plusieurs documents similaires à partir du modèle de Document
let documentHtml = new Document("Introduction au HTML", 35, "Nourdine Combo");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavascript = new Document("Introduction au JavaScript", 55, "Nissay Abdou");
let documentMysql = new Document("Apprendre MySQL", 35, "Fatima Ali");

// Affichage pour chaque objet : "titre", "auteur", "nombre de page" et la méthode "description"
console.log("\n============");
console.log("Titre : " + documentHtml.titre + "\nAuteur : " + documentHtml.auteur + "\nNombre de page : " + documentHtml.nombrePage + "\n" + "--------------");
documentHtml.description();

console.log("\n============");
console.log("Titre : " + documentCss.titre + "\nAuteur : " + documentCss.auteur + "\nNombre de page : " + documentCss.nombrePage + "\n" + "--------------");
documentCss.description();

console.log("\n============");
console.log("Titre : " + documentJavascript.titre + "\nAuteur : " + documentJavascript.auteur + "\nNombre de page : " + documentJavascript.nombrePage + "\n" + "--------------");
documentJavascript.description();

console.log("\n============");
console.log("Titre : " + documentMysql.titre + "\nAuteur : " + documentMysql.auteur + "\nNombre de page : " + documentMysql.nombrePage + "\n" + "--------------");
documentMysql.description();

/**
 * Classe enfant Livre étendue de la classe Document
 * 
 * La classe Document va servir de base pour la classe Livre
 * En outre, la classe Livre va pouvoir utiliser tous les attributs et méthodes de la classe Document
 * Et pour faire cela on utilise le mot-clé "extends"
 */
class Livre extends Document {
    // Constructeur de la classe Livre
    constructor(titre, nombrePage, auteur, maisonEdition) {
        // Propriétés héritées de la classe parent Document
        // super() appelle au constructeur de la classe parent Document
        super(titre, nombrePage, auteur);
        // Propriété spécifique de la clase enfant Livre
        this.maisonedition = maisonEdition;
    
    }
    
    // Méthode spécifique à la classe Livre
    convertirPdf(){
        console.log("Je convertis le livre en PDF.");
    }
}

// crée plusieurs exemplaires de livre.
// En programmation, on dit : je crée une instance de la classe Livre
let livreInformatique = new Livre("Informatique c'est facile", 45, "Bacar Koutsi", "Ylang edition");

livreInformatique.convertirPdf();