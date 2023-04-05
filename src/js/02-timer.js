import '../css/common.css';

import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker=document.querySelector('#datetime-picker')



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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




















// const deadline = new Date(2023, 4, 10);
// const today = new Date();
// console.log(deadline);

// const delta = deadline - today;
// const second=Math.floor(delta / 1000) % 60;
// console.log('second', second)
// const minutes=Math.floor(delta / 1000 / 60) % 60;
// console.log('minut' ,minutes)
// const hours =Math.floor(delta / 1000 / 60 / 60) % 24;
// console.log('hours', hours)
// const days=Math.floor(delta / 1000 / 60 / 60 / 24);
// console.log('days', days)




// const timer={
// start(){
// const startTime=Date.now();

// setInterval(() => {
// const currentTime=Date.now();
// const deltaTime= currentTime - startTime;

// }, 1000);}
// }

// timer.start();

// getTimeComponents(time) {
//   const hours = this.pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
// pad(value) {
//   return String(value).padStart(2, '0');
// }
