function getComputerChoice (){
    const choice = ['rock' , 'paper', 'scissor'];
    const num = Math.round(Math.random() * 2);
    return choice[num];
}


function playing(computerSelection, playerSelection)
{
    if(computerSelection == playerSelection)
    return "draw"

    if(computerSelection == 'rock' && playerSelection == 'paper')
    {
        return "You Win! Paper beats Rock";
    }
    if(computerSelection == 'rock' && playerSelection == 'scissor')
    {
        return "You Lose! Rock beats Scissor";
    }
    if(computerSelection == 'paper' && playerSelection == 'rock')
    {
        return "You Lose! Paper beats Rock";
    }
    if(computerSelection == 'paper' && playerSelection == 'scissor')
    {
        return "You Win! Scissor beats Paper";
    }
    if(computerSelection == 'scissor' && playerSelection == 'paper')
    {
        return "You Lose! Scissor beats Paper";
    }
    if(computerSelection == 'scissor' && playerSelection == 'rock')
    {
        return "You Win! Rock beats Scissor";
    }
}

let cnt_player = 0,
cnt_computer = 0;

function game()
{
    for(let i =0; i<5; i++)
    {
        const playerSelection = (prompt('enter your choice (rock/paper/scissor)'));
        // playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playing(computerSelection, playerSelection);
        console.log(result);
        
        if(result == 'draw')
        {
            i--;
            continue;
        }

        if(result[4] == 'W')
            cnt_player++;
        else cnt_computer++;
    }
}

game();
if(cnt_computer>cnt_player)
    console.log('You Lose the Game :(((');
else
    console.log("yay!! you Won the Game :)))");