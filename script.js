const display = document.querySelector('#display');
const lapList = document.querySelector('#lapList');
let milliseconds = 0;
let timer;

const startWatch = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    display.innerHTML = 
      ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
  }, 10);
};

const pauseWatch = () => {
  clearInterval(timer);
};

const resetWatch = () => {
  clearInterval(timer);
  milliseconds = 0;
  display.innerHTML = '00:00:00:00';
  lapList.innerHTML = '';
};

const recordLap = () => {
  let lapTime = display.innerHTML;
  let li = document.createElement('li');
  li.innerText = lapTime;
  lapList.appendChild(li);
};

document.addEventListener('click', (e) => {
  const element = e.target;
  if (element.id === 'start') startWatch();
  if (element.id === 'pause') pauseWatch();
  if (element.id === 'reset') resetWatch();
  if (element.id === 'lap') recordLap();
});
