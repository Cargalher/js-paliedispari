//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

function generateRandomNumber () {
    return Math.floor(Math.random() * 5) + 1;
    console.log(generateRandomNumber());
};

    //checking generateRandomNumber() function;
    console.log(generateRandomNumber());

function isItOddOrEven (sum) {
    if (sum % 2 === 0) {
        console.log("even")
        return solution = "even";
    } else {
        console.log("odd")
        return solution = "odd";
    }
}
    //testing the isItOddOrEven() function on a number;
    //isItOddOrEven(15);



// var choice = "even";
var choice1 = prompt("Write; 'even' or 'odd' to play");

if(choice1 === "even" || choice1 === "odd"){

    var choice = Number (prompt("Insert a number between 1 and 5"));

    if (choice >=1 && choice<=5) {

        console.log("Let's Play!. ");                                       //When user writes even or odd ---> "let's Play!" will be printed.
        document.write("Let's Play!. ");
    
        var computerNumber = generateRandomNumber();
        document.write(' The computer number is ' + computerNumber + " ." );

        var sum = choice + computerNumber;
        console.log(sum);
        document.write(' The sum of your number and the computer number is ' + sum + "." );

        
        if(isItOddOrEven(sum) === choice1) {
            console.log("Right guess. You won!");
            document.write("Right guess. You won!");
        } else {
            console.log("No no. You Lost!");
            document.write(" No no. You Lost!");
        }



    } else {
        console.log("You enter an invalid number! Choose a number between 1 and 5.");
    document.write("You enter an invalid number! Choose a number between 1 and 5.");
    }

    

}else{
    console.log('Invalid entry. Write "odd" or "even".');           //When user writes a diferent word  ---> 'Invalid entry. Write "odd" or "even".' will be printed.
    document.write('Invalid entry. Write "odd" or "even".');
}