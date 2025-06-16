window.script1 = {
  lines: [
    {
      speaker: "player",
      text: "(이 사람이 내가 맡을 첫 오류 데이터인가보다. 먼저 말을 걸어볼까...)",
      background: "img/NPC1_D1_1.png"
    },
    {
      speaker: "player",
      text: "안녕하세요. 오늘 하루는 어땠어요?",
      background: "img/NPC1_D1_1.png"
    },
    {
      speaker: "npc",
      text: "아, 네. 규칙적인 하루였어요. 아침에는 조용했고, 점심에는... 조용했고, 저녁도 조용했어요.",
      background: "img/NPC1_D1_1.png"
    },
    {
      speaker: "npc",
      text: "...괜찮은 하루였죠.",
      background: "img/NPC1_D1_1.png",
    },
    {
      speaker: "player",
      text: "그럼 기분은 어땠나요?",
      background: "img/NPC1_D1_1.png"
    },
    {
      speaker: "npc",
      text: "...",
      background: "img/NPC1_D1_1.png"
    },
    {
      speaker: "npc",
      text: "......",
      background: "img/NPC1_D1_3.png"
    },
    {
      speaker: "npc",
      text: "기분...음...",
      background: "img/NPC1_D1_3.png"
    },
    {
      speaker: "npc",
      text: "...네. 보통은 좋았다고 말하죠.",
      background: "img/NPC1_D1_3.png"
    },
    {
      speaker: "npc",
      text: "괜찮아요. 좋았어요. 하하!",
      background: "img/NPC1_D1_2.png"
    },
    {
      speaker: "player",
      text: "(...대답을 특이하게 하네.)",
      background: "img/NPC1_D1_2.png"
    }
  ],
  choices: [
    {
      text: "그렇게 말하시니까...살짝 기계 같아요. 연기하는 것 같기도 하고요.",
      score: 0,
      npc: {
        lines: [
          {
            speaker: "npc",
            text: "...자주 들었던 말이네요. 하지만 저는 대화를 잘 따라가는 편이에요. 괜찮지 않나요?",
            background: "img/NPC1_D1_2.png"
          }
        ]
      }
    },
    {
      text: "원래 그렇게 사회성 없이 대답하세요?",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC1_D1_1.png" },
          { speaker: "npc", text: "......", background: "img/NPC1_D1_3.png" },
          { speaker: "npc", text: "내가 이상해 보였나 보네요.", background: "img/NPC1_D1_1.png" }
        ]
      }
    }
  ]
};