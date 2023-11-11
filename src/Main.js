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
    // Form variables
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [pagesNumber, setPagesNumber] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    const [cover, setCover] = useState("");

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

    function handleUpdateBook(selectedBook) {
        // setSelectedBook(null);
        setFormIsActive(true);
    }

    // Form submission
    function handleSubmit(e) {
        e.preventDefault();

        const id = crypto.randomUUID();

        const newBook = {
            id,
            title,
            author,
            genre,
            pagesNumber,
            synopsis,
            cover,
        };

        handleAddNewBook(newBook);
        console.log(newBook);

        setTitle("");
        setAuthor("");
        setGenre("");
        setPagesNumber(0);
        setSynopsis("");
        setCover("");
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

            {formIsActive && (
                <Form
                    title={title}
                    onSetTitle={setTitle}
                    author={author}
                    onSetAuthor={setAuthor}
                    genre={genre}
                    onSetGenre={setGenre}
                    pagesNumber={pagesNumber}
                    onSetPagesNumber={setPagesNumber}
                    synopsis={synopsis}
                    onSetSynopsis={setSynopsis}
                    cover={cover}
                    onSetCover={setCover}
                    onAddBook={handleAddNewBook}
                    onSubmit={handleSubmit}
                />
            )}

            {selectedBook && (
                <BookDetails
                    selectedBook={selectedBook}
                    setSelectedBook={setSelectedBook}
                    onUpdateBook={handleUpdateBook}
                    title={title}
                    onSetTitle={setTitle}
                    author={author}
                    onSetAuthor={setAuthor}
                    genre={genre}
                    onSetGenre={setGenre}
                    pagesNumber={pagesNumber}
                    onSetPagesNumber={setPagesNumber}
                    synopsis={synopsis}
                    onSetSynopsis={setSynopsis}
                    cover={cover}
                    onSetCover={setCover}
                    onAddBook={handleAddNewBook}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

export default Main;
