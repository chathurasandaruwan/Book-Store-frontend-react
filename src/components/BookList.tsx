import {BookCard} from "./BookCard.tsx";
import React, {useState} from "react";
import BookDetails from "./BookDetails.tsx";
interface BookProps {
    id: number;
    title: string;
    author: string;
    price: number;
    description: string;
    imageUrl: string;
    stock: number;
}

interface BookListProps {
    books: BookProps[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleViewBook = (book: any) => {
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