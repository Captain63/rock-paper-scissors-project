const rockPaperScissors = () => {

    if (window.confirm("Do you wish to proceed?")) {
        let userInput = window.prompt("Enter your choice", "Choice");
        /* Array of choices for computerInput to pull from */
        let choices = ["R", "P", "S"];

        const correctChoice = () => {
            /* Generates random number between 0 and 2 */
            let randomNumber = Math.floor((Math.random() * choices.length));

            /* Passes in randomNumber to access corresponding index placement from array */
            let computerInput = choices[randomNumber];

            /* Object to track wins, losses, ties totals  */
            let tally = {
                wins: 0,
                losses: 0,
                ties: 0
            }

            /* Test logs to confirm RPS Logic is working correctly */
            console.log(userInput);
            console.log(randomNumber);
            console.log(computerInput);

            /* RPS Logic evaluation */
            if (userInput === computerInput) {
                console.log("It's a tie!");
                tally.ties += 1;
            /* UserInput Rock comparisons */
            } else if (userInput === "R" && computerInput === "P") {
                console.log ("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "R" && computerInput === "S") {
                console.log("You win!");
                tally.wins += 1;
            /* UserInput Paper comparisons */
            } else if (userInput === "P" && computerInput === "S") {
                console.log ("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "P" && computerInput === "R") {
                console.log("You win!");
                tally.wins += 1;
            /* UserInput Scissors comparisons */
            } else if (userInput === "S" && computerInput === "R") {
                console.log ("You lose, son.");
                tally.losses += 1;
            } else if (userInput === "S" && computerInput === "P") {
                console.log("You win!");
                tally.wins += 1;
            } 

            window.alert(tally.wins);
            window.alert(tally.losses);
            window.alert(tally.ties);
        }

        if (choices.includes(userInput)) {
            correctChoice();
        } else {
            userInput = window.prompt("Enter a valid choice", "Choice");
            correctChoice();
        }
    }
}

rockPaperScissors();