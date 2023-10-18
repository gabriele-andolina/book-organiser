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

    function handleAddBooks() {
        setQuoteIsActive(false);
        setAddBooksBtnIsActive(false);
        setMyBooksBtnIsActive(false);
        setFormIsActive(true);
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
            <MyBooks />
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
    return (
        <div className="add-book-section">
            <h2 className="title">Let's add a new book!</h2>
            <form className="add-book-form">
                <input placeholder="E.g. 1984"></input>
                <input placeholder="E.g. George Orwell"></input>
                <input placeholder="E.g. Dystopian"></input>
                <input placeholder="E.g. 328"></input>
                <input placeholder="What's the book about?"></input>
                <input placeholder="Upload"></input>
            </form>
            <Button>Add Book</Button>
        </div>
    );
}

function MyBooks() {
    return <div className="my-books"></div>;
}

export default App;
