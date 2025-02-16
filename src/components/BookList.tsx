import React, {useState} from 'react';
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
                    <div
                        key={book.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
                    >
                        <img
                            src={book.imageUrl}
                            alt={book.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-1">{book.title}</h2>
                            <p className="text-gray-600 mb-1">by {book.author}</p>
                            <p className="text-blue-600 font-bold mb-2">${book.price.toFixed(2)}</p>
                            <p className="absolute bottom-16 right-6 text-sm text-gray-600 mb-4">Stock: {book.stock}</p>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleViewBook(book)}
                                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors"
                                >
                                    View
                                </button>
                                <button
                                    onClick={() => {console.log(book)}}
                                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-300 hover:text-black transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
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