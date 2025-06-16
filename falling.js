window.onload = () => {
  const bgm = document.getElementById("falling-bgm");
  bgm.volume = 0.7;

  bgm.play().catch(err => {
    console.warn("Falling BGM autoplay blocked:", err);
  });

  setTimeout(() => {
    bgm.pause();
    bgm.currentTime = 0;

    window.location.href = "index.html?from=falling";
  }, 20000);
};