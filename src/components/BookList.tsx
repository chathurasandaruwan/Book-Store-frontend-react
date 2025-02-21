import {BookCard} from "./BookCard.tsx";
import React, {useState} from "react";
import BookDetails from "./BookDetails.tsx";
import {Book} from "../interface/Book.ts";

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleViewBook = (book: Book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {books.map((book) => (
                    <BookCard key={book.id} {...book} onViewBook={handleViewBook} />
                ))}
                <BookDetails
                    book={selectedBook}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default BookList;