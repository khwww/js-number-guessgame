let computerNum = 0;
let playbutton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playbutton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
    // console.log("UP!");
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
    // console.log("DOWN!");
  } else {
    resultArea.textContent = "정답입니다!";
    // console.log("정답입니다~");
  }
}

pickRandomNum();
