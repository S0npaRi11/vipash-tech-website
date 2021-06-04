AOS.init({disable: 'mobile'});

/* SLIDESHOW LOGIC */

const slideshow = document.querySelector('.slideshow')

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
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

// new Splide('#comments').mount()



/*  HAMBURGER MENU LOGIC  */
const ham = document.querySelector('.hamburger')
const hamOpen = document.querySelector('#hamOpen')
const hamClose = document.querySelector('#hamClose')

hamOpen.addEventListener('click', () => {
  console.log('Ham Opened')
  ham.classList.add('hamVisible');
})

hamClose.addEventListener('click', () => {
  console.log('Ham Closed')
  ham.classList.remove('hamVisible');
})


/* toTop hide and show logic */
const toTop = document.querySelector('.toTop')
const hero = document.querySelector('#hero')
const card = document.querySelector('.card')
const expertiese = document.querySelector('#expertiese')
const nav = document.querySelector('nav')
// console.log(toTop) 

// const rect = card.getBoundingClientRect();
// const card = 

// const isInViewport = rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth);

function scrollFunction() {

  // console.log('scroll function called!!')

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }

  //for navigation bar in desktop view
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    nav.style.position = 'fixed';
    nav.style.background = '#ffffff';
    nav.style.zIndex = '100'
  }else{
    nav.style.position = 'absolute';
    nav.style.background = 'transparent';
    nav.style.zIndex = '100'
  }
}

// const isVisible = (el) => {

//   var rect = el.getBoundingClientRect();

//   return rect.bottom > 0 &&
//       rect.right > 0 &&
//       rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
//       rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
// }

// // 
// /* MOBILE SEPCIFIC SCROLLING */ 
// const scrollOnEnd = (el) => {
//   // window.addEventListener('scroll', (el) => {
//     if(el.scrollHeight - el.scrollTop - el.clientHeight < 1) return true
//   // })
// }


/* CLENTS SLIDER LOGIC */
let clientSlides = 5;

// if(window.screen.width < 750) clientSlides = 2

$('#clients').slick({
  infinite: true,
  dots: false,
  autoplay: true,
  slidesToShow: clientSlides,
  slidesTOScroll: 1,
  autoplaySpeed: 5000
})

/* REVIEWS SLIDER LOGIC */

// let reviewSlides = 1

// $('#reviews').slick({
//   infinite: false,
//   dots: true,
//   slidesToShow: reviewSlides,
//   slidesTOScroll: 1,
// })

/* PARALLAX LOGIC */
// const throttle = (fn, wait) => {
//   let time = Date.now();
//   return function () {
//       if(time + wait - Date.now() < 0){
//           fn();
//           time = Date.now();
//       }
//   }
// }

// const parallax = () => {

//   console.log('parallax called!!')

//   const scrolled = window.pageYOffset;
//   const parallax = document.querySelector('.parallax')
  
//  if(parallax){
//   const coords = ( scrolled * 0.7 ) + 'px'
  
//   parallax.style.transform = `translateY(${coords})`
//  }
// }

// window.addEventListener('scroll',throttle(parallax, 14))

window.onscroll = () => {
  // console.log('scrolled!!')
  // console.log(isVisible(card))
  scrollFunction()
  // throttle(parallax, 14)
  // console.log(scrollOnEnd(expertiese))
}
  
