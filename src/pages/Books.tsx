import BookList from "../components/BookList.tsx";
import {TitleBar} from "../components/TitleBar.tsx";
import Footer from "../components/Footer.tsx";

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
        },
        {
            id: 9,
            title: 'Book 9',
            author: 'Author 9',
            price: 89.99,
            description: 'Description 9',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 9,
        },
        {
            id: 10,
            title: 'Book 10',
            author: 'Author 10',
            price: 99.99,
            description: 'Description 10',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 6,
        },
    ];
    return (
        <section>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Book Collection</h1>
                <div className="mb-12">
                    <TitleBar>Most Popular Books</TitleBar>
                    <BookList books={popularBooks}/>
                </div>
                <div className="mb-12">
                    <TitleBar>Least Popular Books</TitleBar>
                    <BookList books={leastPopularBooks}/>
                </div>
                <div>
                    <TitleBar>All Books</TitleBar>
                    <BookList books={allBooks}/>
                </div>
            </div>
            <Footer/>
        </section>
    );
}