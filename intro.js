let introIndex = 0;
let introTimeout = null;

function runIntro(callbackAfterIntro) {
  introIndex = 0;
  clearTimeout(introTimeout);

  const introData = [
    { img: 'img/AI_미래도시.png', text: '20XX년, 지금 세상에서는 사람의 의식을 데이터화할 수 있다.', delay: 3000 },
    { img: 'img/AI_미래도시.png', text: '모든 사람들은 정기적으로 자신의 의식을 스캔받는다.', delay: 3000 },
    { img: 'img/AI_데이터.png', text: '이 스캔은 정신 질환 예방과 정서 관리 차원에서 이루어지는 필수 절차이다.', delay: 4000 },
    { img: 'img/AI_오류데이터.png', text: '그러나 때때로, 의식이 데이터화 되는 과정에서 오류가 발생하는 사람이 있는데,', delay: 3000 },
    { img: 'img/AI_데이터전송.png', text: '오류가 발생한 사람은 스스로 자신의 의식 데이터를 기관에 전송한다.', delay: 3000 },
    { img: 'img/AI_데이터전송.png', text: '기관에 전송된 오류 데이터는 디버거에 의해 정상화 작업이 진행된다.', delay: 3000 },
    { img: 'img/AI_데이터.png', text: '작업이 완료된 데이터는, 본인에게 안정된 형태로 다시 돌아간다.', delay: 3000 },
    { img: 'img/AI_데이터.png', text: '그리고 당신은, 지금부터 정상화 작업을 시작하게 된다.', delay: 3000 },
  ];

  const image = document.getElementById("intro-image");
  const caption = document.getElementById("intro-caption");
  const container = document.getElementById("intro-container");

  function showNext() {
    const current = introData[introIndex];
    image.src = current.img;
    caption.innerText = current.text;

    introTimeout = setTimeout(() => {
      introIndex++;
      if (introIndex < introData.length) {
        showNext();
      } else {
        container.style.display = "none";
        if (typeof callbackAfterIntro === "function") callbackAfterIntro();
      }
    }, current.delay);
  }

  showNext();
}