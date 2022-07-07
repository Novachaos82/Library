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
  let allBooks = document.querySelectorAll(".container-box");
  allBooks.forEach((box) => {
    box.remove();
  });
  library.forEach((obj) => {
    const libraryContainer = document.querySelector(".library-container");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pageDiv = document.createElement("div");
    const removeBtn = document.createElement("button");
    const readBtn = document.createElement("button");

    bookDiv.classList.add("container-box");
    titleDiv.classList.add("book-title");
    titleDiv.innerHTML = `"` + obj.title + `"`;

    authorDiv.classList.add("author");
    authorDiv.textContent = "by " + obj.author;

    pageDiv.classList.add("pages");
    pageDiv.textContent = obj.pages + " page";

    readBtn.classList.add("readBtn");
    if (obj.isRead === true) {
      readBtn.textContent = "read";
    } else {
      readBtn.textContent = "not read";
    }

    readBtn.addEventListener("click", () => {
      if (obj.isRead === true) {
        console.log("yes");
        obj.isRead = false;
        readBtn.textContent = "not read";
      } else {
        console.log("no");
        obj.isRead = true;
        readBtn.textContent = "read";
      }
      checkForRead(obj.isRead, readBtn);
    });
    checkForRead(obj.isRead, readBtn);

    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", removeBook);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pageDiv);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);

    libraryContainer.appendChild(bookDiv);

    function removeBook() {}
  });
}

function checkForRead(flag, btn) {
  if (flag === true) {
    btn.style.background = "green";
  } else {
    btn.style.background = "red";
  }
}
const submitBtn = document.getElementById("submit-modal-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleEle = document.getElementById("title");
  const authorEle = document.getElementById("author");
  const pagesEle = document.getElementById("pages");
  const checkboxEle = document.getElementById("read");
  let readValue = false;
  //if (checkboxEle.value === "on") {
  //  readValue = true;
  //} else {
  //  readValue = false;
  //}
  console.log(checkboxEle.checked);

  if (
    `${titleEle.value}` != "" &&
    `${authorEle.value}` != "" &&
    `${pagesEle.value}` != "" &&
    checkboxEle != ""
  )
    addBookToLibrary(
      `${titleEle.value}`,
      `${authorEle.value}`,
      `${pagesEle.value}`,
      checkboxEle.checked
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
