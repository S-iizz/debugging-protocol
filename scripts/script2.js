window.script2 = {
  lines: [
    {
      speaker: "player",
      text: "(...이 사람이 다음 오류 데이터인가 보네.)",
      background: "img/NPC2_D1_1.png"
    },
    {
      speaker: "player",
      text: "안녕하세요. 오늘 하루는 어땠어요?",
      background: "img/NPC2_D1_1.png"
    },
    {
      speaker: "npc",
      text: "…",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "npc",
      text: "......!",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "npc",
      text: "지, 지금...저한테 말씀하신 거예요?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "player",
      text: "(...? 여기 본인 말고 누가 있다고...)",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "system",
      text: "해당 데이터는 이미 정상 상태입니다.",
      background: "img/NPC2_ERROR_1.png",
      autoNext: true,
      delay: 1100
    },
    {
      speaker: "player",
      text: "당연하죠. 여긴 저랑 당신만 있잖아요?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "npc",
      text: "...네? 그럼...제가 보인다는 말씀이세요?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "player",
      text: "당연하죠?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "npc",
      text: "...그럴...리가 없을 텐데요? 왜냐면...왜냐면 저는 투명 인간이거든요. 투명 인간은 남한테 안 보이잖아요?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "player",
      text: "(...투명 인간? 이런 사람은 또 처음 보는데.)",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "player",
      text: "무슨 소리를 하는 건지 모르겠네요. 왜 그렇게 생각하세요?",
      background: "img/NPC2_D1_3.png"
    },
    {
      speaker: "npc",
      text: "그야...그야 저는 존재하지 않으니까요...? 혹시...지금도 제가 움직이는 게, 보이시는 건가요...?",
      background: "img/NPC2_D1_3.png"
    },
  ],
  choices: [
    {
      text: "네. 물론이죠. 지금 저랑 잘 얘기하고 계시잖아요?",
      score: 0,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D1_3.png" },
          { speaker: "npc", text: "...정말요?", background: "img/NPC2_D1_1.png" },
          { speaker: "npc", text: "어, 네...네...감...사합니다?", background: "img/NPC2_D1_3.png" }
        ]
      }
    },
    {
      text: "이상한 얘기 좀 그만하세요. 그 정도의 컨셉질이면 듣는 사람 입장에서는 짜증나니까요.",
      score: 10,
      npc: {
        lines: [
          { speaker: "npc", text: "...", background: "img/NPC2_D1_3.png" },
          { speaker: "npc", text: "...!", background: "img/NPC2_D1_3.png" },
          { speaker: "npc", text: "...죄송해요...죄송해요......다, 다시 투명 모드로 돌아가, 돌아갈게요...죄송해요...", background: "img/NPC2_D1_4.png" }
        ]
      }
    }
  ]
};