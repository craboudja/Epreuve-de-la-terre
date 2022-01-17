// Créez un programme qui affiche le résultat d’une puissance.

// L’exposant ne pourra pas être négatif.

// Exemples d’utilisation :
// $> node exo.js 2 3
// 8

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

const arguments = process.argv
const num1 = arguments[2]
const num2 = arguments[3] 

if (!isNaN(num1) && !isNaN(num2) && arguments.length == 4) {
    console.log(num1 ** num2)
} else {
    console.log("erreur")
}