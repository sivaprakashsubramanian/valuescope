let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




let si=1;
show(si);
function ps(k){
    show(si+=k);
}
function cs(k){
    show(si=k);
}
function show(k){
    let j;
    let slide=document.getElementsByClassName("det1");
    if(k>slide.length){si=1}
    if(k<1){si=slide.length}
    for(j=0;j<slide.length;j++){
        slide[j].style.display="none";
    }
    slide[si-1].style.display="block";

}
