/* SNACK 2

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.


*/

const firstWord= prompt('Inserisci una parola');

const secondWord = prompt('Inserisci un altra parola');


if (firstWord.length > secondWord.length){
   console.log(`la seconda parola è piu corta ${secondWord} ${firstWord}`) 

} else if ( firstWord.length < secondWord.length){
   console.log(` la prima parola è piu corta  ${firstWord} ${secondWord}`)

} else {
   console.log(`le parole sono della stessa lunghezza ${firstWord} ${secondWord}`)

}