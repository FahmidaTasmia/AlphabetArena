function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
  if(playerPressed === 'Escape'){
    gameOver();
  }
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //check right key or wrong
  if(playerPressed===expectedAlphabet){
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    const currentLifeScore = getTextElementValueById('current-life');
    const updatedLifeScore = currentLifeScore - 1;
    setTextElementValueById('current-life', updatedLifeScore)

    if(updatedLifeScore===0){
     gameOver();
    }

  }


}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    setBackgroundColorById(alphabet)
}


function play(){
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');
 
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  continueGame();
}

function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
const lastScore = getTextElementValueById('current-score');
setTextElementValueById('last-score',lastScore);
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColorById(currentAlphabet)
}


