// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

// Exemples d’utilisation :
// $> python exo.py “Hello world!”
// 12

// $> python exo.py
// erreur.

// $> python exo.py “Bonjour” “Aurevoir”
// erreur.

// $> python exo.py 10
// erreur.

const arg = process.argv
const myString = arg[2]
const myStringLength = myString.length
const isItNan = (isNaN(parseInt(myString)))
const err = 'Please enter only one argument as a string.'

console.log(arg.length === 3 && isItNan ? `"${myString}" length = ${myStringLength}` : err)
