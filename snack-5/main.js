/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

let numbers;
let userNumbers;

numbers = [ ];
 
for (let i = 0; i < 6; i++) {
    userNumbers = parseInt(prompt('inserisci un numero'));
    if ( userNumbers % 2 != 0){
        numbers.push(userNumbers)
    }
     
}
console.log(numbers)