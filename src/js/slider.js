function initSlider({
    wrapperClassName = 'slider',
    itemClassName = 'slider__item',
    activeItemClassName = 'slider__item--active',
    dotsClassName = 'slider__dots',
    dotClassName = 'slider__dot',
    activeDotClassName = 'slider__dot--active',
  } = {}) {
    const sliders = document.querySelectorAll(`.${wrapperClassName}`);
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll(`.${itemClassName}`);

      const sliderDots = document.createElement('div');
      sliderDots.classList.add(dotsClassName);

      slides.forEach((slide, i) => {
        const slideDot = document.createElement('div');
        slideDot.classList.add(dotClassName);

        if (slide.classList.contains(activeItemClassName)) {
          slideDot.classList.add(activeDotClassName);
        }

        slideDot.addEventListener('click', () => {
          const activeSlide = slider.querySelector(`.${activeItemClassName}`);
          if (activeSlide) {
            activeSlide.classList.remove(activeItemClassName);
          }
          slide.classList.add(activeItemClassName);

          const activeDot = sliderDots.querySelector(`.${activeDotClassName}`);
          if (activeDot) {
            activeDot.classList.remove(activeDotClassName);
          }
          slideDot.classList.add(activeDotClassName);
        });

        sliderDots.appendChild(slideDot);
      });

      slider.appendChild(sliderDots);
    })
  }

  initSlider();