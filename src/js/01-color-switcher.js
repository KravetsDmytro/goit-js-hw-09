const body = document.querySelector('body');
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerId = null;

refs.startBtn.addEventListener('click', evt => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    if (evt.target) {
      refs.startBtn.disabled = true;
      refs.stopBtn.disabled = false;
    }
  }, 1000);
});

refs.stopBtn.addEventListener('click', evt => {
  clearInterval(timerId);

  if (evt.target) {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
});
