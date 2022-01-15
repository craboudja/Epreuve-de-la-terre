// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// Exemples d’utilisation :
// $> python exo.py 5 2
// résultat: 2
// reste: 1

// $> python exo.py 10 0
// erreur.

// $> python exo.py 3 5
// erreur.

const numerateur = process.argv[2]
const denominateur = process.argv[3]
const reste = numerateur % denominateur
const resultat = Math.floor(numerateur / denominateur)

if (denominateur == 0 || denominateur > numerateur || isNaN(resultat)) {
  console.log('erreur')
} else {
  console.log(`résultat : ${resultat}
reste : ${reste}`)
}
