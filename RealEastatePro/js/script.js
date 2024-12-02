const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
// const profileDropdown = document.querySelector(".profile-dropdown");
// const dropdownMenu = profileDropdown.querySelector(".dropdown");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// profileDropdown.addEventListener("click", (e) => {
//   e.stopPropagation();
//   dropdownMenu.classList.toggle("dropdown-active");
// });

// document.addEventListener("click", () => {
//   dropdownMenu.classList.remove("dropdown-active");
// });
