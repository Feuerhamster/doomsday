const doomsday = new Date("2028-01-01T12:00:00+00:00");
const date = document.querySelector("#date");
const clock = document.querySelector("#clock");

const boop = new Audio("boop.mp3");
const beep = new Audio("beep.mp3");

function counter() {
    let t = countdown(new Date(), doomsday);
    t.hours = t.hours < 10 ? `0${t.hours}` : t.hours;
    t.minutes = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
    t.seconds = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

    clock.textContent = `${t.hours}:${t.minutes}:${t.seconds}`;
    date.innerHTML = `
        ${t.years} <span>years</span> 
        ${t.months} <span>months</span>  
        ${t.days} <span>days</span>  
    `;

    t.seconds % 2 ? boop.play() : beep.play();
}

setInterval(counter, 1000);
counter();