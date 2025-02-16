import React from 'react';
import { useNavigate} from "react-router";

const Footer: React.FC = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">BookStore</h3>
                        <p className="text-gray-200">
                            Your one-stop destination for all your literary needs. Discover amazing books at great prices.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white transition-colors" onClick={() => navigate('/')}>Home</a>
                                {/*<Link to='' className="text-gray-200 hover:text-white transition-colors">Home</Link>*/}
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white transition-colors" onClick={() => navigate('/books')}>Books</a>
                                {/*<Link to='books' className="text-gray-200 hover:text-white transition-colors">Books</Link>*/}
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white transition-colors"onClick={() => navigate('/categories')}>Categories</a>
                                {/*<Link to='categories' className="text-gray-200 hover:text-white transition-colors">Categories</Link>*/}
                            </li>
                            <li>
                                <a href="#" className="text-gray-200 hover:text-white transition-colors" onClick={() => navigate('/contactUs')}>Contact-Us</a>
                                {/*<Link to='contactUs' className="text-gray-200 hover:text-white transition-colors">Contact-Us</Link>*/}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-200">
                            <li>Email: info@bookstore.com</li>
                            <li>Phone: +94-123-4567</li>
                            <li>Address: 123 Main Street</li>
                            <li>City, State 12345</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-200">
                    <p>&copy; 2025 BookStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;