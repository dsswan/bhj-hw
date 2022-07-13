let menuItems = Array.from(document.querySelectorAll('.menu__item')),
  closestSubHref;

menuItems.forEach(function (item, i, arr) {
  checkSub(item);
});

function checkSub(element) {
  if (element.querySelector('.menu_sub')) {
    closestSubHref = element.querySelector('.menu__link');
    closestSubHref.onclick = function () {
      element.querySelector('.menu_sub').classList.toggle('menu_active');
      return false;
    };
  }
  return;
}
