function handleKeyboardButtonPress(event){
  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //check right key or wrong
  if(playerPressed===expectedAlphabet){
    console.log('you got a point');
    
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('oops! you loss')
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
