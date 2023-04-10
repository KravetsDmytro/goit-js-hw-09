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
refs.stopBtn.disabled = true;


refs.startBtn.addEventListener('click', evt => {
refs.startBtn.disabled=true;
refs.stopBtn.disabled=false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', evt => {
  clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
});
