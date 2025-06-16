window.script6 = {
  lines: [
    {
      speaker: "player",
      text: "벌써 오늘이 마지막으로 대화하는 날이네요.",
      background: "img/NPC2_D3_1.png"
    },
    {
      speaker: "player",
      text: "그리고 당신은... 오늘도 뭔가 참...조용하시네요.",
      background: "img/NPC2_D3_1.png"
    },
    {
      speaker: "npc",
      text: "...그 말 전에도 하지 않았어요?",
      background: "img/NPC2_ERROR_2.png",
      autoNext: true,
      delay: 1100
    },
    {
      speaker: "npc",
      text: "...조용...네...그게 익숙해서요. 투명 인간은 원래...안 보이죠. 그리고 저는 안 보이기도 하지만, 소리도 나지 않아요.",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "npc",
      text: "소리는 흔적을 남기니까요... 저는 투명 인간이니 흔적이 남지 않는 게 당연해요...그러니까, 저는...저는 흔적이 없어요. 투명 인간이니까요.",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "npc",
      text: "그게 당연한 거죠.",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "player",
      text: "( 흔적? 이 사람은 정말 끝까지 이해할 수 없는 소리만 하네... )",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "player",
      text: "흔적이요? 무슨 뜻인지 잘 모르겠어요. 흔적을 남기고 싶지 않다는 건가요?",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "player",
      text: "음? 그런데...사람은 원래 다 흔적을 남기지 않나요?",
      background: "img/NPC2_D3_3.png"
    },
    {
      speaker: "npc",
      text: "...아...그냥...흔적이 없으면 깔끔하잖아요. 사, 사실 저는 될 수 있으면 흔적을 남기지 않으려는 편이에요...",
      background: "img/NPC2_D3_1.png"
    },
    {
      speaker: "npc",
      text: "...네, 정말...투명 인간 처럼요... 제가 지나간 자리에...아무것도 없으면 그걸로 다행이라고 생각해요...",
      background: "img/NPC2_D3_3.png"
    },
  ],
  choices: [
    {
      text: "그런 식이라면 그냥 안 계시는 게 낫지 않겠어요?",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D3_3.png" },
          { speaker: "npc", text: "...", background: "img/NPC2_D3_3.png" },
          { speaker: "npc", text: "...네. 맞아요.", background: "img/NPC2_D3_3.png" },
          { speaker: "npc", text: "보통은 그렇게들 말씀하세요.", background: "img/NPC2_D3_3.png" }
        ]
      }
    },
    {
      text: "글쎄요, 사람인 이상 흔적이 남는 건 당연하다고 생각하는데요.",
      score: 0,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D3_3.png" },
          { speaker: "npc", text: "...", background: "img/NPC2_D3_3.png" },
          { speaker: "npc", text: "...왜인지는 모르겠지만...뭔가 기쁘네요...감사해요.", background: "img/NPC2_D3_2.png" },
        ]
      }
    }
  ]
};