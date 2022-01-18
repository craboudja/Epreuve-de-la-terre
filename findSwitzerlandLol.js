// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

// Exemples d’utilisation :
// $> ruby exo.rb 11 40 34
// 34

// $> ruby exo.rb 2 1 3
// 2

// $> ruby exo.rb 2 2 2
// erreur.

const args = process.argv

let chiffres = [args[2], args[3], args[4]].sort()
const unique = [...new Set(chiffres)]
console.log(args.length === 5 && unique.length === 3 ? chiffres[1] : 'Erreur, ma poule! Essaie encore')