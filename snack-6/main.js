/*Snack-6 Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

//faccio scegliere un numero all utente 
let number = parseInt(prompt('inserisci un numero'));

 // eseguo il calcolo e stampo in console i risulatati
for (let i = 1; i <= number; i++) {
      
    let numbersCubes = parseInt(Math.pow(i ,3))
      console.log(numbersCubes);
    }
