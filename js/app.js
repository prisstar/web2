let b;
let up;
if (window.innerWidth >= 1200) {
	b = 2;
	up ='85%';
} else {
	up = '75%';
	document.getElementById('a').style.fontSize = '25px';
	document.getElementById('1').style.height = up;
	document.getElementById('2').style.height = up;
	document.getElementById('3').style.height = up;
	document.getElementById('4').style.height = up;
	document.getElementById('5').style.height = up;
	document.getElementById('6').style.height = up;
	document.getElementById('7').style.height = up;
	document.getElementById('8').style.height = up;
	document.getElementById('9').style.height = up;
	document.getElementById('10').style.height = up;
	document.getElementById('11').style.height = up;
	document.getElementById('12').style.height = up;
	document.getElementById('13').style.height = up;
	document.getElementById('14').style.height = up;
	document.getElementById('15').style.height = up;
	document.getElementById('16').style.height = up;
	document.getElementById('17').style.height = up;
	document.getElementById('18').style.height = up;
	document.getElementById('19').style.height = up;
	document.getElementById('20').style.height = up;
	document.getElementById('21').style.height = up;
	b = 3;
}



document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i + 1}`] = new Swiper(n, {
		freeMode: true,
		centerSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: b,
	})
})

bindSwipers(slider1, slider2, slider3);

var share = document.querySelectorAll('.slider__img');

share.forEach(element=> (element.onmouseenter = function(e) {
	element.style.transform = 'rotate(12deg)';
	element.style.zIndex = '2';
}));

share.forEach(element=> (element.onmouseleave = function(e) {
	element.style.transform = 'rotate(0)';
}));

var share = document.querySelectorAll('.slider__img1');

share.forEach(element=> (element.onmouseenter = function(e) {
	element.style.transform = 'rotate(-168deg)';
	element.style.zIndex = '2';
}));

share.forEach(element=> (element.onmouseleave = function(e) {
	element.style.transform = 'rotate(-180deg)';
}));