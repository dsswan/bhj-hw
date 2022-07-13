const ready = () => {
  let currentActive = 0;
  const next = document.querySelector(".slider__arrow_next");
  const prev = document.querySelector(".slider__arrow_prev");
  const sliderItems = document.querySelectorAll(".slider__item");
  const dots = document.querySelectorAll(".slider__dot");
  const itemCount = sliderItems.length;

  const onNext = () => {
    if (currentActive < itemCount - 1) {
      setCurrenActive(currentActive + 1);
    } else {
      setCurrenActive(0);
    }
  };

  const onPrev = () => {
    if (currentActive === 0) {
      setCurrenActive(itemCount - 1);
    } else {
      setCurrenActive(currentActive - 1);
    }
  };

  next.onclick = onNext;
  prev.onclick = onPrev;

  const clearActive = () => {
    sliderItems.item(currentActive).classList.remove("slider__item_active");
    dots.item(currentActive).classList.remove("slider__dot_active");
  };

  const setCurrenActive = (index) => {
    clearActive();
    sliderItems.item(index).classList.add("slider__item_active");
    dots.item(index).classList.add("slider__dot_active");
    currentActive = index;
  };

  for (let i = 0; i < itemCount; i += 1) {
    const dot = dots.item(i);
    dot.onclick = () => {
      setCurrenActive(i);
    };
  }
};

document.addEventListener("DOMContentLoaded", ready);
