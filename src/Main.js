import { useState } from "react";
import Button from "./Button";
import Quote from "./Quote";
import MyBooks from "./MyBooks";
import Form from "./Form";
import BookDetails from "./BookDetails";

const books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        genre: "Fantasy",
        pagesNumber: 223,
        synopsis: "The first book in the much-acclaimed young wizard series.",
        cover: "",
    },
];

function Main() {
    const [quoteIsActive, setQuoteIsActive] = useState(true);
    const [addBooksBtnIsActive, setAddBooksBtnIsActive] = useState(true);
    const [myBooksBtnIsActive, setMyBooksBtnIsActive] = useState(true);
    const [formIsActive, setFormIsActive] = useState(false);
    const [myBooksColumn, setMyBooksColumn] = useState(false);
    const [allBooks, setAllBooks] = useState(books);
    const [selectedBook, setSelectedBook] = useState(null);

    function handleAddBooks() {
        setQuoteIsActive(false);
        setAddBooksBtnIsActive(false);
        setMyBooksBtnIsActive(false);
        setFormIsActive(true);
        setMyBooksColumn(true);
    }

    function handleAddNewBook(book) {
        setAllBooks((allBooks) => [...allBooks, book]);
    }

    function handleSelectBook(book) {
        setFormIsActive(false);
        setSelectedBook(book);
        console.log(book);
        console.log("Hey, this is book ID:", book.id);
    }

    return (
        <div className="main-page">
            {quoteIsActive && <Quote />}
            <div className="page-buttons">
                {addBooksBtnIsActive && (
                    <Button onClick={handleAddBooks}>Add a book</Button>
                )}
                {myBooksBtnIsActive && <Button>My Books</Button>}
            </div>

            {myBooksColumn && (
                <MyBooks
                    allBooks={allBooks}
                    selectedBook={selectedBook}
                    onSelectBook={handleSelectBook}
                />
            )}

            {formIsActive && <Form onAddBook={handleAddNewBook} />}

            {selectedBook && <BookDetails selectedBook={selectedBook} />}
        </div>
    );
}

export default Main;
