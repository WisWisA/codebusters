// document.querySelector
// document.querySelectorAll
// textContent - sandwiches <h1>textContent</h1>
// value - toast <input type="text">

// tip: input gives you strings
// tip: script runs straight away as you load

var num1Input = document.querySelector('.num1');
var num2Input = document.querySelector('.num2');
var calcBtn = document.querySelector('.calc-btn');
var resultSpan = document.querySelector('.result');
var stopBtn = document.querySelector('.stop');
// functions are just values/things/objects
//  event, function

var bam = function() {
  // get the value from first input
  // get the value from second input
  // add it
  var total = Number(num1Input.value) + Number(num2Input.value);
  console.log('total:', total);
  // set text context of span to result
  resultSpan.textContent = total;
}

var t0;
var t1;

var timer = function() {
  t0 = performance.now();
  // console.log(t0);
}

var stop = function() {
  resultSpan.textContent = (performance.now() - t0) / 1000;
}

calcBtn.addEventListener('click', timer);
stopBtn.addEventListener('click', stop);


function countDown(seconds) {
  var id = setInterval(function() {
    console.log(seconds);
    seconds--;
    if (seconds < 0) clearInterval(id);
  }, 1000);
}