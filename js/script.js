const sidebar = document.getElementById("sidebar");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");

hamburgerBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  sidebar.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebar.setAttribute("aria-hidden", "true");
});
