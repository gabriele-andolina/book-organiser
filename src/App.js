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
            <h2>I'm the main page</h2>
        </div>
    );
}

export default App;
