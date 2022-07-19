const ready = () => {
  const Book = document.getElementById("book");
  const ControlFontSize = Book.querySelector(".book__control_font-size");
  const ControlTextColor = Book.querySelector(".book__control_color");
  const ControlBackgroundColor = Book.querySelector(
    ".book__control_background"
  );

  const setActive = (containerControl, control, activeClassName) => {
    if (control.tagName !== "A") {
      console.dir(control);
      return;
    }
    const controls = containerControl.querySelectorAll(`.${activeClassName}`);
    controls.forEach((item) => {
      item.classList.remove(activeClassName);
    });
    control.classList.add(activeClassName);
    return control;
  };

  const onclickControlFontSize = (event) => {
    event.preventDefault();
    const ActiveControl = setActive(
      event.currentTarget,
      event.target,
      "font-size_active"
    );
    if (ActiveControl) {
      Book.classList.remove("book_fs-big", "book_fs-small");

      ActiveControl.dataset.size
        ? Book.classList.add(`book_fs-${ActiveControl.dataset.size}`)
        : null;
    }
  };

  const onclickControlTextColor = (event) => {
    event.preventDefault();
    const ActiveControl = setActive(
      event.currentTarget,
      event.target,
      "color_active"
    );
    if (ActiveControl) {
      Book.classList.remove(
        "book_color-gray",
        "book_color-whitesmoke",
        "book_color-black"
      );
      Book.classList.add(`book_color-${ActiveControl.dataset.textColor}`);
    }
  };

  const onclickControlBackgroundColor = (event) => {
    event.preventDefault();
    const ActiveControl = setActive(
      event.currentTarget,
      event.target,
      "color_active"
    );
    if (ActiveControl) {
      Book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");
      Book.classList.add(`book_bg-${ActiveControl.dataset.bgColor}`);
    }
  };

  ControlFontSize.addEventListener("click", onclickControlFontSize);
  ControlTextColor.addEventListener("click", onclickControlTextColor);
  ControlBackgroundColor.addEventListener(
    "click",
    onclickControlBackgroundColor
  );
};

document.addEventListener("DOMContentLoaded", ready);
