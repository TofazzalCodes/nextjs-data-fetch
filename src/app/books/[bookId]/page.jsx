export const generateStaticParams = async() => {
    const res = await fetch("http://localhost:5000/books")
    const books = await res.json()

    return books.map(book => ({bookId : book.id}))
}

const BookDetailsPage = async ({params}) => {
    const {bookId} = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`)
    const {title, author, price, rating} = await res.json()
    return (
        <div>
            <h2>Book Details: {bookId} </h2>
            <h1>Title: {title} </h1>
            <p>Author: {author} </p>
            <p>Price: {price} </p>
            <p>Rating: {rating} </p>
        </div>
    );
};

export default BookDetailsPage;