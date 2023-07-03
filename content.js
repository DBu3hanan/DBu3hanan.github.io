// JavaScript code
function search_content() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('content');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

function sortList() {
	var list, i, switching, b, shouldSwitch;
	list = document.getElementById("list");
	switching = true;
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
	  // start by saying: no switching is done:
	  switching = false;
	  b = list.getElementsByTagName("LI");
	  // Loop through all list-items:
	  for (i = 0; i < (b.length - 1); i++) {
		// start by saying there should be no switching:
		shouldSwitch = false;
		/* check if the next item should
		switch place with the current item: */
		if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
		  /* if next item is alphabetically
		  lower than current item, mark as a switch
		  and break the loop: */
		  shouldSwitch = true;
		  break;
		}
	  }
	  if (shouldSwitch) {
		/* If a switch has been marked, make the switch
		and mark the switch as done: */
		b[i].parentNode.insertBefore(b[i + 1], b[i]);
		switching = true;
	  }
	}
  }

  (function ($) {
	$('#carousel-3533128475').ploneCarousel({
		height: 380,
		width: 920,
		transition: 'slide',
		speed: 500,
		delay: 8000
	});
})(jQuery);


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("item");
  let dots = document.getElementsByClassName("item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function bigImg(x) {
	x.style.top = "48.8%";
	// x.style.width = "109px";
  }
  
  function normalImg(x) {
	x.style.top = "49%";
  }


  function dictonary() {
	window.location.href = "dictonary.html";
  }

  function animaldata() {
	window.location.href = "animaldata.html";
  }

  function facts() {
	window.location.href = "Facts.html";
  }

  function gallery() {
	window.location.href = "Gallery.html";
  }




  $("<select />").appendTo("nav");

  // Create default option "Go to..."
  $("<option />", {
	 "selected": "selected",
	 "value"   : "",
	 "text"    : "Go to..."
  }).appendTo("nav select");
  
  // Populate dropdown with menu items
  $("nav a").each(function() {
   var el = $(this);
   $("<option />", {
	   "value"   : el.attr("href"),
	   "text"    : el.text()
   }).appendTo("nav select");
  });


  $("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
  });








  