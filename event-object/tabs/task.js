'use strict';

const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach(function(e){
	e.addEventListener('click', clickOnTub);
});

function clickOnTub(){
		document.querySelector('.tab_active').classList.toggle('tab_active');
		document.querySelector('.tab__content_active').classList.toggle('tab__content_active');
		this.classList.toggle('tab_active');
		tabContent[tab.indexOf(this)].classList.toggle('tab__content_active');
}
