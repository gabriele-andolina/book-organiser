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
            <h1>Books for a Lifetime</h1>
        </div>
    );
}

function Main() {
    const [quoteIsActive, setQuoteIsActive] = useState(true);
    const [addBooksIsActive, setAddBooksIsActive] = useState(true);
    const [myBooksIsActive, setMyBooksIsActive] = useState(true);

    function handleAddBooks() {
        setQuoteIsActive(false);
        setAddBooksIsActive(false);
        setMyBooksIsActive(false);
    }

    return (
        <div className="main-page">
            {quoteIsActive && <Quote />}
            <div className="main-page-btns">
                {addBooksIsActive && (
                    <Button onClick={handleAddBooks}>Add a book</Button>
                )}
                {myBooksIsActive && <Button>My Books</Button>}
            </div>
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

export default App;
