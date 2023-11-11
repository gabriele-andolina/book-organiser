import Button from "./Button";

function UpdateForm({
    selectedBook,
    onSetTitle,
    onSetAuthor,
    onSetGenre,
    onSetPagesNumber,
    onSetSynopsis,
    onSetCover,
    updateMode,
    onSubmit,
}) {
    return (
        updateMode && (
            <div className="add-book-section">
                <h2 className="title">{selectedBook.title}</h2>

                <form className="add-book-form" onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={selectedBook.title}
                        onChange={(e) => onSetTitle(e.target.value)}
                    ></input>

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={selectedBook.author}
                        onChange={(e) => onSetAuthor(e.target.value)}
                    ></input>

                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={selectedBook.genre}
                        onChange={(e) => onSetGenre(e.target.value)}
                    ></input>

                    <label htmlFor="pages">Pages (no.)</label>
                    <input
                        type="number"
                        id="pages"
                        name="pages"
                        value={selectedBook.pagesNumber}
                        onChange={(e) =>
                            onSetPagesNumber(Number(e.target.value))
                        }
                    ></input>

                    <label htmlFor="synopsis">Synopsis</label>
                    <textarea
                        id="synopsis"
                        name="synopsis"
                        value={selectedBook.synopsis}
                        onChange={(e) => onSetSynopsis(e.target.value)}
                    ></textarea>

                    <label htmlFor="cover">Cover</label>
                    <input
                        type="file"
                        id="cover"
                        name="cover"
                        value={selectedBook.cover}
                        onChange={(e) => onSetCover(e.target.value)}
                    ></input>
                    <Button>Update Book</Button>
                </form>
            </div>
        )
    );
}
export default UpdateForm;
