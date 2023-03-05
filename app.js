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
  bookCard.removeAttribute("id");
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
    storeBookLibrary();
  });

  // Read Button

  // Toggle Read
  const toggleRead = (book) => {
    book.haveRead = !book.haveRead;
  };

  readButton.addEventListener("click", function () {
    const bookIndex = bookLibrary.indexOf(book);
    console.log(bookIndex);

    if (readButton.innerHTML == "Read") {
      readButton.innerHTML = "Unread";
      toggleRead(bookLibrary[bookIndex]);
      storeBookLibrary();
    } else {
      readButton.innerHTML = "Read";
      toggleRead(bookLibrary[bookIndex]);
      storeBookLibrary();
    }
  });

  // Adding the book card to screen
  bookCard.style.display = "block";
  bookCardsHolder.appendChild(bookCard);
}

// Modal

const bookTitleForm = document.querySelector("#book-title");
const bookAuthorForm = document.querySelector("#author-name");
const bookPagesForm = document.querySelector("#pages-number");
const bookLanguageForm = document.querySelector("#book-language");
const bookHaveReadForm = document.querySelector("#flexCheckDefault");

// Modal Set to default values
function setToDefault() {
  bookTitleForm.value = "";
  bookAuthorForm.value = "";
  bookPagesForm.value = "";
  bookLanguageForm.value = "";
  bookHaveReadForm.checked = false;
}

// Modal Submit

const modalSubmit = document.querySelector("#modal-submit-button");

modalSubmit.addEventListener("click", function () {
  const bookTitleForm = document.querySelector("#book-title");
  const bookAuthorForm = document.querySelector("#author-name");
  const bookPagesForm = document.querySelector("#pages-number");
  const bookLanguageForm = document.querySelector("#book-language");
  const bookHaveReadForm = document.querySelector("#flexCheckDefault");
  let checked;

  const formInputs = [
    bookTitleForm,
    bookAuthorForm,
    bookPagesForm,
    bookLanguageForm,
  ];

  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value == "") {
      return;
    }
  }

  if (bookHaveReadForm.checked == true) {
    checked = true;
  } else {
    checked = false;
  }

  const book = new createBook(
    bookTitleForm.value,
    bookAuthorForm.value,
    bookPagesForm.value,
    bookLanguageForm.value,
    checked
  );

  if (book != null) {
    bookLibrary.push(book);
  }
  storeBookLibrary();
  addBookToScreen(book);
  setToDefault();
});

// Modal Cancale

const modalClose = document.querySelector("#modal-cancel-button");

modalClose.addEventListener("click", setToDefault);

// Local Storage

function storeBookLibrary() {
  localStorage.setItem("bookLibraryArray", JSON.stringify(bookLibrary));
}

function displayLocalStorage() {
  const bookLibraryArray = JSON.parse(localStorage.getItem("bookLibraryArray"));
  if (bookLibraryArray != false) {
    bookLibrary = bookLibraryArray;
  }
  if (bookLibraryArray != null) {
    for (let i = 0; i < bookLibraryArray.length; i++) {
      addBookToScreen(bookLibraryArray[i]);
    }
  }
}

if (localStorage.getItem("bookLibraryArray") === undefined || null) {
  storeBookLibrary();
}

displayLocalStorage();
