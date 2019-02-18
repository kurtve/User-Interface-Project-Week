
"use strict";

// Navigation controls

class Navigation {
	constructor(element) {
		this.navigation = element;
		this.button = element.querySelector('.navicon');
		this.navpane = element.querySelector('.navpane');
		this.closed = true;
		this.button.addEventListener('click', (event) => this.clickHandler(event));
	}

	clickHandler(event) {
		event.stopPropagation();
		if (this.closed) {
			this.closed = false;
			this.button.classList.remove('closed');
			this.button.classList.add('open');
			this.navpane.classList.remove('hide');
			this.navpane.classList.add('full-screen');
		}
		else {
			this.closed = true;
			this.button.classList.remove('open');
			this.button.classList.add('closed');
			this.navpane.classList.remove('full-screen');
			this.navpane.classList.add('hide');
		}
	}
}

new Navigation(document.querySelector(".navigation"));

