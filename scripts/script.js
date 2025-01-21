function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
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
  showElementById('play-ground');
  continueGame();
}
