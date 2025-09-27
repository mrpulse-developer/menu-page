//  <!-- Swipper JS -->
  document.addEventListener("DOMContentLoaded", function () {
    const heroSwiper = new Swiper(".hero-swiper", {
      loop: true,                // Infinite loop
      autoplay: {
        delay: 3000,             // 3 sec auto-slide
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "fade",            // Smooth fade between slides
      speed: 800,                // Transition speed
    });
  });