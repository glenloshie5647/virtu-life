/* 
   Filename: complex_code.js
   Description: This code demonstrates a complex system for managing a library.
*/

// Library class
class Library {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.books = [];
        this.members = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
    
    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
    }
    
    findBooksByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }
    
    findBooksByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }
    
    addMember(member) {
        this.members.push(member);
    }
    
    removeMember(member) {
        this.members = this.members.filter(m => m.id !== member.id);
    }
}

// Book class
class Book {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}

// Member class
class Member {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.borrowedBooks = [];
    }
    
    borrowBook(library, book) {
        if (library.books.includes(book)) {
            library.removeBook(book);
            this.borrowedBooks.push(book);
            return true;
        }
        return false;
    }
    
    returnBook(library, book) {
        if (this.borrowedBooks.includes(book)) {
            this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
            library.addBook(book);
            return true;
        }
        return false;
    }
    
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
}

// Usage example
const library = new Library("My Library", "123 Main St");

const book1 = new Book(1, "The Catcher in the Rye", "J.D. Salinger", "Fiction");
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book(3, "1984", "George Orwell", "Science Fiction");
const book4 = new Book(4, "Pride and Prejudice", "Jane Austen", "Romance");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

const member1 = new Member(1, "John Doe", "456 Elm St");
const member2 = new Member(2, "Jane Smith", "789 Oak St");

library.addMember(member1);
library.addMember(member2);

member1.borrowBook(library, book1);
member1.borrowBook(library, book2);

console.log("Library Books:", library.books);
console.log("Member1 Borrowed Books:", member1.getBorrowedBooks());

member1.returnBook(library, book1);

console.log("Library Books:", library.books);
console.log("Member1 Borrowed Books:", member1.getBorrowedBooks());

member2.borrowBook(library, book3);

console.log("Library Books:", library.books);
console.log("Member2 Borrowed Books:", member2.getBorrowedBooks());