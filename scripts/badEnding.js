const badBGM = new Audio("sounds/badEnding-bgm.mp3");
badBGM.loop = true;
badBGM.volume = 0.8;

badBGM.play().catch(err => {
  console.warn("BGM autoplay blocked:", err);
});

window.ending_bad = {
  lines: [
    {
      img: "img/AI_오류데이터.png",
      text: "정상화 작업은 끝내 완수되지 못했다.",
      delay: 2000
    },
    {
      img: "img/AI_오류데이터.png",
      text: "데이터는 오류를 남긴 채, 본인에게 되돌아갔다.",
      delay: 3000
    },
    {
      img: "img/AI_가면.png",
      text: "모든 게 연기처럼 느껴졌던 그는, 사실 감정을 느끼지 못하는 인간이었다고 한다.",
      delay: 4000
    },
    {
      img: "img/AI_표정.png",
      text: "감정을 느끼지 못하지만 사회에 어울리고 싶었던 그는 감정을 외우고, 상황에 맞춰 연기했다.",
      delay: 4000
    },
    {
      img: "img/AI_표정.png",
      text: "웃어야 할 타이밍, 우는 표정, 말투의 높낮이까지, 반응을 베끼고 행동을 흉내 내며 정상처럼 보이려 애썼다.",
      delay: 4000
    },
    {
      img: "img/AI_가면.png",
      text: "겉모습만 괜찮으면, 아무도 이상하다고 하지 않으리라 믿었다.",
      delay: 3000
    },
    {
      img: "img/AI_깨진가면.png",
      text: "하지만 정상처럼 살아가는 것과, 정상인 척 연기하는 삶은 전혀 달랐다.",
      delay: 3000
    },
    {
      img: "img/AI_깨진가면.png",
      text: "시간이 지날수록 그는 무너졌다.",
      delay: 2000
    },
    {
      img: "img/AI_깨진가면.png",
      text: "웃음도, 공감도, 관계도 전부 계산이었다. 그 모든 연기는 스스로를 갉아먹었다.",
      delay: 3000
    },
    {
      img: "img/AI_피.png",
      text: "그는 욕실에서 손목을 그었다.",
      delay: 2000
    },
    {
      img: "img/AI_피.png",
      text: "피로 번진 바닥 위, 그는 얇게 입꼬리를 올린 채 발견되었다고 한다.",
      delay: 4000
    },
    {
      img: "img/AI_표정.png",
      text: "기계적으로 복사했던 웃음.",
      delay: 2000
    },
    {
      img: "img/AI_가면.png",
      text: "그는 마지막까지, 감정을 가진 사람처럼 보이기 위해 연기를 멈추지 않았다.",
      delay: 4000
    },
    {
      img: "img/화면전환용.png",
      text: "",
      delay: 1000
    },
    {
      img: "img/AI_손가락질.png",
      text: "그녀는 오랜 무직 생활과 반복된 실패 속에 조용히 사라진 사람이었다.",
      delay: 4000
    },
    {
      img: "img/AI_손가락질.png",
      text: "사람들의 시선은 점점 냉담해졌고,",
      delay: 3000
    },
    {
      img: "img/AI_닫힌문.png",
      text: "언젠가부터 그녀는 자신이 투명한 존재라고 믿기 시작했다.",
      delay: 3000
    },
    {
      img: "img/AI_닫힌문.png",
      text: "존재하지 않기를 바랐고, 아무도 자신을 기억하지 않기를 바랐다. 그것이 그녀가 살아남는 유일한 방법이었다.",
      delay: 3000
    },
    {
      img: "img/AI_자물쇠문.png",
      text: "불안정한 오류 데이터는 이 믿음을 더 굳혔다.",
      delay: 3000
    },
    {
      img: "img/AI_자물쇠문.png",
      text: "그녀는 자신이 정말 '없는 사람', '존재할 필요 없는 사람'이라고 확신하게 되었다.",
      delay: 4000
    },
    {
      img: "img/AI_밧줄.png",
      text: "며칠 뒤, 그녀는 원룸 천장에 목을 맨 채 발견되었다고 한다.",
      delay: 3000
    },
    {
      img: "img/AI_밧줄.png",
      text: "발견까지는 며칠이 걸렸다. 방 안은 조용했고, 창문은 닫혀 있었으며, 연락할 사람도 없었다.",
      delay: 4000
    },
    {
      img: "img/AI_밧줄.png",
      text: "죽은 줄도 몰랐고, 찾는 사람도 없었다. 악취가 퍼진 후에야 누군가 신고했다.",
      delay: 4000
    },
    {
      img: "img/AI_밧줄.png",
      text: "문을 열었을 때, 방 안에는 한 줄의 흔적도 남아있지 않았다.",
      delay: 3000
    },
    {
      img: "img/AI_밧줄.png",
      text: "가구는 가지런했고, 책상 위엔 아무 메모도 없었다. 존재했다는 증거조차 남기지 않은 채, 그녀는 사라졌다.",
      delay: 4000
    },
  ]
};