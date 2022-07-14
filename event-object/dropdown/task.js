'use strict';

const languages = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownButton = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const activeClass = 'dropdown__list_active';

languages.forEach(function(e){
	e.addEventListener('click', onClickLanguage);
});

dropdownButton.addEventListener('click', onClickDropdown);

function onClickLanguage(){
	event.preventDefault();
	dropdownButton.textContent = (this.textContent);
	dropdownList.classList.toggle(activeClass);
}

function onClickDropdown(){
	dropdownList.classList.toggle(activeClass);
}
