import { useState } from "react"
import {BookCard} from "./BookCard.tsx";
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

interface PaginatedBookListProps {
    books: BookProps[]
    itemsPerPage: number
}

export default function PaginatedBookList({ books, itemsPerPage }: PaginatedBookListProps) {
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastBook = currentPage * itemsPerPage
    const indexOfFirstBook = indexOfLastBook - itemsPerPage
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

    const totalPages = Math.ceil(books.length / itemsPerPage)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const [selectedBook, setSelectedBook] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleViewBook = (book: any) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 mt-16">
                {currentBooks.map((book) => (
                    <BookCard key={book.id} {...book} onViewBook={handleViewBook} />
                ))}
                <BookDetails
                    book={selectedBook}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
            <div className="flex justify-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-4 py-2 border rounded ${
                            currentPage === number ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
                        }`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    )
}

