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

var form = document.getElementById("informationEntry1");
var phone = document.getElementById("phone");
var name = document.getElementById("name");
var email = document.getElementById("email");
var city = document.getElementById("city");
var none = document.getElementsByClassName("none");
var error = document.getElementsByClassName("error");

form.addEventListener("click", function(){
	for(var i=0; i<error.length; i++){
		console.log(this);
		none[i].style.display="block";
		form.style.height = "420px";
	}
	
})

var boton = document.getElementById("becomeDriver");

boton.addEventListener("click", function(e){
	e.preventDefault();


	if(name.value=="" || email.value== "" || city.value==""){
		enviar.nextElementSibling.innerText = "Todos los datos deben de estar llenos";
		console.log(enviar.nextElementSibling);
	}else{
		enviar.nextElementSibling.innerText = "";
		document.getElementById("formulario").reset();

	}
})