// Palidroma:

// Chiedere all’utente di inserire una parola
var word = prompt("Write a word!");
console.log("Let's check if your word: " + ""+ word + ""+ " is a palindrome.");


// Creare una funzione per capire se la parola inserita è palindroma
function palindrome (wordToCheck) {
                var wordToCheck = wordToCheck.toLowerCase();                                //changing the word to lower case
                console.log(wordToCheck);

                var input = wordToCheck.split("");
                console.log(input);                                                         //using the method split() to save the letters of the word into an array input;

                var output = input.reverse().join("");                                      //using the reverse and join method to save the reverse traversing of the array input into a new variable output;   
                console.log(output);












}