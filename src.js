window.onload = () => {
  const letterButtons = document.querySelectorAll('.letter-button');
  const whiteKeys = document.querySelectorAll('.white-key');
  const feedbackSpan = document.querySelector('#feedback-span');
  const currentScoreSpan = document.querySelector('#current-score-span');
  const highScoreSpan = document.querySelector('#high-score-span');
  
  let currentScore = 0;
  let highScore = 0;
  let highlightedKey = whiteKeys[0];
  
  console.log('in');
  
  letterButtons.forEach((letterButton) => {
    letterButton.addEventListener('click', () => {
      if (letterButton.value === highlightedKey.getAttribute('data-piano-key')) {
        feedbackSpan.textContent = 'Correct';
        feedbackSpan.style.color = 'green';
        currentScore++;
        poseQuestion();
      } else {
        highlightedKey.style.fill = 'red';
        feedbackSpan.textContent = 'Incorrect';
        feedbackSpan.style.color = 'red';
        currentScore = 0;
      }
      if(currentScore > highScore){
        highScore = currentScore;
      }
      currentScoreSpan.textContent = currentScore;
      highScoreSpan.textContent = highScore;
    })
  });
  
  const poseQuestion = () => {
    highlightedKey.style.fill = 'white';
    const randomNumber = Math.floor(Math.random() * whiteKeys.length); 
    highlightedKey = whiteKeys[randomNumber];
    highlightedKey.style.fill = 'lime';
  }
  
  poseQuestion();
  
};



