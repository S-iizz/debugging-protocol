let currentScriptIndex = 0;
let correctionScore = 0;
let lineIndex = 0;
let isChoicePhase = false;
let scriptData = null;
let introFinished = false;

const scripts = [
  'scripts/script1.js',
  'scripts/script2.js',
  'scripts/script3.js',
  'scripts/script4.js',
  'scripts/script5.js',
  'scripts/script6.js'
];

function setBackground(url) {
  document.getElementById("background").style.backgroundImage = `url('${url}')`;
}

function fadeIn(callback) {
  const fade = document.getElementById("fade");
  fade.style.opacity = 1;
  fade.style.pointerEvents = 'auto';
  setTimeout(() => {
    if (callback) callback();
    fade.style.opacity = 0;
    fade.style.pointerEvents = 'none';
  }, 1000);
}

function showLine(line, callback) {
  const npcBox = document.querySelector(".npc-box");
  const playerBox = document.querySelector(".player-box");
  const systemBox = document.querySelector(".system-box");
  npcBox.style.display = "none";
  playerBox.style.display = "none";
  systemBox.style.display = "none";

  setBackground(line.background || "");

  let box;
  let textElement;

  if (line.speaker === "npc") {
    box = npcBox;
    textElement = box.querySelector(".npc-text");
  } else if (line.speaker === "player") {
    box = playerBox;
    textElement = box.querySelector(".player-text");
  } else if (line.speaker === "system") {
    box = systemBox;
    textElement = document.getElementById("system-text");
  }

  textElement.textContent = line.text;
  box.style.display = "block";

  if (line.autoNext) {
    setTimeout(() => {
      box.style.display = "none";
      callback();
    }, line.delay || 1500);
  } else {
    document.getElementById("next-button").onclick = () => {
      box.style.display = "none";
      callback();
    };
    document.getElementById("next-button").style.display = "block";
  }
}

function showChoice(choices) {
  const choiceBox = document.getElementById("choice-box");
  const [choice1, choice2] = [document.getElementById("choice1"), document.getElementById("choice2")];
  isChoicePhase = true;
  choiceBox.style.display = "flex";

  choice1.textContent = choices[0].text;
  choice2.textContent = choices[1].text;

  choice1.onclick = () => handleChoice(choices[0]);
  choice2.onclick = () => handleChoice(choices[1]);
}

function handleChoice(choice) {
  correctionScore += choice.score;
  document.getElementById("choice-box").style.display = "none";



  const choicesToRecord = [
    "원래 그렇게 사회성 없이 대답하세요?",
    "이상한 얘기 좀 그만하세요. 그 정도의 컨셉질이면 듣는 사람 입장에서는 짜증나니까요.",
    "그냥 기분만 나쁜데요? 짜증나니까 하지 마세요.",
    "투명하고 싶다는 거예요, 불투명하고 싶다는 거예요? 말도 안 되는 컨셉질 할 거면 말이라도 똑바로 하죠?",
    "대답을 참 이상하게 하네요? 전부터 계속 그러는 것 같은데 원래도 그딴 식으로 대화해요?",
    "그런 식이라면 그냥 안 계시는 게 낫지 않겠어요?",

  ];

  if (choicesToRecord.includes(choice.text)) {
    const logs = JSON.parse(localStorage.getItem("playerLogs") || "[]");
    if (!logs.includes(choice.text)) {
      logs.push(choice.text);
      localStorage.setItem("playerLogs", JSON.stringify(logs));
    }
  }


  let idx = 0;
  function showNextNPCLine() {
    if (idx < choice.npc.lines.length) {
      showLine(choice.npc.lines[idx++], showNextNPCLine);
    } else {
      document.getElementById("next-button").onclick = () => {
        currentScriptIndex++;
        fadeIn(loadNextScript);
      };
      document.getElementById("next-button").style.display = "block";
    }
  }
  showNextNPCLine();
}

function loadScript(index) {
  return new Promise((resolve) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = scripts[index];
    scriptTag.onload = () => resolve(window[`script${index + 1}`]);
    document.body.appendChild(scriptTag);
  });
}

function loadNextScript() {
  if (currentScriptIndex >= scripts.length) {
    playEnding();
    return;
  }
  loadScript(currentScriptIndex).then((data) => {
    scriptData = data;
    lineIndex = 0;
    isChoicePhase = false;
    showNextLine();
  });
}

function showNextLine() {
  const lines = scriptData.lines;
  if (lineIndex < lines.length) {
    showLine(lines[lineIndex++], showNextLine);
  } else if (scriptData.choices) {
    showChoice(scriptData.choices);
  } else {
    document.getElementById("next-button").onclick = () => {
      currentScriptIndex++;
      fadeIn(loadNextScript);
    };
    document.getElementById("next-button").style.display = "block";
  }
}

function playEnding() {
  const isBad = correctionScore >= 10;
  const endingPath = isBad ? 'scripts/badEnding.js' : 'scripts/goodEnding.js';
  const endingKey = isBad ? 'ending_bad' : 'ending_good';

  const endingContainer = document.getElementById("ending-container");
  const endingImage = document.getElementById("ending-image");
  const endingCaption = document.getElementById("ending-caption");

  const script = document.createElement("script");
  script.src = endingPath;
  script.onload = () => {
    const data = window[endingKey];
    let i = 0;

    function showEndingLine() {
      if (i < data.lines.length) {
        endingImage.src = data.lines[i].img;
        endingCaption.innerText = data.lines[i].text;
        endingContainer.style.display = "flex";

        setTimeout(() => {
          i++;
          showEndingLine();
        }, data.lines[i].delay);
      } else {
        if (isBad) {
          if (window.badBGM) {
            window.badBGM.pause();
            window.badBGM.currentTime = 0;
          }

          setTimeout(() => {
            window.location.href = "credits.html";
          }, 1000);
        } else {
          setTimeout(() => {
            endingContainer.style.display = "none";
            document.getElementById("start-screen").style.display = "flex";
          }, 1000);
        }
      }
    }

    showEndingLine();
  };

  document.body.appendChild(script);
}

window.onload = () => {
  const introBgm = document.getElementById("intro-bgm");

  document.addEventListener("click", () => {
    if (introBgm && introBgm.paused) {
      introBgm.play().catch(err => console.warn("BGM 재생 실패:", err));
    }
  }, { once: true });

  document.getElementById("popup-button").onclick = () => {
    const popup = document.getElementById("popup-image");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 800);
  };

  const params = new URLSearchParams(window.location.search);
  const from = params.get("from");

  if (from === "falling") {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";
  } else {
    runIntro(() => {
      introFinished = true;
      document.getElementById("intro-container").style.display = "none";
      document.getElementById("start-screen").style.display = "flex";
    });
  }

  document.getElementById("start-button").addEventListener("click", () => {
    if (introBgm && !introBgm.paused) {
      introBgm.pause();
      introBgm.currentTime = 0;
    }

    localStorage.removeItem("playerLogs");

    document.getElementById("start-screen").style.display = "none";
    loadNextScript();
  });
};
