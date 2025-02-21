import Footer from "../components/Footer.tsx";
import {
    AcademicCapIcon,
    BookOpenIcon,
    ClockIcon,
    BeakerIcon,
    UserIcon,
    BriefcaseIcon,
    HeartIcon,
    CameraIcon,
    GlobeAltIcon,
    ScaleIcon,
    CakeIcon,
    TrophyIcon,
    FilmIcon,
    NewspaperIcon,
    BookmarkIcon
} from '@heroicons/react/24/outline';
import {useEffect, useState} from "react";
import {TitleBar} from "../components/TitleBar.tsx";
import PaginatedBookList from "../components/PaginatedBookList.tsx";
import {Book} from "../interface/Book.ts";
import {AppDispatch, RootState} from "../store/Store.ts";
import {useDispatch, useSelector} from "react-redux";
import {getBooksData} from "../Slices/BookSlice.ts";
export function Categories() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBooksData());
    }, [dispatch]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>();
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const categories = [
        { name: 'Educational & Academic', icon: AcademicCapIcon },
        { name: 'Children\'s Books', icon: BookOpenIcon },
        { name: 'History & Archaeology', icon: ClockIcon },
        { name: 'Science & Technology', icon: BeakerIcon },
        { name: 'Biographies & Memoirs', icon: UserIcon },
        { name: 'Business & Economics', icon: BriefcaseIcon },
        { name: 'Health & Wellness', icon: HeartIcon },
        { name: 'Art & Photography', icon: CameraIcon },
        { name: 'Travel & Adventure', icon: GlobeAltIcon },
        { name: 'Law & Politics', icon: ScaleIcon },
        { name: 'Cookbooks & Food', icon: CakeIcon },
        { name: 'Sports & Fitness', icon: TrophyIcon },
        { name: 'Comics & Graphic Novels', icon: FilmIcon },
        { name: 'Magazines & Journals', icon: NewspaperIcon },
        { name: 'Fiction', icon: BookmarkIcon }
    ];
    const allBooks:Book[] = useSelector((state:RootState) => state.bookData.books);
    function filterBooksByCategory(category: string) {
        return allBooks.filter(book => book.category === category);
    }
    function handleCategoryClick(name: string) {
        setSelectedCategory(name);
        const result: Book[] = filterBooksByCategory(name);
        setFilteredBooks(result)
    }
    return (
        <section className='bg-gray-200'>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Categories</h1>
                {/*categories list*/}
                <div className="flex flex-wrap gap-4 mb-8">
                    {categories.map(({ name, icon: Icon }) => (
                        <button
                            key={name}
                            onClick={() => handleCategoryClick(name)}
                            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
                                selectedCategory === name
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border border-gray-400'
                            }`}>
                            <Icon className="h-5 w-5" />
                            <span>{name}</span>
                        </button>
                    ))}
                </div>
                {/*content*/}
                <div className='mb-12'>
                    <TitleBar>{selectedCategory || 'Select a category'}</TitleBar>
                    {filteredBooks.length > 0 ?
                        <PaginatedBookList books={filteredBooks} itemsPerPage={4} /> : <p className='text-2xl font-bold text-gray-600 text-center mt-4'>No books found in this category.</p>
                    }
                </div>
            </div>
            <Footer/>
        </section>
    );
}