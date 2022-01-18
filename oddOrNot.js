// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair

// $> ruby exo.rb 5
// impair

// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.

// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.

// Attention : gérez aussi les entiers négatifs.
const args = process.argv
const num = args[2]

console.log(!isNaN(num) && num > 0 && args.length == 3 ? (num % 2 === 0 ? 'pair' : 'impair') : "Tu ne me la mettras pas à l'envers") 