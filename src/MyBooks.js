import BookItem from "./BookItem";

function MyBooks({ allBooks, selectedBook, onSelectBook }) {
    return (
        <div className="my-books">
            <ul>
                {allBooks.map((book) => (
                    <li key={book.id} onClick={() => onSelectBook(book)}>
                        <BookItem
                            title={book.title}
                            author={book.author}
                            book={book}
                            selectedBook={selectedBook}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyBooks;
