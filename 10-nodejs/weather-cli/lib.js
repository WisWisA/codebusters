

var shout = function(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

var temp = {
  shout: shout,
  whisper: whisper
}

module.exports = temp