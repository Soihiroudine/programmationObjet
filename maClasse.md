# Code du fichier maclasse.js

## Définition de la Classe

A la ligne **2** on a definit une classe avec le mot clé `class` dont il porte le nom `Document`. Tous les instructions se trouve à l'intérieur des accualades `{}`

```js
class Document{}
```

## Les propriétés

De la ligne 6 à 8, nous avons definis des *variables* propre à notre classe, on les appèles des ***propriétés***.

Pour que l'on disent qu'ils appartiennent à notre classe, les propriétés sont précédés du mot clé `this`.

Notre classe en a trois :

- `titre`
- `nombrePage`
- `auteur`

```js
    this.titre = "Grand bleu";
    this.nombrePage = 21;
    this.auteur = "Cazer";
```

## Méthodes

Une ***méthode*** est une *fonction* définie au sain d'une classe et utilisable qu'appartir de cette même classe.

Dans notre classe nous avons deux méthodes :

- `constructor`, une méthode déjà existante utiliser pour la construction de la classe. C'est ici que l'on définit les propriétés
- `description`, une méthode que l'on a créé pour afficher le titre, l'auteur, et le nombre de page

```js
constructor(titre, nombrePage, auteur) {
    this.titre = titre;
    this.nombrePage = nombrePage;
    this.auteur = auteur;
}

description() {
    console.log("Le titre du document est ", this.titre);
    console.log("L'auteur est ", this.auteur);
    console.log("Le document contient ", this.nombrePage, " pages");
}

```

## Création d'un objet

Nous avous définit des objets à la ligne 18 à 21.

```js
let documentHtml = new Document("Introduction au HTML", 35, "Nourdine Combo");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavascript = new Document("Introduction au JavaScript", 55, "Nissay Abdou");
let documentMysql = new Document("Apprendre MySQL", 35, "Fatima Ali");
```

On peut voire que pour appeler et utiliser notre classe `Document`, nous avons utiliser le mot-clé `new`.

## Affichage et utilisation de nos objets

Appartir des définitions de nos objets que l'on a fait des lignes précédentes nous allons pouvoir afficher les données que l'on a mis lors de l'initialisation des objets.

De la ligne 24 à 38, nous avons fait une manière d'afficher les informations stocker dans l'objet.

```js
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
```
