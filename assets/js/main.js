/* SNACK 1  
 L’utente inserisce due numeri in successione, con due prompt. 
 Il software stampa il maggiore. */

 const firstNumber= parseInt(prompt('Inserisci il primo numero'));
 if (isNaN(firstNumber)) {
   alert('😱 Devi inserire un numero')
 }
 //chiedere all'utente età del passeggero.
 const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
 if (isNaN(secondNumber)) {
   alert('😱 Devi inserire un numero p')
 }

 if (firstNumber > secondNumber){
    // user wins
    console.log(`il primo numero da te inserito è il maggiore  ${firstNumber}`) 

} else if ( firstNumber < secondNumber){
    // user lose
    console.log(`il secondo numero da te inserito è il maggiore  ${secondNumber}`)

} else {
    // It's a draw
    console.log('sono due numeri uguali')

}
