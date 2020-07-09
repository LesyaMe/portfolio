let titles  = document.querySelectorAll(".accordeon-title");
titles.forEach(function(i) {
	i.onclick = function() {
		i.classList.contains("active") ? i.classList.remove("active") : i.classList.add("active");
		let context = i.nextElementSibling;
		context.classList.contains("open") ? context.classList.remove("open") : context.classList.add("open");
		console.log(context);
		
	};
});