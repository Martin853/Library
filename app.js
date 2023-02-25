// Main Variables
const template = document.querySelector("#template-book-card");
const bookCardsHolder = document.querySelector("#book-cards-holder");

// Library list

let bookLibrary = [];

// Book Constructor

function createBook(title, author, pages, language, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.language = language;
  this.haveRead = haveRead;
}

// Add Books To Scren Function

function addBookToScreen(book) {
  // Creating th book card
  const bookCard = template.cloneNode(true);
  const childNodes = bookCard.childNodes;
  const readButton = childNodes[9].firstElementChild;
  const deleteButton = childNodes[9].lastElementChild;
  childNodes[1].innerHTML += " " + book.title;
  childNodes[3].innerHTML += " " + book.author;
  childNodes[5].innerHTML += " " + book.pages;
  childNodes[7].innerHTML += " " + book.language;

  if (book.haveRead == true) {
    readButton.innerHTML = "Read";
  } else {
    readButton.innerHTML = "Unread";
  }

  // Adding functionality to the buttons

  // Delete Button

  deleteButton.addEventListener("click", function () {
    bookCard.remove();
    bookLibrary.splice(bookLibrary.indexOf(book), 1);
    updateCardHolder();
  });

  // Read Button
  readButton.addEventListener("click", function () {
    if (readButton.innerHTML == "Read") {
      readButton.innerHTML = "Unread";
    } else {
      readButton.innerHTML = "Read";
    }
  });

  // Adding the book card to screen
  bookCard.style.display = "block";
  bookCardsHolder.appendChild(bookCard);
}

// Updating the book card holder with the library array
function updateCardHolder() {
  bookLibrary.forEach(addBookToScreen);
}

// Modal

// Modal Submit

const modalSubmit = document.querySelector("#modal-submit-button");

modalSubmit.addEventListener("click", function (event) {
  event.preventDefault();
});
