const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const cleanActive = (cases) => {
  cases.forEach((item) => {
    item.classList.remove("rotator__case_active");
  });
};

const setActive = (element) => {
  element.classList.add("rotator__case_active");
  element.style.color = element.dataset.color;
};

const main = async (Rotator) => {
  function* rotatorIdMaker(len) {
    let index = 0;
    while (true) {
      if (index === len) {
        index = 0;
      }
      yield index++;
    }
  }

  const rotatorCases = Rotator.querySelectorAll(".rotator__case");
  const genId = rotatorIdMaker(rotatorCases.length);
  while (true) {
    let currentElement = rotatorCases.item(genId.next().value);
    cleanActive(rotatorCases);
    setActive(currentElement);
    await sleep(parseInt(currentElement.dataset.speed));
  }
};

const ready = async () => {
  const rotators = [...document.querySelectorAll(".rotator")];
  rotators.forEach(main);
};

document.addEventListener("DOMContentLoaded", ready);
