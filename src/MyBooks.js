import BookItem from "./BookItem";

function MyBooks({ allBooks }) {
    return (
        <div className="my-books">
            <ul>
                {allBooks.map((book) => (
                    <li key={book.title}>
                        <BookItem title={book.title} author={book.author} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyBooks;
