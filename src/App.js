import { useState } from "react";
import "./style.css";

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

function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

function Header() {
    return (
        <div className="page-title">
            <h1>Books of a Lifetime</h1>
        </div>
    );
}

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
            <div className="main-page-btns">
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

function Quote() {
    return (
        <div className="quote-div">
            <h2 className="quote">We read to know we're not alone.</h2>
            <p className="quote-par">C. S. Lewis</p>
        </div>
    );
}

function Form({ onAddBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [pagesNumber, setPagesNumber] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    const [cover, setCover] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Working");

        const newBook = {
            title,
            author,
            genre,
            pagesNumber,
            synopsis,
            cover,
        };

        onAddBook(newBook);
        console.log(newBook);

        setTitle("");
        setAuthor("");
        setGenre("");
        setPagesNumber(0);
        setSynopsis("");
        setCover("");
    }

    return (
        <div className="add-book-section">
            <h2 className="title">My new book:</h2>

            <form className="add-book-form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    placeholder="E.g. 1984"
                    onChange={(e) => setTitle(e.target.value)}
                ></input>

                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    placeholder="E.g. George Orwell"
                    onChange={(e) => setAuthor(e.target.value)}
                ></input>

                <label htmlFor="genre">Genre</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={genre}
                    placeholder="E.g. Dystopian"
                    onChange={(e) => setGenre(e.target.value)}
                ></input>

                <label htmlFor="pages">Pages (no.)</label>
                <input
                    type="number"
                    id="pages"
                    name="pages"
                    value={pagesNumber}
                    placeholder="E.g. 328"
                    onChange={(e) => setPagesNumber(Number(e.target.value))}
                ></input>

                <label htmlFor="synopsis">Synopsis</label>
                <textarea
                    id="synopsis"
                    name="synopsis"
                    value={synopsis}
                    placeholder="What's the book about?"
                    onChange={(e) => setSynopsis(e.target.value)}
                ></textarea>

                <label htmlFor="cover">Cover</label>
                <input
                    type="file"
                    id="cover"
                    name="cover"
                    value={cover}
                    placeholder="Upload"
                    onChange={(e) => setCover(e.target.value)}
                ></input>
                <Button>Add Book</Button>
            </form>
        </div>
    );
}

function MyBooks({ allBooks }) {
    return (
        <div className="my-books">
            <ul>
                {allBooks.map((book) => (
                    <li key={book.title}>
                        <BookItem title={book.title} author={book.author} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BookItem({ title, author }) {
    return (
        <div className="book-item">
            <div className="book-cover-div">
                <img
                    src="images/books-stack.png"
                    alt="Book cover"
                    className="book-cover"
                ></img>
            </div>
            <div className="book-info">
                <p className="book-title">{title}</p>
                <p className="book-author">{author}</p>
            </div>
        </div>
    );
}

export default App;
