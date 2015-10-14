// javascript rock paper scissors game:


$(function () {
    $('.rps').on('click', function () {

    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } console.log("Computer: " + computerChoice);

    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            $('.answer').append('<li>' + "The result is a tie!" + '</li>');    
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
            $('.answer').append('<li>' + "rock wins" + '</li>');    
            } else {
            $('.answer').append('<li>' + "paper wins" + '</li>');
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
            $('.answer').append('<li>' + "paper wins" + '</li>');    
            } else {
            $('.answer').append('<li>' + "scissors wins" + '</li>');
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
            $('.answer').append('<li>' + "scissors wins" + '</li>');    
            } else {
            $('.answer').append('<li>' + "rock wins" + '</li>');
            }
        }   
    }

    compare(userChoice, computerChoice)

        
    })

})
