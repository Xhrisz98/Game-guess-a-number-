'strict mode';

let check = document.querySelector('.check');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let highScore = document.querySelector('.hightScore');
let again = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let maxScore = 20;
let topScore = 0;
console.log(randomNumber);

check.addEventListener('click', () => {
  let number = Number(document.querySelector('.input-number').value);

  // When no a number
  if (!number) {
    result.textContent = `No a number ⛔`;
    // When number is equal to randon number
  } else if (number === randomNumber) {
    if (maxScore > topScore) {
      document.querySelector('body').style.backgroundColor = `#5fb72f`;
      document.querySelector('.secretNumber').textContent = number;
      result.textContent = ' 🥳 Correct number!';
      highScore.textContent = `🥇 HightScore: ${maxScore}`;
      topScore = maxScore;
    } else {
      document.querySelector('body').style.backgroundColor = `#5fb72f`;
      document.querySelector('.secretNumber').textContent = number;
      result.textContent = ' 🥳 Correct number!';
      highScore.textContent = `🥇 HightScore: ${topScore}`;
    }
  } else if (number !== randomNumber) {
    if (maxScore > 0) {
      maxScore--;
      result.textContent =
        number > randomNumber ? '📈 Too high ' : '📉 Too low';
      score.textContent = `Score: ${maxScore}`;
    } else {
      result.textContent = `🥲 Lose game`;
    }
  }
});

again.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  maxScore = 20;
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.input-number').value = '';
  score.textContent = `Score: ${maxScore}`;
  result.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#2c2626';
  console.log(randomNumber);
});
/*function displayMessage(msg) {
  result.textContent = msg;
}

check.addEventListener('click', () => {
  let number = Number(document.querySelector('.input-number').value);
  // When there is no input
  if (!number) {
    displayMessage(`⛔ No number`);
    //when player wins
  } else if (number === randomNumber) {
    if (maxScore > topScore) {
      displayMessage(`👌 Correct Number`);
      document.querySelector('.body').style.backgroundColor = '#117d44';
      document.querySelector('.secretNumber').innerHTML = randomNumber;
      score.textContent = `💯 Score: ${maxScore}`;
      highScore.textContent = `🥇 HightScore: ${maxScore}`;
      topScore = maxScore;
    } else {
      displayMessage(`👌 Correct Number`);
      document.querySelector('.body').style.backgroundColor = '#117d44';
      document.querySelector('.secretNumber').innerHTML = randomNumber;
      score.textContent = `💯 Score: ${maxScore}`;
      highScore.textContent = `🥇 HightScore: ${topScore}`;
      topScore;
    }
    //When guess is too high
  } else if (number !== randomNumber) {
    if (maxScore > 0) {
      displayMessage(number > randomNumber ? `📈 Too high` : ` 📉 Too low`);
      maxScore--;
      score.textContent = `💯 Score: ${maxScore}`;
    } else {
      displayMessage(`You lose the game`);
      score.textContent = `💯 Score: 0`;
    }
  }

  console.log(typeof number, typeof randomNumber);
});

again.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  maxScore = 20;
  document.querySelector('.body').style.backgroundColor = '#2c2626';
  displayMessage(`Start guessing...`);
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.input-number').value = '';
  score.textContent = `💯 Score: 20`;
  console.log(topScore, randomNumber);
  randomNumber;
});
*/
