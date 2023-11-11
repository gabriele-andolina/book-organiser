import { useState } from "react";
import Button from "./Button";
import UpdateForm from "./UpdateForm";

function BookDetails({ selectedBook }) {
    const [bookDetailsIsActive, setBookDetailsIsActive] = useState(true);
    const [updateMode, setUpdateMode] = useState(false);

    function handleBookUpdate() {
        setBookDetailsIsActive(false);
        setUpdateMode(true);
    }

    return bookDetailsIsActive ? (
        <div className="book-details-section">
            <div className="book-cover-div">
                <img
                    src="images/books-stack.png"
                    className="book-cover"
                    alt="Book cover"
                />
            </div>

            <h2 className="title">{selectedBook.title}</h2>
            {selectedBook.cover}
            <p>
                <span className="book-info-spec">Title:</span>{" "}
                {selectedBook.title}
            </p>
            <p>
                <span className="book-info-spec">Author:</span>{" "}
                {selectedBook.author}
            </p>
            <p>
                <span className="book-info-spec">Genre:</span>{" "}
                {selectedBook.genre}
            </p>
            <p>
                <span className="book-info-spec">Pages:</span>{" "}
                {selectedBook.pagesNumber}
            </p>
            <p>
                <span className="book-info-spec">Synopsis:</span>{" "}
                {selectedBook.synopsis}
            </p>
            <div className="book-actions-div">
                <Button onClick={handleBookUpdate}>Update</Button>
                <Button>Delete</Button>
            </div>
        </div>
    ) : (
        <UpdateForm
            selectedBook={selectedBook}
            updateMode={updateMode}
            onUpdateBook={handleBookUpdate}
        />
    );
}

export default BookDetails;
