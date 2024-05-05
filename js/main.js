document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".header__menu-btn")) return;

  let headerBlock = e.target.closest(".header__inner");

  let navigation = headerBlock.querySelector(".header__navigation");

  let overlay = headerBlock.querySelector(".overlay");

  navigation.classList.toggle("active");

  if (navigation.classList.contains("active")) {
    e.target.style.backgroundImage = `url("../assets/image/about-close-menu.png")`;
    navigation.style.transform = "translateX(0)";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    e.target.style.backgroundImage = `url("../assets/image/about-open-menu.png")`;
    navigation.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
    document.body.style.overflow = "visible";
  }
});
