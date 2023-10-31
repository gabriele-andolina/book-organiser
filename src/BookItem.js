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

export default BookItem;
