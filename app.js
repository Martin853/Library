// Variables
const addBook = document.querySelector("#add-book");
const overlay = document.querySelector("#overlay");
const closeModal = document.querySelector("#close");

// Open Modal
addBook.addEventListener("click", function () {
  overlay.style.display = "block";
});

// Close Modal
closeModal.addEventListener("click", function () {
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});
