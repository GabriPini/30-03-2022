/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

 */
let result, userNumber;

result = 0;

for (let i = 0; i < 10; i++) {
    userNumber = parseInt(prompt('inserisci un numero'));
    if (isNaN(userNumber)) {
        alert('😱 Devi inserire un numero ')
      }
     
    result = result + userNumber;
}

console.log(result)