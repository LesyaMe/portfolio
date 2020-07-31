let image = document.querySelector(".head");
let body = document.querySelector("body");
let mainHead = document.querySelector(".main__head");
let bigButton = document.querySelector(".push");
let notButton = document.querySelector(".notPush");

image.addEventListener("click", function() {
	body.classList.toggle("dark_body");
	mainHead.classList.toggle("dark_mainHead");
	bigButton.classList.toggle("dark_push");
	notButton.classList.toggle("dark_notPush");
});