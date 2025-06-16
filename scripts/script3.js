window.script3 = {
  lines: [
    {
      speaker: "player",
      text: "( 2일차네... )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "( 음...오늘은 웃으며 인사해볼까. )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "안녕하세요?",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "npc",
      text: "안녕하세요.",
      background: "img/NPC1_D2_2.png"
    },
    {
      speaker: "npc",
      text: "...오늘 하루는 어땠어요?",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "( 음? 오류 데이터가 나한테 질문을 다 하네. )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "그냥 무난한 것 같네요.",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "npc",
      text: "기분은 어땠나요?",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "( ...뭐지? )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "system",
      text: "디버깅 대상 : [ ERROR: NULL SUBJECT ????]",
      background: "img/NPC1_ERROR_2.png",
      autoNext: true,
      delay: 1100
    },
    {
      speaker: "player",
      text: "( ...설마 어제 내가 한 말을 똑같이 따라하고 있는건가? 왜? )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "( ...날 따라하고 있는 거라고 생각하니 뭔가 기분이 나쁜데. )",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "player",
      text: "지금 일부러 따라하시는 거예요?",
      background: "img/NPC1_D2_1.png"
    },
    {
      speaker: "npc",
      text: "네. 상대를 따라하면 유대감이 든다고 하던데요.",
      background: "img/NPC1_D2_3.png"
    },
    {
      speaker: "npc",
      text: "아닌가요?",
      background: "img/NPC1_D2_1.png"
    },
  ],
  choices: [
    {
      text: "그냥 기분만 나쁜데요? 짜증나니까 하지 마세요.",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC1_D2_1.png" },
          { speaker: "npc", text: "......", background: "img/NPC1_D2_1.png" },
          { speaker: "npc", text: "...그렇군요. 이상하네요...", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "...", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "...네.", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "죄송해요.", background: "img/NPC1_D2_1.png" },
        ]
      }
    },
    {
      text: "하하, 그렇군요. 몰랐네요. 어떤가요? 이 대화로 유대감이 생긴 것 같나요?",
      score: 0,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC1_D2_1.png" },
          { speaker: "npc", text: "......", background: "img/NPC1_D2_1.png" },
          { speaker: "npc", text: "......", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "...유대감......", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "음...", background: "img/NPC1_D2_3.png" },
          { speaker: "npc", text: "네, 그럼요.", background: "img/NPC1_D2_2.png" }
        ]
      }
    }
  ]
};