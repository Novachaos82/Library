const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("myModal");

const newBookBtn = document.getElementById("add-book-btn");

newBookBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
