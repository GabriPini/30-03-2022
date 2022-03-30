
//snack-9
/* Calcola la somma e la media dei primi 10 numeri. */

let numberSum = 0;

//eseguo l'operazione , ottengo i primi 10 numeri da 1 a 10 e poi li sommo
for (let i = 1; i <= 10; i++){

     numberSum += i;
}
/* eseguo la media */
let numberAverage = numberSum / 10;

console.log('La somma è ' + numberSum);
console.log('La media dei numeri è ' + numberAverage);
