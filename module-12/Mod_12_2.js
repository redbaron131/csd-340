let books = [
    "Harry Potter and the Order of Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Deathly Hallows",
    "Timeline",
    "Jurassic Park",
    "The Hunger Games",
    "Catching Fire",
    "Mockingjay",
    "The Maze Runner",
    "Tom Clancy's Rainbow Six"
];
  function displayTopToBottom() {
    let sortedBooks = books.slice();
    let bookList = document.querySelector("ol");
    bookList.innerHTML = "";
    for (let i = 0; i < sortedBooks.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = sortedBooks[i];
      bookList.appendChild(listItem);
      // Update the ol numbering
      if (document.querySelector("#bottom-to-top").classList.contains("active")) {
        listItem.value = 10 - i;
      } else {
        listItem.value = i + 1;
      }
    }
  }
  
  function displayBottomToTop() {
    let sortedBooks = books.slice();
    sortedBooks.reverse();
    let bookList = document.querySelector("ol");
    bookList.innerHTML = "";
    for (let i = 0; i < sortedBooks.length; i++) {
      let listItem = document.createElement("li");
      listItem.textContent = sortedBooks[i];
      bookList.appendChild(listItem);
      // Update the ol numbering
      if (document.querySelector("#bottom-to-top").classList.contains("active")) {
        listItem.value = 10 - i;
      } else {
        listItem.value = i + 1;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#top-to-bottom").addEventListener("click", function() {
      this.classList.add("active");
      document.querySelector("#bottom-to-top").classList.remove("active");
      displayTopToBottom();
    });
    document.querySelector("#bottom-to-top").addEventListener("click", function() {
      this.classList.add("active");
      document.querySelector("#top-to-bottom").classList.remove("active");
      displayBottomToTop();
    });
    // Initially display the list in ascending order
    displayTopToBottom();
  });