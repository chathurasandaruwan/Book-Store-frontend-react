import React, {useState} from 'react';
import BookDetails from "./BookDetails.tsx";

const BookList: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const books = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: 9.99,
            description: 'Description 1',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 10,
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            price: 19.99,
            description: 'Description 2',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 5,
        },
        {
            id: 3,
            title: 'Book 3',
            author: 'Author 3',
            price: 29.99,
            description: 'Description 3',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 3,
        },
        {
            id: 4,
            title: 'Book 4',
            author: 'Author 4',
            price: 39.99,
            description: 'Description 4',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 2,
        },
    ];
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