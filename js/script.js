const elMenuBtn = document.querySelector(".js-menu-btn");
const elWrapper = document.querySelector(".wrapper");

const menuBtn = (evt) => {
  evt.preventDefault();
  elMenuBtn.closest(".site-header").classList.toggle("menu-open");
  document.body.classList.toggle("unscrol");
  elWrapper.classList.toggle("bg-color");
};
elMenuBtn.addEventListener("click", menuBtn);

// Faqs accordian

document.addEventListener("click", (e) => {
  if (
    !e.target.matches(".howitwporks__header") &&
    !e.target.matches(".faqs-btn") &&
    !e.target.matches(".faqs-btn")
  )
    return;
  let card = e.target.closest(".howitworks__card");
  if (!card) return;
  let body = card.querySelector(".howitworks__body");
  let button = card.querySelector(".faqs-btn");
  card.classList.toggle("active");
  if (card.classList.contains("active")) {
    body.style.display = "block";
    button.style.backgroundImage = `url("../assets/image/about-arrow-down.png")`;
  } else {
    body.style.display = "none";
    button.style.backgroundImage = `url("../assets/image/about-faqs-icon-top.png")`;
  }
});
