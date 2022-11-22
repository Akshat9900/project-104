// random value generated
var y = Math.floor(Math.random() * 10 + 1);
playername = localStorage.getItem("player_name")
// counting the number of guesses
var guess = 1;

function Submit() {
    var x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!!" + playername + " YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
        guess = 1;
    } else if (x > y) /* if guessed number is greater than actual number*/ {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}

// made for correct Guess


// function for number guessed by user     