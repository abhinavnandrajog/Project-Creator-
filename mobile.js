let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// document.querySelector("#close").addEventListener
// ("click", function(){
//     document.querySelector(".pop-up").style.display = "none";
// });


// function logpop(){
//     document.querySelector(".pop-up").style.display = "block";
// }

// function Added(){
//     document.querySelector(".pop-up").style.display = "none";
//     window.alert("Added to The Cart!");
// }

function logpop(){
    document.querySelector(".add-popup").style.display="block";
}
function closepopup(){
    document.querySelector(".add-popup").style.display="none";
}