import Button from "./Button";
import { useState } from "react";

function Form({ onAddBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [pagesNumber, setPagesNumber] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    const [cover, setCover] = useState("");

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

export default Form;
