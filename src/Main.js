import { useState } from "react";
import Button from "./Button";
import Quote from "./Quote";
import MyBooks from "./MyBooks";
import Form from "./Form";

const books = [
    {
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

    return (
        <div className="main-page">
            {quoteIsActive && <Quote />}
            <div className="main-page-buttons">
                {addBooksBtnIsActive && (
                    <Button onClick={handleAddBooks}>Add a book</Button>
                )}
                {myBooksBtnIsActive && <Button>My Books</Button>}
            </div>
            {myBooksColumn && <MyBooks allBooks={allBooks} />}
            {formIsActive && <Form onAddBook={handleAddNewBook} />}
        </div>
    );
}

export default Main;
