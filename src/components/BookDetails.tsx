import React from 'react';

interface BookDetailModalProps {
    book: any;
    isOpen: boolean;
    onClose: () => void;
}

const BookDetail: React.FC<BookDetailModalProps> = ({ book, isOpen, onClose }) => {
    if (!isOpen || !book) return null;

    return (
        <div className="fixed inset-0 glass-effect  flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                        <img
                            src={`data:image/jpeg;base64,${book.image}`}
                            alt={book.title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">{book.title}</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Author</h3>
                                <p className="text-gray-600">{book.author}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Price</h3>
                                <p className="text-2xl font-bold text-blue-600">${book.price.toFixed(2)}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Description</h3>
                                <p className="text-gray-600">{book.description}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Stock</h3>
                                <p className="text-gray-600">{book.stock} copies available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;