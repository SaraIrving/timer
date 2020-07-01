const input = process.argv.slice(2);

let alarms = [];
for (let item of input) {
  if (parseInt(item)  && parseInt(item) > 0) {
    alarms.push(item);
  }
};

const alarmClock = () => {
  for (let alarm of alarms) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, alarm * 1000);
  }
};

alarmClock();
