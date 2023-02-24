// Variables
const addBook = document.querySelector("#add-book");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close");
const overlay = document.querySelector("#overlay");

// Open Modal
addBook.addEventListener("click", function () {
  modal.style.display = "block";
  overlay.style.display = "block";
});

// Close Modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
