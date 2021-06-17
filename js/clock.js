// **************
// clock section function
// ****************
const clockSec = document.querySelector(".clock-sec");
const clockDay = clockSec.querySelector("h1.clock-day");
const clockTime = clockSec.querySelector("h1.clock-time");
// console.log(clockDay, clockTime);

// get day and time of clock section
function getTime(){
    const date = new Date;
    // console.dir(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const nDate = date.getDate();
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = week[date.getDay()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // console.log(year, month, nDate, day, hours, minutes, seconds);
    clockDay.innerText = `${year}.${month}.${nDate}.${day}`
    clockTime.innerText = `${
        hours < 10? `0${hours}` : hours} : ${
            minutes < 10? `0${minutes}` : minutes} : ${
                seconds <10? `0${seconds}` : seconds
            }`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();