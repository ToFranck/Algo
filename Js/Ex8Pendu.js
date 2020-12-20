
// Créer le mot à deviner
var motEntre = prompt('Entrez un mot à deviner !');
console.log(motEntre);
// Passer le mot entré en majuscules
motEntre = motEntre.toUpperCase();

// Tableau pour stocker les lettres proposées
var alrGuessed = [];

// Tableau pour stocker le mot à deviner sous forme diff
var leMot = [];

// Variable pour stocker la lettre proposée
var deviner;

// Spliter le mot à deviner pour qu'il soit sous forme de tableau
var displayWord = motEntre.split('');

// Boucle pour ajouter au mot vide le nombre d'entrées correspondant au mot à deviner
for (var i = 0; i < displayWord.length; i++) {
  leMot.push(' _ ');
}

// Récupérer l'objet qui va afficher le mot au fur et à mesure
var theWordDisplay = document.getElementById('leMot');

// Récupérer l'objet qui va afficher les lettres déjà proposées
var alrGuessedDisplay = document.getElementById('alrGuessed');

// Récupérer l'objet pour afficher le message de félicitations
var infosDisplay = document.getElementById('infos');

// On concatène le tableau pour en faire un mot
theWordDisplay.textContent = leMot.join('');

// Fonction pour vérifier les lettres entrées
function validate() {

  // Récupérer la valeur entrée par l'user
  deviner = document.getElementById('input').value;
  
  // Expression régulière pour vérifier que l'entrée est une lettre
  var objRegExp  = /[A-Za-z]/;
  
  // Si l'input contient bien une lettre
  if(objRegExp.test(deviner)){
    
    // Vider le champ infos
    infosDisplay.textContent = '';
    
    // Passer la lettre entrée en majuscule
    deviner = deviner.toUpperCase();
    
    // Add la lettre que l'utilisateur a deviné 
    alrGuessed.push(deviner);
  } else {
    // Aff messge d'erreur
    infosDisplay.textContent = 'Que des lettres';
  }

  // Si l'ensemble des lettres entrées ne correspondent pas au mot à deviner (s'il reste des lettres à deviner)
  if (leMot.join('') !== displayWord.join('')) {
    

    // boucle pour test les lettres
    for (var i = 0; i < displayWord.length; i++) {

      // Si la lettre entrée par l'utilisateur correspond à une des lettres
      if (deviner == displayWord[i]) {

        // Add la lettre dans le mot à deviner
        leMot[i] = deviner;

        // Modifie l'affi pour que l'utilisateur check ou se trouve la lettre
        theWordDisplay.textContent = leMot.join('');

      }
    }

    // Maj l'affichage des lettres essayées pour l'utilisateur
    alrGuessedDisplay.textContent = alrGuessed.join('  ');

    // Vider champ texte
    document.getElementById('input').value = "";
    
    // Si le mot est complt
    if(leMot.join('') === displayWord.join('')){
    
       
      infosDisplay.textContent = 'Noice !';

      alrGuessedDisplay.textContent = 'F5 pour une nouvelle game';
      
   }

  } else {

    // Recharge le jeu
    location.reload();
  }

};
// add un compteur lose , taff sur une image , check reponsive , si temps (add des petites features: des pops ups img, anime de win/loose...)