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
    function handleInput(e) {
        console.log(e.target.value);
    }

    return (
        <div className="add-book-section">
            <h2 className="title">Let's add a new book!</h2>
            <form className="add-book-form">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    name="title"
                    placeholder="E.g. 1984"
                    onChange={(e) => handleInput(e)}
                ></input>
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    name="author"
                    placeholder="E.g. George Orwell"
                ></input>
                <label htmlFor="genre">Genre</label>
                <input
                    id="genre"
                    name="genre"
                    placeholder="E.g. Dystopian"
                ></input>
                <label htmlFor="pages">Pages (no.)</label>
                <input id="pages" name="pages" placeholder="E.g. 328"></input>
                <label htmlFor="synopsis">Synopsis</label>
                <input
                    id="synopsis"
                    name="synopsis"
                    placeholder="What's the book about?"
                ></input>
                <label htmlFor="cover">Cover</label>
                <input id="cover" name="cover" placeholder="Upload"></input>
            </form>
            <Button>Add Book</Button>
        </div>
    );
}

function MyBooks() {
    return <div className="my-books"></div>;
}

export default App;
