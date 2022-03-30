/*Snack-8
 Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

//chiedo i numeri
let userNumbers = prompt('Scrivi una cifra a 4 numeri');

console.log(userNumbers)

//eseguo il calcolo 
let numberSum = 0;

for (let i = 0; i < userNumbers.length ; i++){

     numberSum = numberSum + parseInt(userNumbers[i]);
}
console.log(numberSum)