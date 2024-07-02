let computerNum = 0;
let playbutton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let answerArea = document.getElementById("answer-area");
let history = [];

playbutton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
  answerArea.textContent = `정답: ${computerNum}`;
}

function play() {
  let userValue = parseInt(userInput.value); // 숫자로 변환

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이의 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
  } else {
    resultArea.textContent = "정답입니다!";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playbutton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기에 표시됩니다";
  chances = 3;
  gameOver = false;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  history = [];
  playbutton.disabled = false;
}

pickRandomNum();
