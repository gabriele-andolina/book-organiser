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
    return (
        <div className="main-page">
            <Quote />
            <div className="main-page-btns">
                <Button>Add a book</Button>
                <Button>My Books</Button>
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

function Button({ children }) {
    return <button>{children}</button>;
}

export default App;
