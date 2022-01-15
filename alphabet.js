// Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py
// abcdefghijklmnopqrstuvwxyz
// $>

// Attention : votre programme devra utiliser une boucle.

const alphabetString = 'abcdefghijklmnopqrstuvwxyz '
const alphabet = alphabetString.split()

for (const letter of alphabet) {
  console.log(letter + '\r\n')
}
