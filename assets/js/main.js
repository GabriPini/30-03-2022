/* SNACK 1  
 L’utente inserisce due numeri in successione, con due prompt. 
 Il software stampa il maggiore. */

/*  const firstNumber= parseInt(prompt('Inserisci il primo numero'));
 if (isNaN(firstNumber)) {
   alert('😱 Devi inserire un numero')
 }

 const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
 if (isNaN(secondNumber)) {
   alert('😱 Devi inserire un numero ')
 }

 if (firstNumber > secondNumber){
   
    console.log(`il primo numero da te inserito è il maggiore  ${firstNumber}`) 

} else if ( firstNumber < secondNumber){
    
    console.log(`il secondo numero da te inserito è il maggiore  ${secondNumber}`)

} else {
    
    console.log('sono due numeri uguali')

}
 */

/* SNACK 2

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.


*/

/* const firstWord= prompt('Inserisci una parola');

const secondWord = prompt('Inserisci un altra parola');


if (firstWord.length > secondWord.length){
   console.log(`la seconda parola è piu corta ${secondWord} ${firstWord}`) 

} else if ( firstWord.length < secondWord.length){
   console.log(` la prima parola è piu corta  ${firstWord} ${secondWord}`)

} else {
   console.log(`le parole sono della stessa lunghezza ${firstWord} ${secondWord}`)

} */

/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

 */
/* let result, userNumber;

result = 0;

for (let i = 0; i < 10; i++) {
    userNumber = parseInt(prompt('inserisci un numero'));
    if (isNaN(userNumber)) {
        alert('😱 Devi inserire un numero ')
      }
     
    result = result + userNumber;
}

console.log(result)
 */



/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */
/* 
let invitedGuests;
let guestName;
let check = false


invitedGuests = ["Gabriele", "Fabio", "Gianluca", "Davide", "Dragan", ];
 
guestName = prompt("Dichiara il tuo nome") 

   
    for (var i = 0; i < invitedGuests.length ; i++ ){
        if (  guestName == invitedGuests[i]){
            check = true   
        }
    }
    if ( check ){
        // If true
        console.log('Puoi entrare , sei sulla lista') 
    } else {
        // If false
        console.log('Sparisci non sei invitato')
    }
     
    */


    /* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

/* let numbers;
let userNumbers;


numbers = [ ];
 
for (let i = 0; i < 6; i++) {
    userNumbers = parseInt(prompt('inserisci un numero'));
    if ( userNumbers % 2 != 0){
        numbers.push(userNumbers)
    }
     
}
console.log(numbers)
 */
