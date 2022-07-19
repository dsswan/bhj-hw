'use strict';

let reveals = Array.from(document.querySelectorAll('.reveal'));

function checkRevealPosition(element) {
    const viewportHeight = window.innerHeight;
    const {top, bottom} = element.getBoundingClientRect();
    console.log(top, bottom, viewportHeight);
    if(top < viewportHeight && bottom < viewportHeight && bottom >0) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
};

reveals.forEach(function(item){
  window.addEventListener('scroll', function() {
    checkRevealPosition(item)
  });
});
