let library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//if (localStorage.getItem("info")) {
//  getLocale();
//}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
  console.log(library);
  locale();
  getLocale();
  createBook();
}

function createBook() {
  let id = 0;
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

    /*read button*/
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
      createBook();
    });
    checkForRead(obj.isRead, readBtn);

    /*remove button*/
    removeBtn.classList.add("removeBtn");
    removeBtn.textContent = "remove";
    removeBtn.addEventListener("click", removeBook);

    /*setting id's for each book*/
    bookDiv.dataset.ID = id;
    console.log(id);

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pageDiv);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);

    libraryContainer.appendChild(bookDiv);

    function removeBook() {
      library.splice(bookDiv.dataset.ID, 1);
      createBook();
      locale();
    }
    id++;
    locale();
    //console.log(library.findIndex(bookDiv));
  });
}

function checkForRead(flag, btn) {
  if (flag === true) {
    btn.style.background = "#9fff9c";
  } else {
    btn.style.background = "#ff9c9c";
  }
}

/*modal*/
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("myModal");

const newBookBtn = document.getElementById("add-book-btn");

newBookBtn.addEventListener("click", () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
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

/*data entry in modal*/
const submitBtn = document.getElementById("submit-modal-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const titleEle = document.getElementById("title");
  const authorEle = document.getElementById("author");
  const pagesEle = document.getElementById("pages");
  const checkboxEle = document.getElementById("read");

  console.log(checkboxEle.checked);

  if (
    `${titleEle.value}` != "" &&
    `${authorEle.value}` != "" &&
    `${pagesEle.value}` != "" &&
    checkboxEle != ""
  ) {
    addBookToLibrary(
      `${titleEle.value}`,
      `${authorEle.value}`,
      `${pagesEle.value}`,
      checkboxEle.checked
    );
    modal.style.display = "none";
  }
});

function locale() {
  localStorage.setItem("info", JSON.stringify(library));
}

function getLocale() {
  if (localStorage.getItem("info")) {
    let objects = JSON.parse(localStorage.getItem("info"));
    console.log(objects);
    library = objects;
    createBook();
    console.log("does exist");
  } else {
    console.log("book doesn't exist");
  }
}

window.addEventListener("load", () => {
  getLocale();
});
