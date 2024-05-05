const elMenuBtn = document.querySelector(".js-menu-btn");
const elWrapper = document.querySelector(".wrapper");

const menuBtn = (evt) => {
  evt.preventDefault();
  elMenuBtn.closest(".site-header").classList.toggle("menu-open");
  document.body.classList.toggle("unscrol");
  elWrapper.classList.toggle("bg-color");
};
elMenuBtn.addEventListener("click", menuBtn);
