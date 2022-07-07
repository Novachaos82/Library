let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
  console.log(library);
  createBook();
}

function createBook() {
  const libraryContainer = document.getElementById("Library-container");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookDiv.classList.add("container-box");

  titleDiv.classList.add("book-title");

  authorDiv.classList.add("author");

  pageDiv.classList.add("pages");

  readBtn.classList.add("readBtn");

  removeBtn.classList.add("removeBtn");

  bookDiv.appendChild(titleDiv);
  bookDiv.appendChild(authorDiv);
  bookDiv.appendChild(pageDiv);
  bookDiv.appendChild(readBtn);
  bookDiv.appendChild(removeBtn);

  //libraryContainer.appendChild(bookDiv);
}
const submitBtn = document.getElementById("submit-modal-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleEle = document.getElementById("title");
  const authorEle = document.getElementById("author");
  const pagesEle = document.getElementById("pages");
  const checkboxEle = document.getElementById("read");
  let readValue = false;
  if (checkboxEle.value === "on") {
    readValue = true;
  } else {
    readValue = false;
  }
  console.log(checkboxEle.value);

  if (
    `${titleEle.value}` != "" &&
    `${authorEle.value}` != "" &&
    `${pagesEle.value}` != "" &&
    readValue != ""
  )
    addBookToLibrary(
      `${titleEle.value}`,
      `${authorEle.value}`,
      `${pagesEle.value}`,
      readValue
    );
});

/*modal*/
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

document.addEventListener("DOMContentLoaded", () => {});
