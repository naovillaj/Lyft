var ultimoScrollTop = 0;
var scrollArriba = document.getElementById("scrollArriba");
var scrollAbajo = document.getElementById("scrollAbajo");
window.addEventListener('scroll',function(){
	var accionScroll = window.pageYOffset || document.documentElement.scrollTop;
	if (accionScroll >= ultimoScrollTop) {
		scrollArriba.style.display="none";
		scrollArriba.style.opacity = 0;
		scrollAbajo.style.display="block";
		scrollAbajo.style.opacity = 1;
	}
	else{
		scrollAbajo.style.display="block";
		scrollAbajo.style.opacity = 1;
		if (accionScroll <= 3) {
			scrollArriba.style.display="block";
			scrollArriba.style.opacity = 1;
			scrollAbajo.style.display="none";
			scrollAbajo.style.opacity = 0;
		}
	}
	ultimoScrollTop = accionScroll;
},false);