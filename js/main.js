'use strict'; // Demande une interprétation stricte du code
// Déclaration des variables
let nom ='Bahadir';
let prenom = 'Oktay';
let age = '41';

nom = nom.toUpperCase();

const h1 = document.querySelector('h1');
h1.style.backgroundColor = 'yellow';

const paras = document.querySelectorAll('p');
// Parcours le tableau des paragraphes
// avec une boucle for
for (let i = 0; i< paras.length; i++) {
    paras[i].style.color = 'red';
}
// Avec un for...of
// https://divtec.gitbook.io/javascript/javascript/introduction/boucles#for..of
for (let unPara of paras) {
    unPara.style.backgroundColor = 'black';
}
console.log(paras, h1, nom, prenom, age);

// Récupération des élément pour gérer les tâches (input, button, liste)
const inputTache = document.querySelector('#tache');
const btAjouter = document.querySelector('button.ajouter');
const ulTaches = document.querySelector('.liste-taches');
console.log(inputTache, btAjouter, ulTaches);

/* btAjouter.onclick = function toto () {
    alert('clic !');
}; */

function ajouter () {
    // Récupère la valeur saisie par l'utilisateur
    let saisie = inputTache.value;
    // alert(`Valeur saisie: ${saisie} !`);
    ulTaches.innerHTML += `<li>${saisie}</li>`;
    // Vide le champ de saisie
    inputTache.value = '';
    // Redonne le focus au champ de saisie
    inputTache.focus();
}

// Ecouter le clic de la souris
btAjouter.addEventListener('click', ajouter);
// Ecoute clavier sur champ de saisie
inputTache.addEventListener('keypress', function (event) {
    console.log(event);
    if (event.key === 'Enter') {
        ajouter();
       // btAjouter.click();
    }
});