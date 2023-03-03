function imageSlider() {
  let imageBox = document.querySelector('.image-slider-container');
  let i = 0;

  setInterval(function () {
    imageBox.style.left = -i * 1920 + 'px';

    i = (i + 1) % 5;
    console.log(i);
  }, 3000);
}

imageSlider();