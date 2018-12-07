	function openNav() {
		document.getElementById("sidenav").style.width = "250px";
	}
	function closeNav() {
		document.getElementById("sidenav").style.width = "0";
	}
	function openProject(evt, taalNaam) {
	    var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }
	    document.getElementById(taalNaam).style.display = "block";
	    evt.currentTarget.className += " active";
	}
	// document.getElementById("defaultOpen").click();


	window.onscroll = function(){myFunction()};

	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky){
			header.classList.add("sticky");
		}
		else {
			header.classList.remove("sticky");
		}
	}
	
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1} 
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none"; 
	  }
	  slides[slideIndex-1].style.display = "block"; 
	}
	function een() {

	var input = document.getElementById('in');
	input.value = input.value + "1";
}
function twee() {

	var input = document.getElementById('in');
	input.value = input.value + "2";
}
function drie() {

	var input = document.getElementById('in');
	input.value = input.value + "3";
}
function plus() {

	var input = document.getElementById('in');
	input.value = input.value + "+";
}
function vier() {

	var input = document.getElementById('in');
	input.value = input.value + "4";
}
function vijf() {

	var input = document.getElementById('in');
	input.value = input.value + "5";
}
function zes() {

	var input = document.getElementById('in');
	input.value = input.value + "6";
}
function min() {

	var input = document.getElementById('in');
	input.value = input.value + "-";
}
function zeven() {

	var input = document.getElementById('in');
	input.value = input.value + "7";
}
function acht() {

	var input = document.getElementById('in');
	input.value = input.value + "8";
}
function negen() {

	var input = document.getElementById('in');
	input.value = input.value + "9";
}
function keer() {

	var input = document.getElementById('in');
	input.value = input.value + "*";
}
function komma() {

	var input = document.getElementById('in');
	input.value = input.value + ",";
}
function nul() {

	var input = document.getElementById('in');
	input.value = input.value + "0";
}
function is() {

	var input = document.getElementById('in').value;
	document.getElementById('out').innerHTML = eval(input);
}
function delen() {

	var input = document.getElementById('in');
	input.value = input.value + "/";
}
function ce() {

	var input = document.getElementById('in');
	input.value = "";
}