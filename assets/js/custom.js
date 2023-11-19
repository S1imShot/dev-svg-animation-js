const installAnimatedPanel = () => {
  const animationPath = document.querySelectorAll(".animation-path");
  const buttons = document.querySelectorAll(".btn");

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
    const showIdPath = document.querySelector("#" + getBtnCase);
    const animated = document.querySelector("image");
    const animatedClassNow = animated.getAttribute("class");

    animated.classList.replace(animatedClassNow, "animation-" + getBtnCase);
    showIdPath.classList.add("show");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", changeCase);
  });
};
installAnimatedPanel();

document.querySelector(".panel") ? installAnimatedPanel() : null;
