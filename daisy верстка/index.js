//тут все слайды
let slides = document.querySelectorAll(".slider__item");
// кнопка лево
let prev = document.querySelector(".slider__arrow_prev");
//кнопка право
let next = document.querySelector(".slider__arrow_next");

let allSlides = Array.from(slides);
let current = 1;

slider(current);

/*function slider() {
	for (let i = 0; i < allSlides.length; i++) {
		allSlides[i].classList.add("slider__item_active");
	}
	if (current < allSlides.length) {
	    current++;	
	} else {
		current = 0;
	}
	allSlides[current].classList.remove("slider__item_active");
}*/

function slider(n) {
	if (n < 1) {
	  current = allSlides.length;	
	} else if (n > allSlides.length){
      current = 1;
	}

	for (let i = 0; i < allSlides.length; i++) {
	  allSlides[i].classList.remove("slider__item_active");	
	}
	allSlides[current - 1].classList.add("slider__item_active");
}

function plusslides(n) {
    slider(current +=n);	
}
 
 next.onclick = function () {
 	plusslides(1);
 }

 prev.onclick = function () {
 	plusslides(-1);
 }