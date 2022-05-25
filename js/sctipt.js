new Swiper ('.swiper', {
  autoplay: {// 
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  spaceBetween: 30,
  loop: false,
  speed: 1500,
  effect: 'cube',
});
let sound = document.createElement('audio');
sound.setAttribute('src' , 'музыка.mp3');
sound.volume = 0.1
let cap = document.querySelector('.box-cap');
let capButton = document.querySelector('#capButton');
let box = document.querySelector('.box');
capButton.onclick = function() {
  cap.classList.add('cap_open');
  box.classList.add('box_open');
  sound.play();
}
// setTimeout(() => {
//   document.querySelector('.wrapper').classList.add('wrapper_hide');
// }, 3000);