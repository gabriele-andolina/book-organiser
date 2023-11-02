import BookItem from "./BookItem";

function MyBooks({ allBooks, onSelectBook }) {
    return (
        <div className="my-books">
            <ul>
                {allBooks.map((book) => (
                    <li key={book.id} onClick={() => onSelectBook(book)}>
                        <BookItem title={book.title} author={book.author} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyBooks;
