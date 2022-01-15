// Créez un programme qui affiche son nom de fichier.

// Exemples d’utilisation :
// $> node exo.js
// exo.js

// $> node crevette.js
// crevette.js

console.log(process.argv[1].slice(-14))
