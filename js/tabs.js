const tabs = (option) => {
  const {
    selectorTabsButtons,
    activeClassButton,
    selectorTabsElement,
    activeClassTab,
    callback = () => {},
  } = option;
  const tabsBtns = document.querySelectorAll(selectorTabsButtons);
  const tabsElems = document.querySelectorAll(selectorTabsElement);
  // осуществляем перебор кнопок табов в цикле
  tabsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (tabsBtns[i] === btn) {
          tabsElems[i].classList.add(activeClassButton);
          tabsElems[i].classList.add(activeClassTab);
          callback(i);
        } else {
          tabsElems[i].classList.remove(activeClassButton);
          tabsElems[i].classList.remove(activeClassTab);
        }
      }
    });
  });
};

export default tabs;
