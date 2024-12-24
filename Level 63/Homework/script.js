

function little_game(){
    play1 = prompt("enter your first move: ");
    play2 = prompt("enter your second move: ");
    if (play1 == "rock" && play2 == "scissors"){
        document.write("rock wins");
        }
    else if (play1 == "rock" && play2 == "paper"){
        document.write("paper wins");
        }
    else if (play1 == "scissors" && play2 == "rock"){
        document.write("rock wins");
        }
    else if (play1 == "scissors" && play2 == "paper"){
        document.write("scissors wins");
        }
    else if (play1 == "paper" && play2 == "rock"){
        document.write("pape wins");
        }
    else if (play1 == "paper" && play2 == "scissors"){
        document.write("scissors wins");
        }


}
// little_game()




