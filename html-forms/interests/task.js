function ready() {
  const InterestsMain = document.querySelector(".interests_main");

  const getValueForParent = (element) => {
    const inputs = [...element.querySelectorAll("input")];
    const checkedInputs = inputs.filter(
      (InputElement) => InputElement.checked === true
    );
    if (checkedInputs.length > 0) {
      if (checkedInputs.length === inputs.length) {
        return [true, false];
      } else {
        return [false, true];
      }
    } else {
      return [false, false];
    }
  };

  const setParent = (element) => {
    const UlElement = element.closest("ul");
    const LiElement = UlElement.closest("li");
    if (LiElement) {
      const ParentInput = LiElement.querySelector("input");
      const [checked, indeterminate] = getValueForParent(UlElement);
      ParentInput.checked = checked;
      ParentInput.indeterminate = indeterminate;
      setParent(ParentInput);
    }
  };

  const setChildren = (element, checked) => {
    const LiElement = element.closest("li");
    const inputs = LiElement.querySelectorAll("input");
    inputs.forEach((InputElement) => {
      InputElement.checked = checked;
    });
  };

  const onChange = (event) => {
    setChildren(event.target, event.target.checked);
    setParent(event.target);
  };

  InterestsMain.addEventListener("change", onChange);
}

document.addEventListener("DOMContentLoaded", ready);
