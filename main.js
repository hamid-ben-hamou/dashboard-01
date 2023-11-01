// main varables
let menuBar = document.getElementById('menu_bar');
let navElement = document.querySelector('.page .nav');
let navChildrens = document.querySelector('.page .nav').children;
let linkChilds = Array.from(document.querySelector('.nav .links').children); // current has all elemnts inside of links


// create menu hide and show
let x = window.matchMedia("(max-width: 745px)");
if (x.matches) {
	navElement.style.minWidth = '50px';
	navElement.style.height = 'auto';

	// hide some elements
	navChildrens[0].children[0].style.display = 'none';		
	navChildrens[1].style.display = 'none';	
	navChildrens[2].style.display = 'none';	
	navChildrens[3].style.display = 'none';	
}

function toggleMenu() {
	if (x.matches) {
		if (navElement.style.width === '200px') {
			navElement.style.minWidth = '50px';
			navElement.style.width = '0';
			document.querySelector('.dashboard').style.marginLeft = '0';
			navElement.style.height = 'auto';
			navElement.style.position = 'relative';

			// hide some elements
			navChildrens[0].children[0].style.display = 'none';		
			navChildrens[1].style.display = 'none';		
			navChildrens[2].style.display = 'none';	
			navChildrens[3].style.display = 'none';	
		} else if (navElement.style.minWidth === '50px'){
			navElement.style.minWidth = '0';
			navElement.style.width = '200px';
			document.querySelector('.dashboard').style.marginLeft = '50px'
			navElement.style.height = '100%'
			navElement.style.position = 'absolute';

			// Show some elements
			navChildrens[0].children[0].style.display = 'flex';		
			navChildrens[1].style.display = 'block';		
			navChildrens[2].style.display = 'block';	
			navChildrens[3].style.display = 'flex';	
		}

	}
}

navChildrens[0].children[1].addEventListener("click", toggleMenu);

linkChilds.forEach((ele) => {
	// function to show and hide links

	//  labels 
	ele.children[0].addEventListener("click", toggleLinks);

	function toggleLinks() {
		// ul
		if (ele.children[1].style.height === '0px') {
			ele.children[1].style.height = '100%';
			ele.children[1].style.padding = '20px 0';

 			// rotate the angel
			ele.children[0].children[1].style.transform = 'rotate(180deg)';
		} else {
			ele.children[1].style.height = '0px';
			// remove padding onchlick on label if height not == 0
			ele.children[1].style.padding = '0px';
			// element i inside of label
			ele.children[0].children[1].style.transform = 'rotate(360deg)';
		}

	}
	// add padding if height not = 0px
	if (ele.children[1].style.height !== '0px') {
		ele.children[1].style.padding = '20px 0';
	}

});

// horizontal menu

// button show and hide menu
let btnMenu = document.getElementById('h-menu');

// element that will be showen and hidden
let menuTow = document.querySelector('.horizontal-menu .start');

// function toggle menu tow
let xtow = window.matchMedia("(max-width: 1095px)");
if (xtow.matches) {
	menuTow.style.display = 'none';
	menuTow.style.opacity = '0';
}

function toggleMenuTow() {
	if (menuTow.style.display === 'none') {
		menuTow.style.display = 'flex';
		menuTow.style.opacity = '1';
	} else {
		menuTow.style.display = 'none';
		menuTow.style.opacity = '0';
	}
}

btnMenu.addEventListener("click", toggleMenuTow);

// create intraction for postes

// object color and numbers

// all buttons
let intraction = Array.from (document.querySelectorAll('.intraction'));


intraction.forEach((e) => {
	// loop in allElements
	let allEle = Array.from(e.children);

	allEle.forEach((e) => {
		// all buttons
		let btns = e.children[0];

		// all values of buttons
		let numPeop = e.children[1];

		// on click on btn chenge color
		// function toggle color
		function toggleColor(event) {
			if (getComputedStyle(btns).getPropertyValue('color') === "rgb(156, 149, 207)") {
				btns.style.color = "#c6697f";
				numPeop.innerHTML++;
			} else {
				btns.style.color = "rgb(156, 149, 207)";
				numPeop.innerHTML--;
			}
		}

		btns.addEventListener("click", toggleColor);
	});

});