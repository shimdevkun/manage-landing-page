let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

let overlay = document.querySelector('.overlay');
let dropdown = document.querySelector('.dropdown');

let slideshow = document.querySelector('.slideshow');
let sliderLinks = document.querySelectorAll('.slider__link');

// Events
menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

window.addEventListener('DOMMouseScroll', disableScroll);
window.addEventListener('keydown', disableScroll);

sliderLinks.forEach((s) => s.addEventListener('click', displaySlide));

// Funcitons
function openMenu() {
	close.style.display = 'block';
	menu.style.display = 'none';
	dropdown.style.display = 'block';
	overlay.style.display = 'block';
}

function closeMenu() {
	close.style.display = 'none';
	menu.style.display = 'block';
	dropdown.style.display = 'none';
	overlay.style.display = 'none';
}

function disableScroll(e) {
	if (overlay.style.display === 'block') {
		e.preventDefault();
	}
}

function displaySlide(e) {
	let target = e.target;
    let index = target.dataset.index;
    
    let active = document.querySelector('.slider__link.active');
    let oldIndex = active.dataset.index;

    if (index !== oldIndex) {
        active.classList.remove('active');
        target.classList.add('active');

        let testimonial = slideshow.children[index];
        let oldTestimonial = slideshow.children[oldIndex];
        
        testimonial.style.display = 'block';
        oldTestimonial.style.display = 'none';
    }
}
