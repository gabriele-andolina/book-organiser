import Button from "./Button";

function BookDetails({ selectedBook }) {
    return (
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
                <Button>Update</Button>
                <Button>Delete</Button>
            </div>
        </div>
    );
}

export default BookDetails;
