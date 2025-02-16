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
import {useState} from "react";
import {TitleBar} from "../components/TitleBar.tsx";

export function Categories() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Educational & Academic');

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
    const allBooks = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: 9.99,
            description: 'Description 1',
            category: 'Educational & Academic',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 10,
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            price: 19.99,
            description: 'Description 2',
            category: 'Educational & Academic',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 5,
        },
        {
            id: 3,
            title: 'Book 3',
            author: 'Author 3',
            price: 29.99,
            description: 'Description 3',
            category: 'Educational & Academic',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 3,
        },
        {
            id: 4,
            title: 'Book 4',
            author: 'Author 4',
            price: 39.99,
            description: 'Description 4',
            category: 'Educational & Academic',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 2,
        },
        {
            id: 5,
            title: 'Book 5',
            author: 'Author 5',
            price: 49.99,
            description: 'Description 5',
            category: 'Educational & Academic',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 1,
        },
        {
            id: 6,
            title: 'Book 6',
            author: 'Author 6',
            price: 59.99,
            description: 'Description 6',
            category: 'Children\'s Books',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
        {
            id: 7,
            title: 'Book 7',
            author: 'Author 7',
            price: 69.99,
            description: 'Description 7',
            category: 'Children\'s Books',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
        {
            id: 8,
            title: 'Book 8',
            author: 'Author 8',
            price: 79.99,
            description: 'Description 8',
            category: 'Children\'s Books',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
        {
            id: 9,
            title: 'Book 9',
            author: 'Author 9',
            price: 89.99,
            description: 'Description 9',
            category: 'Children\'s Books',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
        {
            id: 10,
            title: 'Book 10',
            author: 'Author 10',
            price: 99.99,
            description: 'Description 10',
            category: 'Children\'s Books',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
        {
            id: 11,
            title: 'Book 11',
            author: 'Author 11',
            price: 199.99,
            description: 'Description 11',
            category: 'History & Archaeology',
            imageUrl: '/src/assets/home-bg.jpg',
            stock: 0,
        },
    ];
    function filterBooksByCategory(category: string) {
        return allBooks.filter(book => book.category === category);
    }
    function handleCategoryClick(name: string) {
        setSelectedCategory(name);
        const filteredBooks = filterBooksByCategory(name);
        console.log(filteredBooks)
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
                    <TitleBar>{selectedCategory || 'Educational & Academic'}</TitleBar>
                </div>
            </div>
            <Footer/>
        </section>
    );
}