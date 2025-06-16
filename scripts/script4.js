window.script4 = {
  lines: [
    {
      speaker: "npc",
      text: "있잖아요, 아무리 생각해도 저는 투명 인간이 맞는 것 같아요.",
      background: "img/NPC2_D2_1.png"
    },
    {
      speaker: "npc",
      text: "투명한 저를 당신이 어떻게 보고 있는 건지는 모르겠지만요.",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "player",
      text: "( 또 이 소리네... )",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "player",
      text: "...무슨 말씀이세요?",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "npc",
      text: "...마, 말 그대로예요... 아무도 저를 못 보고, 저도 존재하지 않...으니까요...",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "npc",
      text: "...혹시 화나신 건 아니죠?",
      background: "img/NPC2_D2_4.png"
    },
    {
      speaker: "player",
      text: "( ...그냥 대화 주제를 돌려야겠다. )",
      background: "img/NPC2_D2_4.png"
    },
    {
      speaker: "player",
      text: "음...오늘은 어제보다 목소리가 또렷하신 것 같아요.",
      background: "img/NPC2_D2_4.png"
    },
    {
      speaker: "npc",
      text: "...정말요? 어...신기하네요.",
      background: "img/NPC2_D2_1.png"
    },
    {
      speaker: "npc",
      text: "제 목소리가 또렷하다니...원래는 제 말소리도, 발소리도 전부 안 들릴텐데요...",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "player",
      text: "저는 잘 들리는데요.",
      background: "img/NPC2_D2_3.png"
    },
    {
      speaker: "npc",
      text: "...진짜요? ......신기하기도 하고, 기쁜 것...같기도 하네요.",
      background: "img/NPC2_D2_1.png"
    },
    {
      speaker: "npc",
      text: "그런데...어...제 목소리가 들려도 되는 건 맞죠? 제가...불투명해져도 되는건가 싶어서요...",
      background: "img/NPC2_D2_3.png"
    },
  ],
  choices: [
    {
      text: "들려도 되죠. 들리는 게 당연하고요.",
      score: 0,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D2_3.png" },
          { speaker: "npc", text: "...!", background: "img/NPC2_D2_3.png" },
          { speaker: "npc", text: "...그럴 리가 없긴 한데......그래도...감사해요.", background: "img/NPC2_D2_2.png" }
        ]
      }
    },
    {
      text: "투명하고 싶다는 거예요, 불투명하고 싶다는 거예요? 말도 안 되는 컨셉질 할 거면 말이라도 똑바로 하죠?",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D2_3.png" },
          { speaker: "npc", text: "...!", background: "img/NPC2_D2_3.png" },
          { speaker: "npc", text: "...죄송해요...저는 그냥...투명하고 싶...아, 아니 그건 아닌데...", background: "img/NPC2_D2_3.png" },
          { speaker: "npc", text: "아...아니에요. 죄송해요...", background: "img/NPC2_D2_4.png" }
        ]
      }
    }
  ]
};