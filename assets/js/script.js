const button = document.querySelector(".hamburger-menu--btn");

const list = document.querySelector("ul");

button.addEventListener("click", () => {
  list.classList.toggle("active");
});
