
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
			this.navpane.classList.remove('navhide');
			this.navpane.classList.add('full-screen');
		}
		else {
			this.closed = true;
			this.button.classList.remove('open');
			this.button.classList.add('closed');
			this.navpane.classList.remove('full-screen');
			this.navpane.classList.add('navhide');
		}
	}
}

new Navigation(document.querySelector(".navigation"));


// Tab controls

class TabLink {
	constructor(element) {
		// remember who I am
    	this.linkElement = element;
    	// get a list of all tab links
    	this.tabLinkList = document.querySelectorAll('.svc-tab-link');
	    // Get my tab data attribute
    	this.data = this.linkElement.dataset.tab;
	    // Find the tab item element that corresponds to my link
    	this.tabItem = document.querySelector(`.svc-tab-item[data-tab="${this.data}"]`);
    	// convert the tab element into a TabItem object
    	this.tabItem = new TabItem(this.tabItem);
	    // Add a click event listener
	    this.linkElement.addEventListener('click', () => this.select());
	}

	select() {
    	// unselect all of the tab links
    	this.tabLinkList.forEach(link => link.classList.remove('svc-tab-link-selected'));
    	// now select just this tab link
	    this.linkElement.classList.add('svc-tab-link-selected');
	    // Call the select method on the item associated with this link
    	this.tabItem.select();
	}
}


class TabItem {
  constructor(element) {
  	// remember who I am
    this.element = element;
    // get a list of all tab items
    this.tabItemList = document.querySelectorAll('.svc-tab-item');
  }

  select() {
  	// unselect all the tab items
    this.tabItemList.forEach(item => item.classList.remove('svc-tab-item-selected'));
    // now select only this particular tab item
    this.element.classList.add('svc-tab-item-selected');
  }
}


// for each service tab link, create a TabLink object
document.querySelectorAll('.svc-tab-link')
        .forEach(element => new TabLink(element));

