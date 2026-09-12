import BookCard from "@/componets/BookCard";


const BooksPage = async () => {
    const res = await fetch("http://localhost:5000/books")
    const books = await res.json()
    return (
        <div className="w-11/12 mx-auto space-y-3">
            <h2>Books: {books.length} </h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;