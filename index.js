const realLog = console.log;

const today = new Date();

const isChristmasSeason = today.getMonth() === 11 && today.getDate() <= 25;

const emojis = ['🎄', '🍪', '🌟', '⛄', '🎁'];
const emoji = emojis[today.getDate() % emojis.length];

const yuleLog = function() {
  if (arguments.length > 0 && typeof arguments[0] === 'string') {
    arguments[0] = `${emoji}: ${arguments[0]}`;
  }

  realLog(...arguments);
}

if (isChristmasSeason) {
  console.log = yuleLog;
}

exports.log = yuleLog;
