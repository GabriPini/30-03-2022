/*Snack-7 Stampa le potenze di 2 fino a 1000. */

//imposto il 2 come numero al quale eseguire l'operazione
let number = 2;

 // eseguo il calcolo e stampo in console i risulatati
let exponent;
for (let i = 0; i < 1000; i++) {
      exponent = i
      console.log( Math.pow(number, exponent));
    }