let running = true;
let library = [];
// Functions to add a new book
function addBook() {
  const title = prompt("Enter the book title:");
  const author = prompt("Enter the author's name:");
  const isRead = false;
  const book = { title, author, isRead };
  library.push(book);
  alert(`Book "${title}" by ${author}. added to your library.`);
}
function listBooks() {
  if (library.length === 0) {
    alert("No books in your library.");
    return;
  }
  let bookList = "Your Library:\n";
  library.forEach((book, index) => {
    bookList += `${index + 1}. ${book.title} by ${book.author} - ${
      book.isRead ? "Read" : "Not Read"
    };\n`;
  });
  alert(bookList);
}
function markAsRead(title) {
  const book = library.find((book) => book.title === title);
  if (book) {
    book.isRead = true;
    alert(`Marked ${title} as read.`);
  } else {
    alert(`Book ${title} not found `);
  }
}
// Main menu loop
while (running) {
  const choice = prompt(
    "1. Book Tracker 2. List Books 3. Mark Book as Read 4. Exit Enter your choice:"
  );
  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      listBooks();
      break;
    case "3":
      const title = prompt(
        "Enter the title of the book you want to mark as read:"
      );
      markAsRead(title);
      break;
    case "4":
      running = false;
      alert("Goodbye!");
      break;
    default:
      alert("Invalid choice. Please try again.");
      break;
  }
}
