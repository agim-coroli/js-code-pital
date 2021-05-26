import {Personne, Docteur, Traitement, rick, negan, morgan, dwigth, michonne, toubib, medoc1, medoc2, medoc3, medoc4, medoc5} from "./classes.js";
import {salleDattente, cabinetDocteur, cimetiere, pharmacie} from "./objets.js"



// HISTOIRE 
// on fait rentrer les gens dans la salle dattente
salleDattente.personne.push(rick, negan, morgan, dwigth, michonne)

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(rick.nom)

// on diagnostique le patient 
rick.diagnostique(rick);

// on paye le doc
rick.paye(toubib)

// verifie largent du patient
console.log(`${rick.nom} a ${rick.argent}€ actuellement`);

// rick quitte le cabinet
toubib.patientOut(rick.nom)

// va a la pharmacie
rick.goTo(salleDattente, pharmacie)

// achete le traitement
rick.traitement(rick)

console.log("----------------------------------------------");

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(negan.nom)

// on diagnostique le patient 
negan.diagnostique(negan);

// on paye le doc
negan.paye(toubib)

// verifie largent du patient
console.log(`${negan.nom} a ${negan.argent}€ actuellement`);

// negan quitte le cabinet
toubib.patientOut(negan.nom)

// va a la pharmacie
negan.goTo(salleDattente, pharmacie)

// achete le traitement
negan.traitement(negan)

console.log("----------------------------------------------------");

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(morgan.nom)

// on diagnostique le patient 
morgan.diagnostique(morgan);

// on paye le doc
morgan.paye(toubib)

// verifie largent du patient
console.log(`${morgan.nom} a ${morgan.argent}€ actuellement`);

// morgan quitte le cabinet
toubib.patientOut(morgan.nom)

// va a la pharmacie
morgan.goTo(salleDattente, pharmacie)

// achete le traitement
morgan.traitement(morgan)

console.log("----------------------------------------------------");

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(dwigth.nom)

// on diagnostique le patient 
dwigth.diagnostique(dwigth);

// on paye le doc
dwigth.paye(toubib)

// verifie largent du patient
console.log(`${dwigth.nom} a ${dwigth.argent}€ actuellement`);

// dwigth quitte le cabinet
toubib.patientOut(dwigth.nom)

// va a la pharmacie
dwigth.goTo(salleDattente, pharmacie)

// achete le traitement
dwigth.traitement(dwigth)

console.log("----------------------------------------------------");

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(dwigth.nom)

// on diagnostique le patient 
dwigth.diagnostique(dwigth);

// on paye le doc
dwigth.paye(toubib)

// verifie largent du patient
console.log(`${dwigth.nom} a ${dwigth.argent}€ actuellement`);

// dwigth quitte le cabinet
toubib.patientOut(dwigth.nom)

// va a la pharmacie
dwigth.goTo(salleDattente, pharmacie)

// achete le traitement
dwigth.traitement(dwigth)

console.log("----------------------------------------------------");

// nombre de personne dans la salle dattente
console.log(`dans la ${salleDattente.nom} il y a ${salleDattente.personne.length} personnes`);

// le doc fait rentrer le patient dans le cabinet 
toubib.patientIn(michonne.nom)

// on diagnostique le patient 
michonne.diagnostique(michonne);

// on paye le doc
michonne.paye(toubib)

// verifie largent du patient
console.log(`${michonne.nom} a ${michonne.argent}€ actuellement`);

// michonne quitte le cabinet
toubib.patientOut(michonne.nom)

// va a la pharmacie
michonne.goTo(salleDattente, pharmacie)

// achete le traitement
michonne.traitement(michonne)

console.log("----------------------------------------------------");