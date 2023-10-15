const ruleClose = document.querySelector('.rule_close')
const ruleButton =  document.querySelector('.rule_button')
const ruleContent = document.querySelector('.rules')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorButton = document.querySelector('#scissor')
const nextButton = document.querySelector('#next_button')
const hurraypage = document.querySelector('.hurray-page')
const playerpick = document.querySelector('#player_pick')
const comppick = document.querySelector('#comp_pick')
const postround = document.querySelector('.post_round')
const replaybutton = document.querySelector('.replay_button')
const gamecontainer = document.querySelector('.game_container')
const postrounddecision = document.querySelector('.decided')
const postrounddecisionp = document.querySelector('.decision p')
const titlecontainer = document.querySelector('.title-container')
let playerscore = document.querySelector('#player_score')
let compscore = document.querySelector('#comp_score')
let rulecontainer = document.querySelector('.rule_container')
let resetbutton = document.querySelector('.restart')


function updatePlayerScore(newScore) {
    playerscore.innerText = newScore;
    localStorage.setItem('playerScore', newScore);
  }
  

  function updateComputerScore(newScore) {
    compscore.innerText = newScore;
    localStorage.setItem('computerScore', newScore);
  }


function initGame() {
    
    const storedPlayerScore = localStorage.getItem('playerScore');
    const storedComputerScore = localStorage.getItem('computerScore');
  
    if (storedPlayerScore) {
      playerscore.innerText = storedPlayerScore;
    } else {
      playerscore.innerText = '0';
    }
  
    if (storedComputerScore) {
      compscore.innerText = storedComputerScore;
    } else {
      compscore.innerText = '0';
    }
  }
initGame()


let playerChose = 0
let computerchose = 0

resetbutton.addEventListener('click', () =>{
    titlecontainer.style.display = 'flex'
    gamecontainer.style.display = 'flex'
    localStorage.removeItem('playerScore');
    localStorage.removeItem('computerScore');
    hurraypage.style.display = 'none'
    nextButton.style.display = 'none'
})

replaybutton.addEventListener('click',()=>{
    gamecontainer.style.display = 'flex'
    postround.style.display = 'none'
    nextButton.style.display = 'none'
    
    
})

ruleButton.addEventListener('click', () =>{
    ruleContent.style.display = 'block';
})

ruleClose.addEventListener('click' , () =>{
    ruleContent.style.display = 'none';
})

nextButton.addEventListener('click', () => {
    hurraypage.style.display = 'block'
    postround.style.display = 'none'
    titlecontainer.style.display = "none"
})

function playerchoice() {rockButton.addEventListener('click', () =>{
    playerChose = 1
    computerChoice();
    playGame();
    
})

paperButton.addEventListener('click', () =>{
    playerChose = 2
    computerChoice();
    playGame()
})

scissorButton.addEventListener('click', () =>{
    playerChose = 3
    computerChoice();
    playGame()

})}

function computerChoice() {
	computerchose = Math.floor(Math.random() * 3 + 1);
	
}

function compare(playerChoice, computerChoice) {
	switch(playerChose) {
		case 1:
			switch(computerchose) {
				case 1:
                    
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    comppick.classList.remove("green-bg")
                    playerpick.classList.remove("green-bg")
                    playerpick.src = "./resources/rock.svg"
                    comppick.src = "./resources/rock.svg"
                    postrounddecision.innerText = "TIE UP"
                    postrounddecisionp.style.display = 'none'
                    nextButton.style.display = 'none'
                    
                    break;
				case 2:
                 
					gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/rock.svg"
                    comppick.src = "./resources/paper.svg"
                    postrounddecision.innerText = "YOU LOST"
                    postrounddecisionp.style.display = 'FLEX'
                    comppick.classList.add("green-bg")
                    playerpick.classList.remove("green-bg")
                    compscore.innerText = parseInt(compscore.innerText) + 1
                    nextButton.style.display = 'none'
                    
                    break;
				case 3:
                    
					
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/rock.svg"
                    comppick.src = "./resources/scissor.svg"
                    postrounddecision.innerText = "YOU WON"
                    postrounddecisionp.style.display = 'FLEX'
                    playerpick.classList.add("green-bg")
                    comppick.classList.remove("green-bg")
                    playerscore.innerText = parseInt(playerscore.innerText) + 1
                    nextButton.style.display = 'block'
                    
                    break;
			}
			break;
		case 2:
			switch(computerchose) {
				case 1:
					
                    console.log(playerChose,computerchose)
					console.log("You won.") ;
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/paper.svg"
                    comppick.src = "./resources/rock.svg"
                    postrounddecision.innerText = "YOU WON"
                    postrounddecisionp.style.display = 'FLEX'
                    playerpick.classList.add("green-bg")
                    comppick.classList.remove("green-bg")
                    playerscore.innerText = parseInt(playerscore.innerText) + 1
                    nextButton.style.display = 'block'
                    
                    break;
				case 2:
					console.log(playerChose,computerchose)
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    comppick.classList.remove("green-bg")
                    playerpick.classList.remove("green-bg")
                    playerpick.src = "./resources/paper.svg"
                    comppick.src = "./resources/paper.svg"
                    postrounddecision.innerText = "TIE UP"
                    postrounddecisionp.style.display = 'none'
                    nextButton.style.display = 'none'
                    
                    break;
				case 3:
					
                    console.log(playerChose,computerchose)
					gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/paper.svg"
                    comppick.src = "./resources/scissor.svg"
                    postrounddecision.innerText = "YOU LOST"
                    postrounddecisionp.style.display = 'FLEX'
                    comppick.classList.add("green-bg")
                    playerpick.classList.remove("green-bg")
                    compscore.innerText = parseInt(compscore.innerText) + 1
                    nextButton.style.display = 'none'
            
                    break;
			}
			break;
		case 3:
			switch(computerchose) {
				case 1:
					
                    console.log(playerChose,computerchose)
					gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/scissor.svg"
                    comppick.src = "./resources/rock.svg"
                    postrounddecision.innerText = "YOU LOST"
                    postrounddecisionp.style.display = 'FLEX'
                    comppick.classList.add("green-bg")
                    playerpick.classList.remove("green-bg")
                    compscore.innerText = parseInt(compscore.innerText) + 1
                    nextButton.style.display = 'none'
                    
                    break;
				case 2:
					
                    console.log(playerChose,computerchose)
					console.log("You won.") ;
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    playerpick.src = "./resources/scissor.svg"
                    comppick.src = "./resources/paper.svg"
                    postrounddecision.innerText = "YOU WON"
                    postrounddecisionp.style.display = 'FLEX'
                    playerpick.classList.add("green-bg")
                    comppick.classList.remove("green-bg")
                    playerscore.innerText = parseInt(playerscore.innerText) + 1
                    nextButton.style.display = 'block'
                   
                    break;
				case 3:
					console.log(playerChose,computerchose)
                    gamecontainer.style.display = 'none'
					postround.style.display = 'flex'
                    comppick.classList.remove("green-bg")
                    playerpick.classList.remove("green-bg")
                    playerpick.src = "./resources/scissor.svg"
                    comppick.src = "./resources/scissor.svg"
                    postrounddecision.innerText = "TIE UP"
                    postrounddecisionp.style.display = 'none'
                    nextButton.style.display = 'none'
                   
                    break;
			}
			break;
	}
    localStorage.setItem('playerScore', playerscore.innerText);
  localStorage.setItem('computerScore', compscore.innerText); 
}

function playGame() {
    if (playerChose !== 0 && computerchose !== 0) {
        compare(playerChose, computerchose);
    }
}

playerchoice()
computerChoice()
// console.log(compare(playerchoice,computerChoice))