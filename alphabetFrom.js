// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz
// $>

// Attention : votre programme devra utiliser une boucle.

const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
const alphabet = alphabetString.split('')

const alphabetFrom = letter => {
  const processArgv = process.argv.length === 3
  const isItNan = (isNaN(parseInt(letter)))
  letter = letter.toLowerCase()
  // on vérifie qu'il n'y a qu'un argument, que ce n'est pas un chiffre
  // et que mis en minuscule il fait partie du tableau
  if (processArgv && isItNan && alphabet.includes(letter)) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === letter) {
        newAlphabet = alphabet.slice(alphabet.indexOf(letter))
        console.log(newAlphabet.join(''))
      }
    }
  } else {
    console.log('Arg must be only one letter')
  }
}

alphabetFrom(process.argv[2])
