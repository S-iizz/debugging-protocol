window.script5 = {
  lines: [
    {
      speaker: "player",
      text: "( 3일차...오늘이 마지막 대화가 되겠군. )",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "player",
      text: "오늘이 마지막 대화네요.",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "npc",
      text: "그러네요.",
      background: "img/NPC1_D3_2.png"
    },
    {
      speaker: "player",
      text: "( ...오류를 대체 어떻게 고쳐야 하는 거지? )",
      background: "img/NPC1_D3_2.png"
    },
    {
      speaker: "player",
      text: "( 그냥...충격 받을 만한 사실을 확 대놓고 말해볼까... )",
      background: "img/NPC1_D3_2.png"
    },
    {
      speaker: "player",
      text: "...솔직히, 제가 정상화 작업을 진행하고 있긴 하지만요. 당신은 너무 비정상이에요. 알고 있나요?",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "player",
      text: "불쾌감이 느껴질 정도니까요.",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "npc",
      text: "...",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "npc",
      text: "......",
      background: "img/NPC1_D3_3.png"
    },
    {
      speaker: "npc",
      text: "...그 말 전에도 한 적 있던 것 같은데, 아닌가.",
      background: "img/NPC1_ERROR_1.png",
      autoNext: true,
      delay: 1100
    },
    {
      speaker: "npc",
      text: "...모르겠네요.",
      background: "img/NPC1_D3_3.png"
    },
    {
      speaker: "npc",
      text: "......정말 모르겠어요.",
      background: "img/NPC1_D3_3.png"
    },
    {
      speaker: "npc",
      text: "...완벽하게 모방했을텐데...",
      background: "img/NPC1_D3_3.png"
    },
    {
      speaker: "player",
      text: "( ...혼자 뭐라고 계속 중얼거리는 거야? )",
      background: "img/NPC1_D3_3.png"
    },
    {
      speaker: "npc",
      text: "제가 비정상처럼 보였다니, 정말 안타깝네요. 유감이에요. 불쾌감을 느끼셨을 디버거 님께도 죄송하고요.",
      background: "img/NPC1_D3_1.png"
    },
    {
      speaker: "player",
      text: "( ...이게 대답이야? 대답이 뭐 이래? )",
      background: "img/NPC1_D3_1.png"
    },
  ],
  choices: [
    {
      text: "...지금 혹시 연기를 하는 건가요?",
      score: 0,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC1_D3_3.png" },
          { speaker: "npc", text: "...그럼요.", background: "img/NPC1_D3_3.png" },
          { speaker: "npc", text: "제 대답으로 인해 당신은 편안해졌나요? 어떤가요?", background: "img/NPC1_D3_1.png" },
        ]
      }
    },
    {
      text: "대답을 참 이상하게 하네요? 전부터 계속 그러는 것 같은데 원래도 그딴 식으로 대화해요?",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC1_D3_1.png" },
          { speaker: "npc", text: "......", background: "img/NPC1_D3_3.png" },
          { speaker: "npc", text: "......내가 또 이상해 보였나 보네요.", background: "img/NPC1_D3_3.png" },
          { speaker: "npc", text: "미안해요.", background: "img/NPC1_D3_1.png" },
        ]
      }
    }
  ]
};