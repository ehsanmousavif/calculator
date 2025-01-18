const clock = document.querySelector(".clock");

function timeHandler() {
  let date = new Date();
  let dateTypes = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };


  const s = dateTypes.seconds < 10 ? `0${dateTypes.seconds}` : `${dateTypes.seconds}`;
  const m = dateTypes.minutes < 10 ? `0${dateTypes.minutes}` : `${dateTypes.minutes}`;
  const H = dateTypes.hours < 10 ? `0${dateTypes.hours}` : `${dateTypes.hours}`;
  const time = `${H}: ${m}: ${s}`;
  clock.innerText = time;
}
setInterval(timeHandler, 1000);
