// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];

var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

slider.on("slideChange", function() {
  console.log("SLIDE CHANGED");

  gsap.to(".slide-text span, .slide-number span, .slide-detail span, .slide-detail-facts div", 0.2, {
    x: "-100px",
    opacity: 0,
    stagger: 0.05
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });

  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 20
  });
});

slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".slide-text span, .slide-number span", 0.2, {
    x: "100px",
    opacity: 0,
    onComplete: function() {
      gsap.to(".slide-text span, .slide-number span", {x: 0, opacity: 1});
    }
  });

  gsap.to(".slide-detail span, .slide-detail-facts div", 0.5, {
    x: 0,
    opacity: 1
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut
  });

  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 10
  });

  // Reset opacity for next/prev slide texts and numbers
  gsap.set(".swiper-slide-next .slide-text, .swiper-slide-prev .slide-text", {
    autoAlpha: 0
  });
  gsap.set(".swiper-slide-next .slide-number, .swiper-slide-prev .slide-number", {
    autoAlpha: 0
  });
});

gsap.to(".rockbg1", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});

// Initial setup to ensure proper scaling and visibility
gsap.set(".swiper-slide", {scale: 0.85});
gsap.set(".swiper-slide-active", {scale: 1});
gsap.set(".swiper-slide-next .slide-text, .swiper-slide-prev .slide-text", {
  autoAlpha: 0
});
gsap.set(".swiper-slide-next .slide-number, .swiper-slide-prev .slide-number", {
  autoAlpha: 0
});
