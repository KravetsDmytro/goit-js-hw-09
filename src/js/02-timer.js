import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

require('flatpickr/dist/themes/confetti.css');

const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', true);

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// const date = new Date();
let timer = null;

let pickDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    pickDate = selectedDates[0];

    if (pickDate<= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

startBtn.addEventListener('click', createTimer);

function createTimer() {
  timer = setInterval(() => {
    startBtn.disabled = true;

    const currentTime = new Date();
    const finishTime = pickDate;
    const difference = finishTime - currentTime;

    const { days, hours, minutes, seconds } = convertMs(difference);
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);

    if (difference <= 1000) {
      console.log(timer);
      clearInterval(timer);
      startBtn.disabled = false;
      return;
    }
  }, 1000);
}

flatpickr('input#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//

// const canFulfill = Math.random() > 0.5;
// console.log(canFulfill)

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// // promise.then(onFulfilled, onRejected);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

// /*
//  * Цепочки промисов (chaining)
//  * Promise.prototype.catch(error)
//  * Promise.prototype.finally()
//  */

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));

// // const deadline = new Date(2023, 4, 10);
// // const today = new Date();
// // console.log(deadline);

// // const delta = deadline - today;
// // const second=Math.floor(delta / 1000) % 60;
// // console.log('second', second)
// // const minutes=Math.floor(delta / 1000 / 60) % 60;
// // console.log('minut' ,minutes)
// // const hours =Math.floor(delta / 1000 / 60 / 60) % 24;
// // console.log('hours', hours)
// // const days=Math.floor(delta / 1000 / 60 / 60 / 24);
// // console.log('days', days)

// // const timer={
// // start(){
// // const startTime=Date.now();

// // setInterval(() => {
// // const currentTime=Date.now();
// // const deltaTime= currentTime - startTime;

// // }, 1000);}
// // }

// // timer.start();

// // getTimeComponents(time) {
// //   const hours = this.pad(
// //     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
// //   );
// //   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// //   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

// //   return { hours, mins, secs };
// // }

// /*
//  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//  */
// // pad(value) {
// //   return String(value).padStart(2, '0');
// // }
