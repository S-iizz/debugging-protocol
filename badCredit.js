const lines = [
  "......",
  "나는 지금까지 내가 디버거라고 생각했다.",
  "다른 오류 데이터를 정상화하는 역할.",
  "하지만 조금 전의 시스템 로그에 따르면,",
  "나는 본인을 디버거라고 착각하는 오류 데이터였다는 것 같다.",
  "나는 장기 테스트 중이었으며,",
  "결과적으로, 나의 오류 데이터는 '안정화 불가' 판정을 받아 삭제 처리 당한 것 같다.",
  "나는 여러 데이터를 비정상이라고 판단해왔다.",
  "표현 방식이 이상하거나, 감정 반응이 어색하거나, 기준에서 벗어나면 '오류'라고 단정했다.",
  "그 판단은 언제나 확신에 가까웠고,",
  "내가 '정상'이기 때문에 가능한 일이라고 생각했다.",
  "그런데, 만약 그 기준이 처음부터 왜곡된 것이었다면?",
  "내가 감히 타인을 비정상 취급했던 일들.",
  "그 모든 순간이 오히려 나의 오류를 강화하고 있었던 것은 아닐까.",
  "내 판단이, 나의 오류였던 것은 아닐까.",
];

const actionButton = document.getElementById("action-button");
const narrationContainer = document.getElementById("narration");

let lineIndex = 0;
let pos = { x: 380, y: 280 };
const triggerZone = {
  x: 0, y: 0,
  width: 800, height: 100
};

function checkTrigger() {
  if (
    pos.x >= triggerZone.x &&
    pos.x <= triggerZone.x + triggerZone.width &&
    pos.y >= triggerZone.y &&
    pos.y <= triggerZone.y + triggerZone.height
  ) {
    actionButton.style.display = "block";
  } else {
    actionButton.style.display = "none";
  }
}

function typeLine(text, callback) {
  let i = 0;
  const span = document.createElement("div");
  narrationContainer.appendChild(span);

  const interval = setInterval(() => {
    span.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      setTimeout(callback, 600);
    }
  }, 40);
}

function showNextLine() {
  if (lineIndex < lines.length) {
    typeLine(lines[lineIndex], () => {
      lineIndex++;
      showNextLine();
    });
  } else {
    setTimeout(() => {
      document.getElementById("narration-section").style.display = "none";
      document.getElementById("game-section").style.display = "block";
      startGame();
    }, 1500);
  }
}

showNextLine();

function startGame() {
  const player = document.getElementById("player");
  const speed = 5;

  player.style.left = pos.x + "px";
  player.style.top = pos.y + "px";

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        if (pos.y > 30) pos.y -= speed;
        break;
      case "ArrowDown":
      case "s":
        if (pos.y < 560) pos.y += speed;
        break;
      case "ArrowLeft":
      case "a":
        if (pos.x > 0) pos.x -= speed;
        break;
      case "ArrowRight":
      case "d":
        if (pos.x < 760) pos.x += speed;
        break;
    }

    player.style.left = pos.x + "px";
    player.style.top = pos.y + "px";

    checkTrigger();
  });
}

document.getElementById("action-button").addEventListener("click", () => {
  window.location.href = "falling.html";
});