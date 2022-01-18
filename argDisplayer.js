// Créez un programme qui affiche les args qu’il reçoit ligne par ligne, peu importe le nombre d’args.


// Exemples d’utilisation :
// $> ruby exo.rb je suis solide !
// je
// suis
// solide
// !

const args = process.argv

for (let i = 2; i < args.length; i++) {
    console.log(args[i])
}




