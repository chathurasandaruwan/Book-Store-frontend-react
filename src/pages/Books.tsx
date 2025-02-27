import BookList from "../components/BookList.tsx";
import {TitleBar} from "../components/TitleBar.tsx";
import Footer from "../components/Footer.tsx";
import PaginatedBookList from "../components/PaginatedBookList.tsx";
import {AppDispatch, RootState} from "../store/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {getBooksData} from "../Slices/BookSlice.ts";
import {useEffect} from "react";
import {Book} from "../interface/Book.ts";

export function Books() {
    const dispatch = useDispatch<AppDispatch>();
  /*  const isPaymentSuccess = useSelector((state: RootState) => state.payment.isSuccess);
    if (isPaymentSuccess) dispatch(getBooksData());*/
    useEffect(() => {
        dispatch(getBooksData());
    }, [dispatch]);
    const allBooks:Book[] = useSelector((state:RootState) => state.bookData.books);
    const popularBooks = allBooks.filter(book => book.stock > 0).slice(0, 8);
    const leastPopularBooks = allBooks
        .filter(book => book.stock > 0 && book.stock < 5)
        .slice(0, 4);
    return (
        <section className='bg-gray-200'>
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
                    <PaginatedBookList books={allBooks} itemsPerPage={8}/>
                </div>
            </div>
            <Footer/>
        </section>
    );
}