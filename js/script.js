/*
    CONSEGNA
    1)Chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero
    2)Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
        
        //CONDIZIONE
        2a)il prezzo del biglietto è definito in base ai km (0.21 € al km)
        2b)va applicato uno sconto del 20% per i minorenni
        2c)va applicato uno sconto del 40% per gli over 65.

    3)L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
        

toFixed()

*/

// 1)chiedere all'utente il numero di km che vuole percorrere e l'età del passeggero

let userDataVoyage = prompt ('Quanti Chilometri vuoi percorrere?');

let userDataAge = prompt ('Quanti anni hai?');


//converto le stringhe in numeri
userDataVoyage = parseInt(userDataVoyage);
userDataAge = parseInt(userDataAge);

console.log( userDataVoyage , userDataAge);

document.getElementById("userdate").innerHTML=userDataAge + userDataVoyage

//DA FARE: controllare che l'input sia un numero con isNaN

if(isNaN(userDataAge)){
    alert('Devi inserire un numero');
}

// 2)Calcolare il prezzo totale del viaggio in base a queste info

const pricePerKm = 0.21 ;

const priceTotal = userDataVoyage * pricePerKm ;

let discount; 

if(c1){b1}
if(c2){b2}

if(c1){b1}
else if(c2){b2}


if( userDataAge < 18){
    discount = priceTotal * 0.2;
    priceTotal -= discount; // <==> priceTotal = priceTotal - discount
}else if( userDataAge > 65){
    discount = priceTotal * 0.4;
    priceTotal -= discount; // <==> priceTotal = priceTotal - discount
}



console.log(priceTotal)