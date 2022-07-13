document.getElementById('modal_main').classList.add('modal_active');

let modalCloseButtons = document.querySelectorAll('.modal__close'),
  modalSuccess = document.getElementById('modal_success'),
  currentActiveModal;
const modalCloseButtonsLength = modalCloseButtons.length;

for (i = 0; i < modalCloseButtonsLength; i += 1) {
  modalCloseButtons[i].onclick = function () {
    checkClasses(this);
  };
}

function checkClasses(element) {
  currentActiveModal = element.closest('.modal');
  if (element.classList.contains('show-success')) {
    currentActiveModal.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
  } else {
    currentActiveModal.classList.remove('modal_active');
  }
}