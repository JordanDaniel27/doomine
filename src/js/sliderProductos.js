document.addEventListener("DOMContentLoaded", () => {
  var sliderProductos = new Swiper(".slider-productos", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    grab: true,
    centeredSlides: false,
    initialSlide: 0, // Empieza en el cuarto slide (índice 3) */

    //allowSlideNext: false,  //Bloquea el deslizamiento hacia el siguiente slide
    //allowSlidePrev: false,  //Bloquea el deslizamiento hacia el slide anterior
    allowTouchMove: true, // Bloquea el movimiento táctil
    /* autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    }, */
    breakpoints: {
      0: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4,
        centeredSlides: false,
      },
    },
  });
});
