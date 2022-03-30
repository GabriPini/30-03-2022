/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

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
    