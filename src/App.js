import { useState } from "react";
import "./style.css";

function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
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

    function handleAddBooks() {
        setQuoteIsActive(false);
        setAddBooksBtnIsActive(false);
        setMyBooksBtnIsActive(false);
        setFormIsActive(true);
        setMyBooksColumn(true);
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
            {myBooksColumn && <MyBooks />}
            {formIsActive && <Form />}
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

function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

function Form() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [pagesNumber, setPagesNumber] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    const [cover, setCover] = useState(null);

    return (
        <div className="add-book-section">
            <h2 className="title">My new book:</h2>

            <form className="add-book-form">
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
                    onChange={(e) => setPagesNumber(e.target.value)}
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
            </form>
            <Button>Add Book</Button>
        </div>
    );
}

function MyBooks() {
    return <div className="my-books"></div>;
}

export default App;
