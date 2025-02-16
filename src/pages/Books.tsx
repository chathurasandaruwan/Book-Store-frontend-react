import BookList from "../components/BookList.tsx";

export function Books() {
    const popularBooks = [
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

    const leastPopularBooks = [
        {
            id: 5,
            title: 'Book 5',
            author: 'Author 5',
            price: 49.99,
            description: 'Description 5',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 1,
        },
        {
            id: 6,
            title: 'Book 6',
            author: 'Author 6',
            price: 59.99,
            description: 'Description 6',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
    ];

    const allBooks = [...popularBooks, ...leastPopularBooks,
        {
            id: 7,
            title: 'Book 7',
            author: 'Author 7',
            price: 69.99,
            description: 'Description 7',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 4,
        },
        {
            id: 8,
            title: 'Book 8',
            author: 'Author 8',
            price: 79.99,
            description: 'Description 8',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 7,
        }];
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Book Collection</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
                <BookList books={popularBooks}/>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Least Popular Books</h2>
                <BookList books={leastPopularBooks}/>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">All Books</h2>
                <BookList books={allBooks}/>
            </section>
        </div>
    );
}