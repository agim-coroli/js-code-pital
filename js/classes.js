import { cabinetDocteur, salleDattente, cimetiere, pharmacie } from "./objets.js";

class Personne {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.goTo = (depart, arriver) => {
            depart.personne.splice(0, 1)
            arriver.personne.push(this)
            console.log(`${this.nom} rentre au ${arriver.nom}`);
        }
        this.paye = (argentdoc) => {
            this.argent -= 50
            argentdoc.argent += 50
            console.log(`${this.nom} a payer le docteur ${toubib.nom}`);
        }
        this.diagnostique = (patient) => {
            if (patient.maladie == "dépression") {
                console.log(`la maladie de ${this.nom} est : dépression`);
                console.log(`le traitement de ${this.nom} est : ${medoc1.nom}`);
            } else if (patient.maladie == "assassin") {
                console.log(`la maladie de ${this.nom} est : assassin`);
                console.log(`le traitement de ${this.nom} est : ${medoc2.nom}`);
            } else if (patient.maladie == "schizophrénie") {
                console.log(`la maladie de ${this.nom} est : schizophrénie`);
                console.log(`le traitement de ${this.nom} est : ${medoc3.nom}`);
            } else if (patient.maladie == "brulure") {
                console.log(`la maladie de ${this.nom} est : brulure`);
                console.log(`le traitement de ${this.nom} est : ${medoc4.nom}`);
            } else if (patient.maladie == "paranoïa") {
                console.log(`la maladie de ${this.nom} est : paranoïa`);
                console.log(`le traitement de ${this.nom} est : ${medoc5.nom}`);
            }
        }
        this.traitement = (patient) => {
            if (patient.maladie == "dépression" && this.argent >= medoc1.prix) {
                this.poche.push(medoc1)
                console.log(`le traitement de ${this.nom} coute ${medoc1.prix}`);
            } else if (patient.maladie == "assassin" && this.argent >= medoc2.prix) {
                this.poche.push(medoc2)
                this.argent -= medoc2.prix 
                console.log(`le traitement de ${this.nom} coute ${medoc2.prix}€`);
                console.log(`${this.nom} est soigné`);
            } else if (patient.maladie == "schizophrénie" && this.argent >= medoc3.prix) {
                this.poche.push(medoc3)
                this.argent -= medoc3.prix 
                console.log(`le traitement de ${this.nom} coute ${medoc3.prix}€`);
                console.log(`${this.nom} est soigné`);
            } else if (patient.maladie == "brulure" && this.argent >= medoc4.prix) {
                this.poche.push(medoc4)
                this.argent -= medoc4.prix 
                console.log(`le traitement de ${this.nom} coute ${medoc4.prix}€`);
                console.log(`${this.nom} est soigné`);
            } else if (patient.maladie == "paranoïa" && this.argent >= medoc5.prix) {
                this.poche.push(medoc4)
                this.argent -= medoc5.prix 
                console.log(`le traitement de ${this.nom} coute ${medoc5.prix}€`);
                console.log(`${this.nom} est soigné`);
            } else {
                pharmacie.personne.splice(0, 1);
                cimetiere.personne.push(this)
                console.log(`le traitement de ${patient.nom} coute ${medoc1.prix}`);
                console.log(`${patient.nom} n'a pas assez d'argent pour payer le traitement`);
                console.log(`${patient.nom} est mort et est donc au ${cimetiere.nom}`);
            }
        }
    }
}
// les patient 
let rick = new Personne("Rick", "dépression", 100, [], "malade");
let negan = new Personne("Negan", "assassin", 200, [], "malade");
let morgan = new Personne("Morgan", "schizophrénie", 80, [], "malade");
let dwigth = new Personne("Dwigth", "brulure", 110, [], "malade");
let michonne = new Personne("Michonne", "paranoïa", 60, [], "malade");

class Docteur {
    constructor(nom, argent) {
        this.nom = nom;
        this.argent = argent;
        this.patientIn = (patient) => {
            cabinetDocteur.personne.push(patient)
            console.log(`${patient} est entré dans le cabinet`);
        }
        this.patientOut = (patient) => {
            cabinetDocteur.personne.splice(0, 1)
            console.log(`${patient} est sorti du cabinet`);
        }
    }
}
let toubib = new Docteur("Kanfaoui", 0)

class Traitement {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

// les medoc 
let medoc1 = new Traitement("antidépresseur", 60);
let medoc2 = new Traitement("hashish", 100);
let medoc3 = new Traitement("zyprexa", 35);
let medoc4 = new Traitement("pomade", 40);
let medoc5 = new Traitement("antiPsychotique", 20);
export { Personne, Docteur, Traitement, rick, negan, morgan, dwigth, michonne, toubib, medoc1, medoc2, medoc3, medoc4, medoc5 }
