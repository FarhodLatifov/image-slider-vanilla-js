function activateSlider(activeSlide = 0) {
  const slides = document.querySelectorAll(".slider-item");
  
  slides[activeSlide].classList.add("slider-active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("slider-active");
    });
  });

  function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("slider-active");
  });
}
}

activateSlider(1)

// for (const slide of slides){
//   slide.addEventListener('click', ()=>{
//     clearActiveClasses()
//     slide.classList.add('slider-active')
//   })
// }


