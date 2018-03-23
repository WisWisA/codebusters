var bowl = document.querySelector('.bowl');

var poop = function() {
  bowl.classList.add('poop');
}

bowl.addEventListener('click', poop);