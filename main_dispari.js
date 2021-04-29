//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

// var choice = "even";
var choice1 = prompt("Write; 'even' or 'odd' to play");

if(choice1 === "even" || choice1 === "odd"){
console.log("Let's Play!. ");
document.write("Let's Play!. ");
}else{
    console.log('Invalid entry. Write "odd" or "even".');
    document.write('Invalid entry. Write "odd" or "even".');
}