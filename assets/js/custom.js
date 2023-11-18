const installAnimatedPanel = () => {
  const animationPath = document.querySelectorAll(".animation-path");
  const buttons = document.querySelectorAll(".btn");
  const animated = document.querySelector(".animated");

  function removeActiveClass() {
    buttons.forEach((item) => {
      item.classList.remove("active");
    });
    animationPath.forEach((path) => {
      path.classList.remove("show");
    });
  }

  const changeCase = (event) => {
    removeActiveClass();
    event.target.classList.add("active");

    const getBtnCase = event.target.getAttribute("data-animation");

    const caseAnimation = document.querySelector("#" + getBtnCase);
    caseAnimation.classList.add("show");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", changeCase);
  });
};
installAnimatedPanel();

document.querySelector(".panel") ? installAnimatedPanel() : null;
